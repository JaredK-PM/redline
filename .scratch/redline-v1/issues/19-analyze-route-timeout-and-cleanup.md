# 19: `/api/analyze` timeout, output cap, and cleanup

**What to build:** Investigate and fix the unconfirmed risk that
`src/app/api/analyze/route.ts` can exceed the Vercel function time limit on
long contracts. Observed in code, not yet reproduced: no `maxDuration`, no
fetch timeout or `AbortController`, no `max_tokens` on the completion request,
an extra unbounded `GET /models` connectivity call before the real call, and a
3-attempt retry loop. The client in `src/app/review/new/page.tsx` also has no
timeout, so a slow call shows a spinner until the platform kills it.

**Blocked by:** 18 (confirm the site is healthy first; the 2026-10-14 hang was
Supabase, not this route)

**Status:** needs-triage

- [ ] Reproduce or rule out a timeout with a long contract against the
      deployed app (check Vercel logs)
- [ ] If confirmed: set `maxDuration`, add a fetch timeout and `max_tokens`
- [ ] Remove the `/models` connectivity pre-check, or justify keeping it
- [ ] Client shows a clear error on timeout instead of an endless spinner

## Notes

- `src/lib/openrouter-boundary.ts` is a second OpenRouter implementation
  (different base URL and provider pinning) and is not what the route uses.
  Decide which is canonical when working this ticket (relates to 14).

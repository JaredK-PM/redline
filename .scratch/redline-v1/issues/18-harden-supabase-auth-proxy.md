# 18: Harden the Supabase auth proxy so an auth outage cannot hang the site

**What to build:** `updateSession()` in `src/lib/supabase/proxy.ts` awaits
`supabase.auth.getUser()` on every request (the matcher in `src/proxy.ts`
covers all pages and API routes) with no timeout and no error handling. When
the Supabase project was paused (2026-10-14), every request stalled on
`AuthRetryableFetchError: fetch failed` (status 0) and the whole site hung.
Wrap the call in a short timeout and try/catch so an auth outage degrades to
"signed out" instead of blocking the app.

**Blocked by:** none

**Status:** needs-triage

- [ ] With Supabase unreachable, pages and `/api/*` respond within a few
      seconds instead of hanging
- [ ] An auth failure is treated as a signed-out user, not a 500
- [ ] Normal signed-in session refresh still works
- [ ] A test covers the unreachable-Supabase path (mocked, not live)

## Notes

- Root cause of the 2026-10-14 outage was the Supabase free-tier project being
  paused, not a code bug. This ticket is hardening only. See 20.

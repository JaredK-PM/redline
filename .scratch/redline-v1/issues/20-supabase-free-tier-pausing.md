# 20: Supabase free-tier pausing will recur

**What to build:** Decide how to keep the deployed app from going down when
the Supabase free-tier project auto-pauses after about 7 days of inactivity
(it did on 2026-10-14; restoring from the Supabase dashboard fixed it, no
redeploy needed). Options: upgrade to Pro, or add a scheduled keep-alive
request. Not decided.

**Blocked by:** none

**Status:** needs-triage

- [ ] Decision recorded (Pro vs keep-alive vs accept manual restores)
- [ ] If keep-alive: it uses an authorized, low-cost request and no secrets
      are committed
- [ ] Restore steps noted for the next time it happens

## Notes

- Symptom to recognize: Vercel logs show `AuthRetryableFetchError: fetch
  failed`, status 0, and every page hangs. Env vars were fine.
- Related: 18 (the proxy should not let this take the whole site down).

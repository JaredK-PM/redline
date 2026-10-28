# 21: Password reset flow has never been verified end-to-end

**What to build:** Nothing new — `/forgot-password` and `/reset-password`
already exist (commit 88ed096: `requestPasswordReset` / `updatePassword` in
`src/app/login/actions.ts`, verified via the generic OTP route at
`src/app/auth/confirm/route.ts`). What's missing is proof it actually works:
no session has run the real flow (request a reset email, receive it, click
through, set a new password, confirm login with the new password).

**Why this matters:** explicitly asked for by the user — "need to confirm
and a shortcut could cost a job." A broken reset flow discovered live in a
demo or interview would be worse than not building it at all.

**Blocked by:** 18 (auth proxy can hang the whole site when Supabase is
unreachable) and 20 (Supabase free-tier project auto-pauses after ~7 days
idle). Either condition, if hit mid-test, will look like a broken reset flow
when the real cause is infrastructure. Confirm the Supabase project isn't
currently paused (or that 18 is fixed) before trusting a failed test result.

**Also note:** local `.env.local` still holds placeholder Supabase values
(`https://dummy.supabase.co` / `dummy_key`), so this cannot be tested against
local dev — the real credentials exist only in Vercel's environment. Test
against the deployed app.

**Status:** needs-triage

- [ ] Confirm the Supabase project is awake (visit the dashboard first if
      it's been idle)
- [ ] Request a reset email through the deployed app's `/forgot-password`
      with a real inbox
- [ ] Confirm the email arrives (check spam — Supabase's default sender
      often gets filtered) and its link matches the expected pattern:
      `/auth/confirm?token_hash=...&type=recovery&next=/reset-password`
- [ ] Click through, land on `/reset-password`, set a new password
- [ ] Confirm redirect to `/account` and that the new password actually
      signs in afterward
- [ ] If the "Confirm signup" email template was never updated to the
      matching `type=signup` pattern, signup confirmation has the same
      unverified-in-production status — check that too while in the
      dashboard

## Notes

- A setup wizard was drafted in a prior session's scratchpad (not committed)
  to walk through provisioning Supabase + fixing both email templates. It
  was never confirmed run; given ticket 20's evidence that a real Supabase
  project already exists and is deployed, provisioning is likely done — but
  the email-template correctness and the actual click-through were never
  independently confirmed.

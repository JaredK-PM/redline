import Link from "next/link";
import Navigation from "@/components/Navigation";
import { requestPasswordReset } from "../login/actions";
import styles from "../login/login.module.css";

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; checkEmail?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <h1 className={styles.heading}>Reset your password</h1>

        {params.error && <p className={styles.error}>{params.error}</p>}
        {params.checkEmail && (
          <p className={styles.notice}>
            If an account exists for that email, a reset link is on its way.
            Check your inbox and follow the link to choose a new password.
          </p>
        )}

        {!params.checkEmail && (
          <form className={styles.form} action={requestPasswordReset}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.input}
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@yourbusiness.com"
              />
            </div>
            <button className={styles.submit} type="submit">
              Send reset link
            </button>
          </form>
        )}

        <p className={styles.toggle}>
          <Link href="/login">Back to sign in</Link>
        </p>
      </main>
    </>
  );
}

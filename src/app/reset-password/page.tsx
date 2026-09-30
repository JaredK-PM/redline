import { redirect } from "next/navigation";
import Navigation from "@/components/Navigation";
import { createClient } from "@/lib/supabase/server";
import { updatePassword } from "../login/actions";
import styles from "../login/login.module.css";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?error=Reset%20link%20is%20invalid%20or%20expired");
  }

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <h1 className={styles.heading}>Choose a new password</h1>

        {params.error && <p className={styles.error}>{params.error}</p>}

        <form className={styles.form} action={updatePassword}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              New password
            </label>
            <input
              className={styles.input}
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="At least 6 characters"
            />
          </div>
          <button className={styles.submit} type="submit">
            Update password
          </button>
        </form>
      </main>
    </>
  );
}

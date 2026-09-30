import Link from "next/link";
import Logo from "./Logo";
import styles from "./Navigation.module.css";

type NavigationProps = {
  isLoggedIn?: boolean;
};

export default function Navigation({ isLoggedIn = false }: NavigationProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand} aria-label="ReviewIt home">
          <Logo size={26} />
        </Link>

        <div className={styles.links}>
          <Link href="/resources" className={styles.link}>
            Resources
          </Link>
          {isLoggedIn ? (
            <>
              <Link href="/account" className={`${styles.link} ${styles.linkPrimary}`}>
                Dashboard
              </Link>
              <Link href="/review/new" className={styles.cta}>
                Analyze a contract
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className={`${styles.link} ${styles.linkPrimary}`}>
                Sign in
              </Link>
              <Link href="/login?mode=signup" className={styles.cta}>
                Get started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

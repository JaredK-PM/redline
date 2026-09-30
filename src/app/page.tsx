"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";
import {
  PasteIcon,
  FlagLineIcon,
  AskIcon,
  QuoteCheckIcon,
  NoFabricationIcon,
  RedLinesIcon,
  HeroDocument,
} from "@/components/icons";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      width="16"
      height="16"
      className={open ? `${styles.chev} ${styles.chevOpen}` : styles.chev}
      aria-hidden="true"
    >
      <path
        d="M6 3.5L11 8L6 12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type FlagRowProps = {
  severity: "BLOCKER" | "PUSH" | "NOTE";
  clause: string;
  why: string;
  sourceSentence: string;
  counterOffer: string;
  counterOfferLabel?: string;
  showCopy?: boolean;
};

function FlagRow({
  severity,
  clause,
  why,
  sourceSentence,
  counterOffer,
  counterOfferLabel = "Counter-offer",
  showCopy = true,
}: FlagRowProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(counterOffer).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  const sevClass =
    severity === "BLOCKER"
      ? styles.sevLabel
      : severity === "PUSH"
        ? `${styles.sevLabel} ${styles.sevLabelPush}`
        : `${styles.sevLabel} ${styles.sevLabelNote}`;

  return (
    <div>
      <button
        type="button"
        className={styles.row}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={sevClass}>{severity}</span>
        <span className={styles.clauseCol}>
          <span className={styles.clause}>{clause}</span>
          <span className={styles.why}>{why}</span>
        </span>
        <Chevron open={open} />
      </button>
      <div
        className={
          open
            ? `${styles.detailClip} ${styles.detailClipOpen}`
            : styles.detailClip
        }
      >
        <div className={styles.detailInner}>
          <div className={styles.detailContent}>
            <div>
              <div className={styles.detailHeading}>Exact source sentence</div>
              <blockquote className={styles.quote}>
                &ldquo;{sourceSentence}&rdquo;
              </blockquote>
            </div>
            <div>
              <div className={styles.detailHeading}>{counterOfferLabel}</div>
              <p className={styles.counter}>
                {showCopy ? `“${counterOffer}”` : counterOffer}
              </p>
              {showCopy && (
                <button
                  type="button"
                  className={
                    copied
                      ? `${styles.copyBtn} ${styles.copyBtnCopied}`
                      : styles.copyBtn
                  }
                  onClick={handleCopy}
                >
                  {copied ? "Copied" : "Copy counter-offer"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.page}>
      <Navigation />

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.headline}>
            Know what&apos;s in your contract before you sign it.
          </h1>
          <p className={styles.tagline}>Easy, immediate contract review.</p>
          <p className={styles.subhead}>
            ReviewIt reads any contract, lease, or agreement and shows you
            exactly which clauses work against you — each one traced to the
            exact sentence it came from, with negotiation language ready to
            send. Built for freelancers, small business owners, and gig
            workers who sign without a law firm on retainer.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.cta} href="/login?mode=signup">
              Analyze a contract, free
            </Link>
            <a className={styles.secondaryLink} href="#how-it-works">
              See how it works
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <HeroDocument />
        </div>
      </section>

      <section className={styles.steps} id="how-it-works">
        <h2 className={styles.sectionTitle}>How it works</h2>
        <div className={styles.stepRow}>
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <PasteIcon />
            </div>
            <div className={styles.stepNumber}>1</div>
            <h3 className={styles.stepTitle}>Paste your contract</h3>
            <p className={styles.stepText}>
              No upload, no file leaving your browser until you&apos;re ready
              to analyze. Works for MSAs, leases, NDAs, and freelance
              agreements.
            </p>
          </div>
          <div className={styles.stepConnector} aria-hidden="true" />
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <FlagLineIcon />
            </div>
            <div className={styles.stepNumber}>2</div>
            <h3 className={styles.stepTitle}>Get every red flag, ranked</h3>
            <p className={styles.stepText}>
              Clauses that work against you are flagged Blocker, Push, or
              Note — each one anchored to the exact sentence, with a drafted
              counter-offer ready to send.
            </p>
          </div>
          <div className={styles.stepConnector} aria-hidden="true" />
          <div className={styles.step}>
            <div className={styles.stepIcon}>
              <AskIcon />
            </div>
            <div className={styles.stepNumber}>3</div>
            <h3 className={styles.stepTitle}>Ask what&apos;s still unclear</h3>
            <p className={styles.stepText}>
              Ask a follow-up question and get an answer grounded only in
              your document — never a guess dressed up as one.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.demo}>
        <h2 className={styles.sectionTitle}>See it in action</h2>
        <div className={styles.contrast}>
          <div className={styles.panel}>
            <div className={styles.panelLabel}>What the contract says</div>
            <p className={styles.before}>
              &ldquo;By executing this Agreement, the undersigned individual
              personally guarantees full payment of all fees owed by Customer
              hereunder.&rdquo;
            </p>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelLabel}>What ReviewIt shows you</div>
            <div className={styles.after}>
              <FlagRow
                severity="BLOCKER"
                clause="Personal guarantee"
                why="Makes you personally liable for a business debt, not just the company."
                sourceSentence="By executing this Agreement, the undersigned individual personally guarantees full payment of all fees owed by Customer hereunder."
                counterOffer="Strike this Section in its entirety; Customer’s obligations are limited to the entity executing this Agreement."
              />
            </div>
          </div>
        </div>

        <div className={styles.teaser} id="teaser">
          <div className={styles.teaserLabel}>
            Two more of the five flags this contract would surface:
          </div>
          <div className={styles.teaserBoard}>
            <FlagRow
              severity="PUSH"
              clause="One-sided limitation of liability"
              why="Leverage decides whether this is still signable if they refuse to change it."
              sourceSentence="In no event shall Provider's aggregate liability exceed the fees paid by Customer in the one (1) month preceding the event giving rise to the claim, and Provider shall have no liability for indirect, incidental, or consequential damages."
              counterOffer="Provider's aggregate liability shall not be less than twelve (12) months of fees paid, and the exclusion of indirect damages shall not apply to breaches of confidentiality or data-protection obligations."
            />
            <FlagRow
              severity="NOTE"
              clause="Governing law: Delaware"
              why="Worth knowing: sets the rules for everything else above."
              sourceSentence="This Agreement shall be governed by the laws of the State of Delaware, without regard to conflict of law principles."
              counterOffer="Informational: this determines how every other clause is interpreted and enforced. No action needed on its own."
              counterOfferLabel="What to do"
              showCopy={false}
            />
          </div>
          <p className={styles.footnote}>
            This contract is synthetic: built to show how ReviewIt reads a
            document, not a real submission. ReviewIt is pre-launch: creating
            an account reserves your place, but pasting your own contract
            isn&apos;t live yet.
          </p>
        </div>
      </section>

      <section className={styles.trust}>
        <div className={styles.trustIntro}>
          <h2 className={styles.sectionTitle}>Why trust the flags</h2>
          <p className={styles.trustLede}>
            Every AI contract tool claims accuracy. Almost none show their
            work. ReviewIt is built so you never have to take its word for
            it.
          </p>
        </div>
        <div className={styles.trustList}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <QuoteCheckIcon />
            </div>
            <div>
              <h3 className={styles.trustTitle}>
                Every flag cites its source
              </h3>
              <p className={styles.trustText}>
                A flag that can&apos;t show the exact sentence it came from is
                dropped, not shown anyway. You can always check the claim
                against the words yourself.
              </p>
            </div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <NoFabricationIcon />
            </div>
            <div>
              <h3 className={styles.trustTitle}>
                Clean contracts get a clean verdict
              </h3>
              <p className={styles.trustText}>
                ReviewIt doesn&apos;t manufacture problems to look thorough.
                If nothing crosses the line, you&apos;re told that plainly.
              </p>
            </div>
          </div>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <RedLinesIcon />
            </div>
            <div>
              <h3 className={styles.trustTitle}>
                Your own red lines drive the analysis
              </h3>
              <p className={styles.trustText}>
                Tell ReviewIt what you personally won&apos;t accept — even if
                it&apos;s standard market language, it gets flagged for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>
          Read it before you sign it.
        </h2>
        <p className={styles.finalCtaSubtitle}>
          Easy, immediate contract review — no law firm retainer required.
        </p>
        <Link className={styles.finalCtaButton} href="/login?mode=signup">
          Analyze a contract, free
        </Link>
      </section>

      <footer className={styles.footer}>
        <Logo size={20} />
        <div className={styles.footerLinks}>
          <Link href="/resources" className={styles.footerLink}>
            Resources
          </Link>
          <Link href="/login" className={styles.footerLink}>
            Sign in
          </Link>
        </div>
        <p className={styles.footerNote}>
          ReviewIt is not a law firm and does not provide legal advice.
        </p>
      </footer>
    </main>
  );
}

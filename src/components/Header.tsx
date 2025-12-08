"use client";

import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoBrand}>
            <div className={styles.logoSymbol}>TR</div>
            <div className={styles.logoText}>
              <span className={styles.tagline}>The Restaurant</span>
            </div>
          </div>
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/gallery">Gallery</Link>
      </nav>

      <div className={styles.ctaSection}>
        <Link href="/reservation" className={styles.ctaButton}>
          Book Now
        </Link>
      </div>
    </header>
  );
}

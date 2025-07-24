'use client';

import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.logo}>
        <Link href="/">
        <div className={styles.logoText}>
            <span className={styles.initials}>TR</span>
            <span className={styles.tagline}>The Restaurant</span>
        </div>
        </Link>
    </div>
    <nav className={styles.nav}>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
    </nav>
    </header>
  );
}
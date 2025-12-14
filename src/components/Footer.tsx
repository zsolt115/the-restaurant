"use client";

import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialsSection}>
        <Link href="/privacy">Facebook</Link>
        <Link href="/terms">Instagram</Link>
      </div>

      <nav className={styles.nav}>
        <div className={styles.openingHoursSection}>
          <div>
            <h2>Opening Hours</h2>
          </div>
          <div className={styles.openingTime}>
            <span>Mon – Thu: 11:00 AM – 10:00 PM</span>
            <span>Fri – Sat: 11:00 AM – 11:30 PM</span>
            <span>Sun: 12:00 PM – 9:00 PM</span>
          </div>
        </div>
        <div className={styles.addressSection}>
          <span>123 Main Street, New York, NY</span>
          <span>📞 (555) 123-4567</span>
          <span>✉️ info@therestaurant.com</span>
        </div>
      </nav>
      <div className={styles.infoPrivacyAndTerms}>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
      </div>
    </footer>
  );
}

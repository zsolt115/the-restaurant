import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <section className={styles.hero}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <h1 className={styles.title_h1}>Welcome to The Restaurant</h1>
          <h2 className={styles.title_h2}>
            Authentic flavors, crafted with passion.
          </h2>
        </div>
      </section>
    </main>
  );
}

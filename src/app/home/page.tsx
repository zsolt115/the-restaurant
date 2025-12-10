import styles from "./home.module.scss";

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <h1 className={styles.title_h1}>Welcome to The Restaurant</h1>
      <h2 className={styles.title_h2}>
        Authentic flavors, crafted with passion.
      </h2>
      <hr />
      {/* <section key={section.category} className={styles.section}>
        <h2>{section.category}</h2>
      </section> */}
    </main>
  );
}

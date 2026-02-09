import styles from './about.module.scss'

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero}>
        <h1>About This Project</h1>
        <p>A place where authentic flavors meet modern craft.</p>
      </section>

      <section className={styles.story}>
        <div>
          <h2>
            Our Story
          </h2>
          <p>
            Our restaurant was born from a simple idea: serve honest food made with passion. Inspired by traditional recipes and refined with a modern touch, every dish tells a story.
          </p>
          <p>
            We focus on quality ingredients, warm atmosphere, and unforgettable flavors.
          </p>
        </div>
        <div className={styles.image}>
          <img
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
            alt="Restaurant interior"
          />
        </div>
      </section>

      <section className={styles.values}>
        <div className={styles.card}>
          <h3>Fresh Ingredients</h3>
          <p>Carefully selected, always seasonal.</p>
        </div>
        <div className={styles.card}>
          <h3>Crafted with Care</h3>
          <p>Every dish prepared with attention to detail.</p>
        </div>
        <div className={styles.card}>
          <h3>Warm Atmosphere</h3>
          <p>A place to relax, enjoy, and feel at home.</p>
        </div>
      </section>
    </main>
  );
}

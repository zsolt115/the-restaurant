import styles from "./menu.module.scss";
import { menuItems } from "@/lib/menuItems";
// import Image from "next/image";

export default function MenuPage() {
  return (
    <main className={styles.menuPage}>
      <h1 className={styles.title_h1}>Menu</h1>
      {menuItems.map((section) => (
        <section key={section.category} className={styles.section}>
          <h2>{section.category}</h2>
          <ul>
            {section.items.map((item) => (
              <li key={item.name} className={styles.item}>
                {item.image && <img src={item.image} alt={item.name} />}
                <div className={styles.details}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className={styles.price}>{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}

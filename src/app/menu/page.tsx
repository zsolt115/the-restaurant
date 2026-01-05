import {
  Star,
  Soup,
  Pizza,
  Beef,
  Coffee,
  IceCream,
  UtensilsCrossed,
} from "lucide-react";
import styles from "./menu.module.scss";
import { menuItems } from "@/lib/menuItems";
// import Image from "next/image";

export default function MenuPage() {
  const categories = [
    { name: "Popular", icon: Star },
    { name: "Soups", icon: Soup },
    { name: "Pizza", icon: Pizza },
    { name: "Burger", icon: Beef },
    { name: "Pasta", icon: UtensilsCrossed },
    { name: "Dessert", icon: IceCream },
    { name: "Drink", icon: Coffee },
  ];

  return (
    <main className={styles.menuPage}>
      <h1 className={styles.title_h1}>Menu</h1>

      <div className={styles.selectCategory}>
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <button
              key={cat.name}
              className={`${styles.categoryBtn} ${
                index === 0 ? styles.active : ""
              }`}
            >
              <Icon className={styles.icon} />
              <span className={styles.label}>{cat.name}</span>
            </button>
          );
        })}
      </div>

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
                  <p>{item.ingredients}</p>
                  <p>{item.portion}</p>
                  <ul>
                    {Object.entries(item.nutrition).map(([key, value]) => (
                      <li key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)} : {value}
                      </li>
                    ))}
                  </ul>
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

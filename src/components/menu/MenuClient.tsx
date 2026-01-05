"use client";

import {
  Star,
  Soup,
  Pizza,
  Beef,
  Coffee,
  IceCream,
  UtensilsCrossed,
} from "lucide-react";
import styles from "./MenuClient.module.scss";
import { menuItems } from "@/lib/menuItems";

import { useState } from "react";
// import Image from "next/image";

export default function MenuPage() {
  const categories = [
    { name: "Popular", icon: Star },
    { name: "Soup", icon: Soup },
    { name: "Pizza", icon: Pizza },
    { name: "Burger", icon: Beef },
    { name: "Pasta", icon: UtensilsCrossed },
    { name: "Dessert", icon: IceCream },
    { name: "Drink", icon: Coffee },
  ];

  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <main className={styles.menuPage}>
      <div className={styles.selectCategory}>
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className={`${styles.categoryBtn} ${
                index === 0 ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category.name)}
            >
              <Icon className={styles.icon} />
              <span className={styles.label}>{category.name}</span>
            </button>
          );
        })}
      </div>

      {menuItems
        .filter((section) =>
          activeCategory === "Popular"
            ? section.items.filter((item) => item.popular)
            : section.category === activeCategory
        )
        .map((section) => (
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

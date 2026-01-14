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
  const [selectedMenuCategory, setSelectedMenuCategory] = useState(0);

const filteredItems = menuItems.flatMap((section) => {
  if (activeCategory === "Popular") {
    return section.items
      .filter((item) => item.popular)
      .map(item => ({...item, category: "Popular"}));
  }

  if (activeCategory === section.category) {
    return section.items.map(item => ({...item, category: section.category}));
  }

  return [];
});

  const groupedSections = Object.entries(
    filteredItems.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, typeof filteredItems>)
  ).map(([category, items]) => ({
    category,
    items
  }));

  return (
    <main className={styles.menuPage}>
      <div className={styles.selectCategory}>
        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className={`${styles.categoryBtn} ${
                index === selectedMenuCategory ? styles.active : ""}`}
              onClick={() => {
                setActiveCategory(category.name);
                setSelectedMenuCategory(index);
              }}
            >
              <Icon className={styles.icon} />
              <span className={styles.label}>{category.name}</span>
            </button>
          );
        })}
      </div>

      {groupedSections.map((section) => (
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
                  <p>{item.popular.toString()}</p>
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

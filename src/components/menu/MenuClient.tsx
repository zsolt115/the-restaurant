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

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
    };

    const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

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
          <ul className={styles.card_menu}>
            {section.items.map((item) => (
              <li 
                key={item.name} 
                className={styles.item} 
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseLeave={(e) => handleMouseLeave(e)}
              >
                {item.image && <img src={item.image} alt={item.name} />}
                <div className={styles.menuContent}>
                  <h3 className={styles.menuItemTitle}>{item.name}</h3>
                  <p className={styles.menuDescription}>{item.description}</p>
                  <div className={styles.menuIngredients}>
                    {item.ingredients.map((ingredient, index) => (
                    <span key={index} className={styles.ingredient}>
                      {ingredient}
                    </span>
                    ))}
                  </div>
                  <p>{item.portion}</p>
                  <ul>
                    {Object.entries(item.nutrition).map(([key, value]) => (
                      <li key={key} className={styles.menuDescription}>
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

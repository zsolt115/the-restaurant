import { pizzaMenu } from "./menu-category/pizza";
import { burgerMenu } from "./menu-category/burger";
import { pastaMenu } from "./menu-category/pasta";
import { soupsMenu } from "./menu-category/soup";
import { dessertMenu } from "./menu-category/dessert";
import { drinkMenu } from "./menu-category/drink";

export const menuItems = [
  ...soupsMenu,
  ...pizzaMenu,
  ...burgerMenu,
  ...pastaMenu,
  ...dessertMenu,
  ...drinkMenu,
];

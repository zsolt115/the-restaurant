import { pizzaMenu } from "./menu-category/pizza";
import { burgerMenu } from "./menu-category/burger";
import { pastaMenu } from "./menu-category/pasta";
import { soupsMenu } from "./menu-category/soups";
import { dessertMenu } from "./menu-category/desserts";
import { drinkMenu } from "./menu-category/drinks";

export const menuItems = [
  ...soupsMenu,
  ...pizzaMenu,
  ...burgerMenu,
  ...pastaMenu,
  ...dessertMenu,
  ...drinkMenu,
];

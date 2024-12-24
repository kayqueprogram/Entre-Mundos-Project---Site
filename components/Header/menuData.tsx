import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Sobre",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Game",
    newTab: false,
    submenu: [
      {
        id: 5,
        title: "Artes",
        path: "/arts",
        newTab: false,
      }
     
    ],
  },
];
export default menuData;

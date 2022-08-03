import { firstLevelMenu } from "../interfaces/menu.interfaces";
import { LevelCategory } from "../interfaces/page.interfaces";
import Image from "next/image";

export const firstMenu: firstLevelMenu[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <Image src={"#"} alt="star.svg" width="50px" height="50px" />,
    id: LevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <Image src={"#"} alt="star.svg" width="50px" height="50px" />,
    id: LevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <Image src={"#"} alt="star.svg" width="50px" height="50px" />,
    id: LevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <Image src={"#"} alt="star.svg" width="50px" height="50px" />,
    id: LevelCategory.Products,
  },
];

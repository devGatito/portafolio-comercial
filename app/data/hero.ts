
import {
  Globe02Icon,
  ShoppingCart01Icon,
  CodeIcon,
  FlashIcon,
  Settings01Icon,
  PaintBrush01Icon,
  Idea01Icon,
  UserGroupIcon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";

import type { WordItem } from "~/types/hero";

export const heroWords = {
  creation: [
    {
      text: "sitios web",
      icon: Globe02Icon,
     
    },
    {
      text: "e-commerce",
      icon: ShoppingCart01Icon,
      
    },
    {
      text: "web apps",
      icon: CodeIcon,
      
    },
  ],

  development: [
    {
      text: "soluciones",
      icon: FlashIcon,
      
    },
    {
      text: "automatizaciones",
      icon: Settings01Icon,
      
    },
    {
      text: "experiencias",
      icon: PaintBrush01Icon,
      
    },
  ],

  connection: [
    {
      text: "ideas",
      icon: Idea01Icon,
      
    },
    {
      text: "personas",
      icon: UserGroupIcon,
      
    },
    {
      text: "negocios",
      icon: Rocket01Icon,
      
    },
  ],
} satisfies Record<string, WordItem[]>;

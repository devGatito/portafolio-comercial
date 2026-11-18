
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
      color: "#2563EB",
    },
    {
      text: "e-commerce",
      icon: ShoppingCart01Icon,
      color: "#16A34A",
    },
    {
      text: "web apps",
      icon: CodeIcon,
      color: "#7C3AED",
    },
  ],

  development: [
    {
      text: "soluciones",
      icon: FlashIcon,
      color: "#EA580C",
    },
    {
      text: "automatizaciones",
      icon: Settings01Icon,
      color: "#0891B2",
    },
    {
      text: "experiencias",
      icon: PaintBrush01Icon,
      color: "#DB2777",
    },
  ],

  connection: [
    {
      text: "ideas",
      icon: Idea01Icon,
      color: "#CA8A04",
    },
    {
      text: "personas",
      icon: UserGroupIcon,
      color: "#4F46E5",
    },
    {
      text: "negocios",
      icon: Rocket01Icon,
      color: "#E11D48",
    },
  ],
} satisfies Record<string, WordItem[]>;

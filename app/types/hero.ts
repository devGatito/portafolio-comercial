
import type { ComponentProps } from "react";
import type { HugeiconsIcon } from "@hugeicons/react";

export interface WordItem {
  text: string;
  icon: ComponentProps<typeof HugeiconsIcon>["icon"];
  color: string;
}

export interface AnimatedWordProps {
  items: WordItem[];
  interval?: number;
  offset?: number;
}


import { HugeiconsIcon } from "@hugeicons/react";

import { useRotatingWord } from "~/hooks/useRotatingWord";
import type { AnimatedWordProps } from "~/types/hero";

import "./animated-word.css";

export default function AnimatedWord({
  items,
  interval = 5400,
  offset = 0,
}: AnimatedWordProps) {
  const { index } = useRotatingWord(
    items.length,
    interval,
    offset,
  );

  const current = items[index];

  if (!current) return null;

  return (
    <span
      className="
        relative inline-flex items-center
        gap-[0.25em] rounded-full
        bg-[#f5f5f5] px-[0.19em]
        leading-[1.12] align-baseline
        whitespace-nowrap
      "
    >
      <span
        key={`icon-${current.text}`}
        aria-hidden="true"
        className="
          animated-word-icon
          inline-flex size-[0.85em]
          shrink-0 items-center justify-center
        "
      >
        <HugeiconsIcon
          icon={current.icon}
          color={current.color}
          strokeWidth={1.7}
          className="size-full"
        />
      </span>

      <span
        key={`text-${current.text}`}
        className="animated-word-text inline-block"
      >
        {current.text}
      </span>
    </span>
  );
}

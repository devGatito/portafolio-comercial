
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";

import { useRotatingWord } from "~/hooks/useRotatingWord";
import type { AnimatedWordProps } from "~/types/hero";

export default function AnimatedWord({
  items,
  interval = 5400,
  offset = 0,
}: AnimatedWordProps) {
  const { index, reduceMotion } = useRotatingWord(
    items.length,
    interval,
    offset,
  );

  const current = items[index];

  if (!current) return null;

  return (
    <motion.span
      layout={!reduceMotion}
      transition={{
        layout: {
          duration: reduceMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className="
        relative inline-flex items-center
        rounded-full bg-[#f5f5f5]
        px-[0.19em] leading-[1.12]
        align-baseline whitespace-nowrap
      "
    >
      {/* Icon */}
      <span
        aria-hidden="true"
        className="
          relative mr-[0.25em]
          inline-flex size-[0.85em]
          shrink-0 items-center justify-center
        "
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={`icon-${current.text}`}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -12,
                    rotate: -25,
                    scale: 0.6,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.7,
              transition: {
                duration: reduceMotion ? 0 : 0.15,
              },
            }}
            transition={{
              delay: reduceMotion ? 0 : 0.3,
              duration: reduceMotion ? 0 : 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-flex size-full"
          >
            <HugeiconsIcon
              icon={current.icon}
              color={current.color}
              strokeWidth={1.7}
              className="size-full"
            />
          </motion.span>
        </AnimatePresence>
      </span>

      {/* Text */}
      <span className="relative inline-flex">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={`text-${current.text}`}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                    filter: "blur(6px)",
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : -12,
              filter: reduceMotion
                ? "blur(0px)"
                : "blur(4px)",
              transition: {
                duration: reduceMotion ? 0 : 0.18,
              },
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {current.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </motion.span>
  );
}

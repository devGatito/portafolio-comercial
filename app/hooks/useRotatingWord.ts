import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function useRotatingWord(
  length: number,
  interval = 5400,
  offset = 0,
) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || length <= 1) return;

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (!document.hidden) {
        setIndex((prev) => (prev + 1) % length);
      }

      timer = setTimeout(tick, interval);
    };

    timer = setTimeout(tick, 1800 + offset);

    return () => clearTimeout(timer);
  }, [length, interval, offset, reduceMotion]);

  return {
    index: length > 0 ? index % length : 0,
    reduceMotion,
  };
}
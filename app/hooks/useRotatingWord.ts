
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

    let timer: ReturnType<typeof setInterval> | undefined;

    const next = () => {
      setIndex((prev) => (prev + 1) % length);
    };

    const timeout = setTimeout(() => {
      next();
      timer = setInterval(next, interval);
    }, interval + offset);

    return () => {
      clearTimeout(timeout);

      if (timer !== undefined) {
        clearInterval(timer);
      }
    };
  }, [length, interval, offset, reduceMotion]);

  return {
    index: length > 0 ? index % length : 0,
    reduceMotion,
  };
}

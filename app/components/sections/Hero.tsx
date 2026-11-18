
import { motion, useReducedMotion } from "motion/react";

import AnimatedWord from "~/components/ui/AnimatedWord";
import { heroWords } from "~/data/hero";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="
        relative flex min-h-svh w-full
        flex-col items-center
        overflow-hidden bg-white
        px-5 py-10 text-[#171717]
        md:px-12 md:py-14
      "
    >
      {/* Brand */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 0.6 }}
        className="
          select-none rounded-full
          border-[3px] border-black
          px-6 py-2
          text-[32px] font-bold
          leading-none tracking-[-0.065em]
          md:text-[44px]
        "
      >
        somoscierra.
      </motion.div>

      {/* Content */}
      <div
        className="
          flex w-full flex-1 flex-col
          items-center justify-center
          py-20 text-center
        "
      >
        <h1
          className="
            max-w-[1400px]
            text-[clamp(1.65rem,4.5vw,4.75rem)]
            font-medium leading-[1.6]
            tracking-[-0.055em]
          "
        >
          Creamos{" "}
          <AnimatedWord items={heroWords.creation} />,

          <br className="hidden md:block" />

          {" "}desarrollamos{" "}
          <AnimatedWord
            items={heroWords.development}
            offset={1800}
          />

          <br className="hidden md:block" />

          {" "}y conectamos{" "}
          <AnimatedWord
            items={heroWords.connection}
            offset={3600}
          />
          .
        </h1>
      </div>

     
    </section>
  );
}

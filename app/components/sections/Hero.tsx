
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

import AnimatedWord from "~/components/ui/AnimatedWord";
import { heroWords } from "~/data/hero";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative isolate flex min-h-svh w-full
        flex-col items-center
        overflow-hidden bg-white
        px-4 py-6 text-[#171717]
        sm:px-8 sm:py-10
        lg:px-12 lg:py-14
      "
    >
      {/* =========================
          RESPONSIVE BACKGROUND
      ========================= */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          z-0 overflow-hidden bg-white
        "
      >
        {/* Mobile Background */}
        <img
          src="/stickers.png"
          alt=""
          draggable={false}
          className="
            absolute inset-0
            h-full w-full
            object-contain object-center
            select-none
            md:hidden
          "
        />

        {/* Desktop Background */}
        <img
          src="/sticker_desktop.png"
          alt=""
          draggable={false}
          className="
            absolute inset-0
            hidden h-full w-full
            object-contain object-center
            select-none
            md:block
          "
        />
      </div>

      {/* =========================
          BRAND VIDEO
      ========================= */}
      <div
        className="
          relative z-20 flex w-full
          shrink-0 items-center justify-center
        "
      >
        {/* Logo Capsule */}
        <div
          className="
            overflow-hidden
            rounded-[28px]
            border-2 border-[#171717]
            bg-white
            px-5 py-2
            shadow-[4px_5px_0px_#171717]

            md:rounded-[36px]
            md:border-[3px]
            md:px-8 md:py-4
            md:shadow-[6px_7px_0px_#171717]
          "
        >
          <video
            src="/cierra.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Logo animado de somoscierra"
            className="
              block h-auto
              w-[170px]
              object-contain
              sm:w-[230px]
              lg:w-[300px]
            "
          />
        </div>
      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}
      <div
        className="
          relative z-10
          flex w-full min-h-0 flex-1
          flex-col items-center
          justify-center
          pb-16 text-center
          md:pb-20
        "
      >
        {/* Animated Heading */}
        <h1
          className="
            mx-auto flex w-full
            max-w-[1400px]
            flex-col items-center
            gap-3
            text-center font-medium

            text-[clamp(1rem,5.4vw,2.8rem)]
            leading-[1.5]
            tracking-[-0.055em]

            md:gap-2
            md:text-[clamp(1rem,4.5vw,4.75rem)]
            md:leading-[1.6]
          "
        >
          {/* Creation */}
          <span className="block whitespace-nowrap">
            Creamos{" "}
            <AnimatedWord
              items={heroWords.creation}
              offset={1800}
            />
            ,
          </span>

          {/* Development */}
          <span className="block whitespace-nowrap">
            desarrollamos{" "}
            <AnimatedWord
              items={heroWords.development}
              offset={3200}
            />
          </span>

          {/* Connection */}
          <span className="block whitespace-nowrap">
            y conectamos{" "}
            <AnimatedWord
              items={heroWords.connection}
              offset={4800}
            />
            .
          </span>
        </h1>
      </div>

      {/* =========================
          BOTTOM CTA
          MOBILE + DESKTOP
      ========================= */}
      <div
        className="
          absolute bottom-4 left-0 right-0
          z-30 px-4

          md:bottom-8
          md:px-8
        "
      >
        <a
          href="#servicios"
          className="
            group mx-auto
            flex w-full max-w-[420px]
            items-center justify-center gap-3

            rounded-full
            bg-[#171717]
            px-8 py-5

            text-[15px] font-medium
            text-white

            shadow-[0_8px_30px_rgba(0,0,0,0.12)]

            transition-all duration-300
            hover:-translate-y-1
            hover:bg-[#303030]
            active:scale-[0.98]

            md:max-w-[340px]
            md:text-[16px]
          "
        >
          Descubre lo que hacemos

          <span
            className="
              transition-transform duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          >
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={19}
              color="currentColor"
              strokeWidth={2}
            />
          </span>
        </a>
      </div>
    </section>
  );
}

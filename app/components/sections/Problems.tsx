"use client";

import { useEffect, useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  File02Icon,
  Clock01Icon,
  Alert02Icon,
  Settings02Icon,
} from "@hugeicons/core-free-icons";

import { AnimatePresence, motion } from "motion/react";

import { Container } from "~/components/ui/Container";
import { problems } from "~/data/problems";

const problemIcons = [
  File02Icon,
  Clock01Icon,
  Alert02Icon,
  Settings02Icon,
];

export function Problems() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const getIndex = (offset: number) => {
    return (activeIndex + offset + problems.length) % problems.length;
  };

  const previousIndex = getIndex(-1);
  const nextIndex = getIndex(1);

  const previous = () => {
    setDirection(-1);
    setActiveIndex(previousIndex);
  };

  const next = () => {
    setDirection(1);
    setActiveIndex(nextIndex);
  };

  const goTo = (index: number) => {
    if (index === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  /*
   * ======================================
   * AUTOPLAY
   * Cambia de slide cada 3 segundos
   * ======================================
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);

      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % problems.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const activeProblem = problems[activeIndex];
  const activeIcon = problemIcons[activeIndex];

  return (
    <section
      id="problemas"
      className="overflow-hidden bg-white scroll-reveal-left"
    >
      <Container>
        {/* ======================================
            HEADING
        ====================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mx-auto text-center"
        >
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
            ¿Esto está frenando tu negocio?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            Muchos negocios crecen utilizando herramientas que funcionaban al
            principio, pero con el tiempo empiezan a generar más trabajo del
            necesario.
          </p>
        </motion.div>

        {/* ======================================
            CAROUSEL
        ====================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.08,
          }}
          className="relative mx-auto mt-12 max-w-[1180px] sm:mt-14 lg:mt-16"
        >
          <div className="relative flex min-h-[430px] items-center justify-center sm:min-h-[470px] lg:min-h-[500px]">
            {/* ======================================
                LEFT PREVIEW
            ====================================== */}
            <motion.button
              key={`prev-${previousIndex}`}
              type="button"
              onClick={previous}
              aria-label="Ver problema anterior"
              initial={{
                opacity: 0,
                x: -14,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-[2%] top-1/2 z-[2] hidden w-[57%] -translate-x-[39%] -translate-y-1/2 text-left opacity-55 blur-[2.5px] transition-[filter,opacity,transform] duration-300 hover:opacity-75 hover:blur-[1.5px] lg:block"
            >
              <div className="relative flex min-h-[300px] items-stretch">
                {/* Floating image */}
                <div className="relative z-20 -my-[5px] w-[50%] shrink-0 overflow-hidden rounded-[34px] border border-white/40 bg-zinc-200 shadow-[0_14px_35px_rgba(0,0,0,0.09)]">
                  <img
                    src={problems[previousIndex].image}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-white/15" />

                  <div className="pointer-events-none absolute inset-[1px] rounded-[33px] border border-white/10" />
                </div>

                {/* Panel */}
                <div className="relative z-10 -ml-[6%] flex w-[56%] flex-col justify-center rounded-r-[34px] bg-zinc-100 py-8 pl-[13%] pr-8 ring-1 ring-inset ring-zinc-200">
                  <div className="mb-5 flex size-9 items-center justify-center text-zinc-950">
                    <HugeiconsIcon
                      icon={problemIcons[previousIndex]}
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>

                  <p className="max-w-[210px] text-lg font-semibold leading-tight tracking-[-0.035em] text-zinc-950">
                    {problems[previousIndex].title}
                  </p>

                  <p className="mt-3 line-clamp-2 max-w-[210px] text-xs leading-5 text-zinc-500">
                    {problems[previousIndex].description}
                  </p>
                </div>
              </div>
            </motion.button>

            {/* ======================================
                RIGHT PREVIEW
            ====================================== */}
            <motion.button
              key={`next-${nextIndex}`}
              type="button"
              onClick={next}
              aria-label="Ver siguiente problema"
              initial={{
                opacity: 0,
                x: 14,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-[2%] top-1/2 z-[2] hidden w-[57%] translate-x-[39%] -translate-y-1/2 text-left opacity-55 blur-[2.5px] transition-[filter,opacity,transform] duration-300 hover:opacity-75 hover:blur-[1.5px] lg:block"
            >
              <div className="relative flex min-h-[300px] items-stretch">
                {/* Floating image */}
                <div className="relative z-20 -my-[5px] w-[50%] shrink-0 overflow-hidden rounded-[34px] border border-white/40 bg-zinc-200 shadow-[0_14px_35px_rgba(0,0,0,0.09)]">
                  <img
                    src={problems[nextIndex].image}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-white/15" />

                  <div className="pointer-events-none absolute inset-[1px] rounded-[33px] border border-white/10" />
                </div>

                {/* Panel */}
                <div className="relative z-10 -ml-[6%] flex w-[56%] flex-col justify-center rounded-r-[34px] bg-zinc-100 py-8 pl-[13%] pr-8 ring-1 ring-inset ring-zinc-200">
                  <div className="mb-5 flex size-9 items-center justify-center text-zinc-950">
                    <HugeiconsIcon
                      icon={problemIcons[nextIndex]}
                      size={20}
                      strokeWidth={1.7}
                    />
                  </div>

                  <p className="max-w-[210px] text-lg font-semibold leading-tight tracking-[-0.035em] text-zinc-950">
                    {problems[nextIndex].title}
                  </p>

                  <p className="mt-3 line-clamp-2 max-w-[210px] text-xs leading-5 text-zinc-500">
                    {problems[nextIndex].description}
                  </p>
                </div>
              </div>
            </motion.button>

            {/* ======================================
                ACTIVE CARD
            ====================================== */}
            <div className="relative z-10 w-full max-w-[920px] px-4 sm:px-8 lg:px-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={activeIndex}
                  initial={{
                    opacity: 0,
                    x: direction * 28,
                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction * -28,
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  <div className="relative md:flex md:min-h-[360px] md:items-stretch">
                    {/* =================================
                        FLOATING IMAGE
                    ================================= */}
                    <div className="relative z-20 min-h-[290px] overflow-hidden rounded-[32px] border border-white/50 bg-zinc-200 shadow-[0_18px_45px_rgba(0,0,0,0.12)] md:-my-[7px] md:min-h-[374px] md:w-[52%] md:shrink-0 md:rounded-[40px]">
                      <motion.img
                        key={activeProblem.image}
                        src={activeProblem.image}
                        alt={activeProblem.title}
                        initial={{
                          scale: 1.06,
                        }}
                        animate={{
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 size-full object-cover"
                      />

                      {/* Bottom shading */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/[0.05]" />

                      {/* Subtle shine */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                      {/* Inner border */}
                      <div className="pointer-events-none absolute inset-[1px] rounded-[31px] border border-white/10 md:rounded-[39px]" />
                    </div>

                    {/* =================================
                        CONTENT PANEL
                    ================================= */}
                    <div className="relative z-10 -mt-7 flex flex-col justify-between rounded-b-[32px] bg-zinc-100 px-7 pb-8 pt-14 ring-1 ring-inset ring-zinc-200 sm:px-9 md:my-0 md:-ml-[6%] md:w-[54%] md:rounded-b-none md:rounded-l-[28px] md:rounded-r-[40px] md:py-9 md:pl-[12%] md:pr-9 lg:py-10 lg:pl-[12%] lg:pr-10">
                      <div>
                        {/* Small identity */}
                        <div className="mb-7 flex items-center gap-3">
                          <div className="flex size-9 items-center justify-center text-zinc-950">
                            <HugeiconsIcon
                              icon={activeIcon}
                              size={25}
                              strokeWidth={1.8}
                            />
                          </div>

                          <span className="text-xs font-semibold uppercase tracking-[0.06em] text-zinc-950">
                            Problema 0{activeIndex + 1}
                          </span>
                        </div>

                        <motion.div
                          key={`content-${activeIndex}`}
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: 0.08,
                            duration: 0.35,
                          }}
                        >
                          <h3 className="max-w-[330px] text-[26px] font-semibold leading-[1.05] tracking-[-0.045em] text-zinc-950 sm:text-[30px]">
                            {activeProblem.title}
                          </h3>

                          <p className="mt-4 max-w-[330px] text-sm leading-6 text-zinc-600">
                            {activeProblem.description}
                          </p>

                          <button
                            type="button"
                            className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:decoration-zinc-950"
                          >
                            Leer más

                            <span className="flex size-4 items-center justify-center rounded-full bg-zinc-300 text-[9px]">
                              →
                            </span>
                          </button>
                        </motion.div>
                      </div>

                      {/* Metrics */}
                      <div className="mt-9 grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-[22px] font-medium tracking-[-0.04em] text-zinc-950">
                            +40%
                          </p>

                          <p className="mt-0.5 text-[9px] text-zinc-500">
                            Más tiempo
                          </p>
                        </div>

                        <div>
                          <p className="text-[22px] font-medium tracking-[-0.04em] text-zinc-950">
                            +25%
                          </p>

                          <p className="mt-0.5 text-[9px] text-zinc-500">
                            Más errores
                          </p>
                        </div>

                        <div>
                          <p className="text-[22px] font-medium tracking-[-0.04em] text-zinc-950">
                            3x
                          </p>

                          <p className="mt-0.5 text-[9px] text-zinc-500">
                            Retrasos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>

          {/* ======================================
              CTA
          ====================================== */}
          <div className="flex justify-center">
            <a
              href="#contacto"
              className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 px-5 text-xs font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md"
            >
              Ver cómo podemos ayudarte
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
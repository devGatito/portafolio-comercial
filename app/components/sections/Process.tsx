import { useState } from "react";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  BubbleChatIcon,
  Task01Icon,
  CodeIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

import { motion } from "motion/react";

import { Container } from "~/components/ui/Container";
import { processSteps } from "~/data/process";

const processIcons = [
  BubbleChatIcon,
  Task01Icon,
  CodeIcon,
  CheckmarkCircle02Icon,
] as const;

export function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="proceso"
      className="relative bg-white py-24 sm:py-28"
    >
      <Container>
        {/* Mensaje superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 -mt-16 overflow-hidden rounded-[1.75rem] bg-zinc-950 px-6 py-7 text-white sm:px-8 sm:py-9"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-white/[0.06] blur-3xl" />

          <div className="relative z-10">
            <p className="max-w-4xl text-xl font-medium leading-8 tracking-[-0.02em] sm:text-2xl">
              Antes de comenzar tendrás claridad sobre lo que se desarrollará,
              cuánto costará y cómo se realizará la entrega.
            </p>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl">
            Así trabajaremos
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            El proceso está pensado para que tengas visibilidad desde el inicio
            y puedas revisar avances antes de llegar a la entrega final.
          </p>
        </motion.div>
      </Container>

      {/* DESKTOP HOVER EXPERIENCE */}
      <div className="relative mt-16 hidden lg:block">
        <Container className="w-full">
          <div className="w-full">
            {/* Cards */}
            <div className="flex h-[min(520px,65vh)] min-h-[440px] gap-3">
              {processSteps.map((step, index) => {
                const icon = processIcons[index];

                if (!icon) return null;

                const isActive = activeIndex === index;
                const isPast = index < activeIndex;

                return (
                  <motion.article
                    key={step.number}
                    onMouseEnter={() => setActiveIndex(index)}
                    initial={false}
                    animate={{
                      flexGrow: isActive ? 5 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 22,
                      mass: 0.85,
                    }}
                    className={[
                      "relative min-w-0 basis-0 overflow-hidden",
                      
                      "bg-zinc-100",
                      "cursor-pointer",
                    ].join(" ")}
                  >
                    {/* Imagen "rounded-[1.75rem]",
                      "border border-zinc-200", */}
                    <motion.img
                      src={step.image}
                      alt=""
                      initial={false}
                      animate={{
                        scale: isActive ? 1 : 1.1,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 0.5 : 0.62,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="absolute inset-0 bg-zinc-950"
                    />

                    {/* Gradiente para texto */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent" />

                    {/* Pequeño brillo */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.08] to-transparent" />

                    {/* =========================================
                        CARD CERRADA
                    ========================================= */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 0 : 1,
                        scale: isActive ? 0.96 : 1,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={[
                        "absolute inset-0 z-10 flex flex-col",
                        "justify-between p-5",
                        isActive
                          ? "pointer-events-none"
                          : "pointer-events-auto",
                      ].join(" ")}
                    >
                      <div className="flex h-full items-end justify-center">
                        <p
                          className={[
                            "whitespace-nowrap text-sm font-semibold",
                            "tracking-tight",
                            isPast
                              ? "text-white/50"
                              : "text-white",
                          ].join(" ")}
                          style={{
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",
                          }}
                        >
                          {step.title}
                        </p>
                      </div>
                    </motion.div>

                    {/* =========================================
                        CARD ABIERTA
                    ========================================= */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : 32,
                      }}
                      transition={{
                        duration: 0.38,
                        ease: [0.16, 1, 0.3, 1],
                        delay: isActive ? 0.06 : 0,
                      }}
                      className={[
                        "relative z-20 flex h-full min-w-[520px]",
                        "flex-col p-7 xl:p-8",
                        isActive
                          ? "pointer-events-auto"
                          : "pointer-events-none",
                      ].join(" ")}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-8">
                        <div className="text-right" />
                      </div>

                      {/* Content */}
                      <div className="mt-auto max-w-2xl">
                        <motion.h3
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 16,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.11,
                          }}
                          className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.035em] text-white xl:text-4xl"
                        >
                          {step.title}
                        </motion.h3>

                        <motion.p
                          initial={false}
                          animate={{
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : 16,
                          }}
                          transition={{
                            duration: 0.4,
                            delay: 0.14,
                          }}
                          className="mt-4 max-w-xl text-[15px] leading-7 text-white/75"
                        >
                          {step.description}
                        </motion.p>

                        {step.points?.length ? (
                          <motion.div
                            initial={false}
                            animate={{
                              opacity: isActive ? 1 : 0,
                              y: isActive ? 0 : 16,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.17,
                            }}
                            className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3"
                          >
                            {step.points.map((point) => (
  <div
    key={point.label}
    className="flex items-center gap-3"
  >
    <div className="flex size-9 shrink-0 items-center justify-center rounded-xl  text-white/80 backdrop-blur-sm">
      <HugeiconsIcon
        icon={point.icon}
        size={17}
        strokeWidth={1.7}
      />
    </div>

    <span className="text-sm leading-5 text-white/85">
      {point.label}
    </span>
  </div>
))}
                          </motion.div>
                        ) : null}
                      </div>
                    </motion.div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      {/* MOBILE */}
      <Container>
        <div className="mt-12 grid gap-4 lg:hidden">
          {processSteps.map((step, index) => {
            const icon = processIcons[index];

            if (!icon) return null;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="relative min-h-[460px] overflow-hidden rounded-[1.75rem] border border-zinc-200"
              >
                <img
                  src={step.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-zinc-950/55" />

                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent" />

                <div className="relative z-10 flex min-h-[460px] flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md">
                      <HugeiconsIcon
                        icon={icon}
                        size={24}
                        strokeWidth={1.7}
                      />
                    </div>

                    <span className="text-sm font-medium tabular-nums text-white/60">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-auto">
                    {step.duration && (
                      <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-medium text-white/75 backdrop-blur-md">
                        {step.duration}
                      </span>
                    )}

                    <h3 className="mt-5 text-2xl font-semibold tracking-[-0.025em] text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-7 text-white/75">
                      {step.description}
                    </p>

                  {step.points?.length ? (
  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
    {step.points.map((point) => (
      <div
        key={point.label}
        className="flex items-center gap-3"
      >
        <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/80 backdrop-blur-sm">
          <HugeiconsIcon
            icon={point.icon}
            size={17}
            strokeWidth={1.7}
          />
        </div>

        <span className="text-sm leading-5 text-white/85">
          {point.label}
        </span>
      </div>
    ))}
  </div>
) : null}

                    {step.deliverable && (
                      <div className="mt-6 border-t border-white/15 pt-5">
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
                          Entregable
                        </p>

                        <p className="mt-1 text-sm font-medium text-white">
                          {step.deliverable}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
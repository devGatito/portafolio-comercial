
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  ComputerIcon,
  SmartPhone01Icon,
  Globe02Icon,
} from "@hugeicons/core-free-icons";

/* =========================
   PROJECTS DATA
   Agrega aquí tus proyectos
========================= */

const projects = [
  {
    id: "01",
    title: "Sitios web",
    category: "DESARROLLO WEB",
    description: "Experiencias digitales que destacan.",
    background: "#D9C9FF",
    icon: ComputerIcon,
    type: "desktop",
  },
  {
    id: "02",
    title: "Aplicaciones",
    category: "DESARROLLO DE APPS",
    description: "Soluciones digitales hechas a medida.",
    background: "#D5FF63",
    icon: SmartPhone01Icon,
    type: "mobile",
  },
  {
    id: "03",
    title: "E-commerce",
    category: "COMERCIO DIGITAL",
    description: "Experiencias diseñadas para vender.",
    background: "#FFD966",
    icon: Globe02Icon,
    type: "desktop",
  },
];

/* =========================
   SKELETON LINE
========================= */

function SkeletonLine({
  width = "100%",
  height = "10px",
}: {
  width?: string;
  height?: string;
}) {
  return (
    <div
      className="
        animate-pulse rounded-full
        bg-[#171717]/10
      "
      style={{ width, height }}
    />
  );
}

/* =========================
   DESKTOP SKELETON
========================= */

function DesktopSkeleton() {
  return (
    <div
      className="
        relative mx-auto w-full
        max-w-[350px]
        overflow-hidden
        rounded-[16px]
        border-[3px] border-[#171717]
        bg-white
        shadow-[6px_7px_0px_#171717]
      "
    >
      {/* Browser toolbar */}
      <div
        className="
          flex h-7 items-center gap-1.5
          border-b-2 border-[#171717]
          bg-[#F5F5F5] px-3
        "
      >
        <span className="h-2 w-2 rounded-full bg-[#FF6B57]" />
        <span className="h-2 w-2 rounded-full bg-[#FFD966]" />
        <span className="h-2 w-2 rounded-full bg-[#D5FF63]" />

        <div
          className="
            ml-3 h-2 w-1/2
            rounded-full bg-neutral-200
          "
        />
      </div>

      {/* Browser content */}
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <SkeletonLine width="35%" height="9px" />

          <div className="flex gap-2">
            <SkeletonLine width="20px" height="5px" />
            <SkeletonLine width="20px" height="5px" />
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4">
          <div className="space-y-2">
            <SkeletonLine width="95%" height="13px" />
            <SkeletonLine width="75%" height="13px" />

            <div className="pt-1">
              <SkeletonLine width="90%" height="6px" />
            </div>

            <SkeletonLine width="65%" height="6px" />

            <div
              className="
                h-6 w-20
                rounded-full bg-[#171717]
              "
            />
          </div>

          <div
            className="
              flex aspect-square
              items-center justify-center
              rounded-[12px]
              bg-[#C9B5FF]
            "
          >
            <HugeiconsIcon
              icon={ComputerIcon}
              size={38}
              color="#171717"
              strokeWidth={1.4}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="
                aspect-[4/3]
                rounded-[8px]
                bg-[#F0F0F0]
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================
   MOBILE SKELETON
========================= */

function MobileSkeleton() {
  return (
    <div
      className="
        relative mx-auto
        h-[175px] w-[95px]
        overflow-hidden
        rounded-[22px]
        border-[4px] border-[#171717]
        bg-white
        shadow-[5px_6px_0px_#171717]

        sm:h-[190px]
        sm:w-[105px]
      "
    >
      {/* Dynamic island */}
      <div
        className="
          absolute left-1/2 top-1.5
          z-10 h-2.5 w-9
          -translate-x-1/2
          rounded-full bg-[#171717]
        "
      />

      <div className="space-y-2.5 px-2.5 pt-7">
        <SkeletonLine width="55%" height="7px" />

        <div
          className="
            flex aspect-square
            items-center justify-center
            rounded-[11px]
            bg-[#C9B5FF]
          "
        >
          <HugeiconsIcon
            icon={SmartPhone01Icon}
            size={30}
            color="#171717"
            strokeWidth={1.5}
          />
        </div>

        <div className="space-y-1.5">
          <SkeletonLine width="100%" height="6px" />
          <SkeletonLine width="70%" height="6px" />
        </div>

        <div className="h-5 rounded-full bg-[#171717]" />
      </div>
    </div>
  );
}

/* =========================
   PROJECT CARD
========================= */

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="
        group flex h-full flex-col
        overflow-hidden
        rounded-[22px]
        border border-black/10
        bg-white
        shadow-[0_10px_35px_rgba(0,0,0,0.10)]
        transition-shadow duration-300
        hover:shadow-[0_15px_45px_rgba(0,0,0,0.14)]
      "
    >
      {/* Mockup area */}
      <div
        className="
          relative flex h-[160px]
          items-center justify-center
          overflow-hidden p-3

          sm:h-[170px]
          lg:h-[180px]
        "
        style={{
          backgroundColor: project.background,
        }}
      >
        {/* Decorative shapes */}
        <div
          className="
            pointer-events-none
            absolute -right-10 -top-10
            h-32 w-32 rounded-full
            bg-white/30
          "
        />

        <div
          className="
            pointer-events-none
            absolute -bottom-10 -left-10
            h-28 w-28 rounded-full
            bg-white/20
          "
        />

        {/* Skeleton */}
        <div
          className="
            relative z-10
            w-full max-w-[350px]
            scale-[0.75]
            sm:scale-[0.8]
            lg:scale-[0.85]
            transition-transform duration-500
            group-hover:scale-[0.9]
          "
        >
          {project.type === "mobile" ? (
            <MobileSkeleton />
          ) : (
            <DesktopSkeleton />
          )}
        </div>
      </div>

      {/* Project details */}
      <div
        className="
          flex flex-1 items-center
          justify-between gap-3
          px-4 py-3
          sm:px-5 sm:py-4
        "
      >
        <div className="min-w-0">
          <span
            className="
              text-[8px] font-bold
              uppercase tracking-[0.12em]
              text-neutral-500
            "
          >
            {project.category}
          </span>

          <h3
            className="
              mt-1 truncate
              text-[17px] font-semibold
              tracking-[-0.05em]
              sm:text-[19px]
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-1 line-clamp-2
              text-[10px] leading-relaxed
              text-neutral-500
              sm:text-[11px]
            "
          >
            {project.description}
          </p>
        </div>

        <div
          className="
            flex h-9 w-9 shrink-0
            items-center justify-center
            rounded-full bg-[#F3F3F3]
          "
        >
          <HugeiconsIcon
            icon={project.icon}
            size={19}
            color="#171717"
            strokeWidth={1.7}
          />
        </div>
      </div>
    </article>
  );
}

/* =========================
   PROJECTS SECTION
========================= */

export default function Projects() {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();

  /* =========================
     AUTOPLAY
  ========================= */

  useEffect(() => {
    if (reducedMotion || projects.length <= 1) return;

    const interval = window.setInterval(() => {
      setActive(
        (current) => (current + 1) % projects.length
      );
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [reducedMotion]);

  const project = projects[active];

  return (
    <section
      id="proyectos"
      className="
        relative w-full bg-white
        px-3 py-6
        sm:px-6 sm:py-8
        lg:px-10 lg:py-12
      "
    >
      {/* =========================
          MAIN BANNER
      ========================= */}

      <div
        className="
          relative isolate mx-auto
          flex w-full max-w-[1600px]
          min-h-[570px]
          flex-col items-center
          overflow-hidden
          rounded-[28px]
          bg-white
          text-[#171717]

          sm:rounded-[36px]

          lg:h-[50vh]
          lg:min-h-[480px]
          lg:rounded-[40px]
        "
      >
        {/* =========================
            BACKGROUND IMAGE
        ========================= */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 z-0
          "
        >
          <img
            src="/banner.png"
            alt=""
            draggable={false}
            className="
              h-full w-full
              object-contain object-center
              select-none
            "
          />
        </div>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div
          className="
            relative z-10
            flex w-full flex-1
            flex-col items-center
            justify-center
            gap-4 px-4 py-6

            sm:px-8

            lg:gap-3
            lg:py-5
          "
        >
          {/* =========================
              HEADING
          ========================= */}

          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 15 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span
              className="
                text-[9px] font-semibold
                uppercase tracking-[0.2em]
                text-neutral-500
              "
            >
              NUESTRO TRABAJO / 03
            </span>

            <h2
              className="
                mt-2
                text-[clamp(1.8rem,3vw,3rem)]
                font-semibold
                leading-[1.08]
                tracking-[-0.065em]
              "
            >
              Ideas que cobran vida.
            </h2>

            <p
              className="
                mx-auto mt-2
                max-w-[350px]
                text-[11px] leading-relaxed
                text-neutral-600
                sm:text-[12px]
              "
            >
              Creamos experiencias digitales
              que transforman ideas en realidad.
            </p>
          </motion.div>

          {/* =========================
              SINGLE PROJECT CAROUSEL
          ========================= */}

          <div
            className="
              relative mx-auto
              w-full max-w-[420px]
              overflow-hidden
              px-1 py-2
            "
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        x: 45,
                        scale: 0.96,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        x: -45,
                        scale: 0.96,
                      }
                }
                transition={{
                  duration: reducedMotion ? 0 : 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =========================
              INDICATORS
          ========================= */}

          <div
            className="
              flex items-center
              justify-center gap-2
            "
          >
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Ver proyecto ${index + 1}`}
                aria-current={
                  active === index
                    ? "true"
                    : undefined
                }
                className={`
                  h-2 rounded-full
                  transition-all duration-300
                  ${
                    active === index
                      ? "w-7 bg-[#171717]"
                      : "w-2 bg-[#171717]/20"
                  }
                `}
              />
            ))}
          </div>

          {/* =========================
              BOTTOM CTA
          ========================= */}

          <motion.a
            href="#contacto"
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 10 }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            whileHover={
              reducedMotion
                ? undefined
                : { y: -3 }
            }
            transition={{ duration: 0.4 }}
            className="
              inline-flex items-center
              justify-center gap-2
              rounded-full
              bg-[#171717]
              px-5 py-3
              text-[11px] font-medium
              text-white
              shadow-[0_6px_20px_rgba(0,0,0,0.12)]
              sm:text-[12px]
            "
          >
            Hablemos de tu proyecto

            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={16}
              color="currentColor"
              strokeWidth={2}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

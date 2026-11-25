
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  url?: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "Proyecto 01",
    category: "Diseño y desarrollo web",
    image: "https://cdn.dribbble.com/userupload/18896664/file/original-005919ded3e864a88a19394c77d93f68.png?resize=1024x768&vertical=center",
  },
  {
    id: "02",
    title: "Proyecto 02",
    category: "Aplicación digital",
    image: "https://cdn.dribbble.com/userupload/18896664/file/original-005919ded3e864a88a19394c77d93f68.png?resize=1024x768&vertical=center",
  },
  {
    id: "03",
    title: "Proyecto 03",
    category: "E-commerce",
    image: "https://cdn.dribbble.com/userupload/18896664/file/original-005919ded3e864a88a19394c77d93f68.png?resize=1024x768&vertical=center",
  },
];

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction * 24,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction * -24,
    scale: 0.98,
  }),
};

function ProjectCard({ project }: { project: Project }) {
  const [error, setError] = useState(false);

  return (
    <div
      className="
        w-full overflow-hidden
        rounded-[18px] border border-black/10
        bg-white
        shadow-[0_12px_35px_rgba(0,0,0,0.09)]
        sm:rounded-[22px]
      "
    >
      <div
        className="
          relative h-[clamp(100px,25svh,240px)]
          w-full overflow-hidden bg-[#F3F0FF]
        "
      >
        {!error ? (
          <img
            src={project.image}
            alt={`Vista previa de ${project.title}`}
            onError={() => setError(true)}
            draggable={false}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            className="
              absolute inset-0 flex flex-col
              items-center justify-center
              px-4 text-center
            "
          >
            <span className="text-2xl">✦</span>
            <p className="mt-2 text-xs font-semibold">
              Vista previa pendiente
            </p>
            <p className="mt-1 text-[10px] text-neutral-500">
              Agrega tu imagen en public/projects.
            </p>
          </div>
        )}
      </div>

    
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const reducedMotion = useReducedMotion();
  const project = projects[active];

  useEffect(() => {
    if (paused || reducedMotion || projects.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection(1);
      setActive((current) => (current + 1) % projects.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  const goTo = (index: number) => {
    if (index === active) return;

    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  return (
    <section
      id="proyectos"
      className="
        relative isolate
        h-[100svh] max-h-[900px]
        min-h-0 w-full
        overflow-hidden
        bg-white text-[#171717]
      "
    >
      {/* CAPA 1: ILUSTRACIÓN DE FONDO */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0 z-0
          overflow-hidden
        "
      >
        <picture className="block h-full w-full">
          <source
            media="(max-width: 639px)"
            srcSet="/projects-bg-mobile.png"
          />
          <img
            src="/project.png"
            alt=""
            draggable={false}
            className="
              block h-full w-full
              select-none object-fill
            "
          />
        </picture>
      </div>

      {/* CAPA 2: CONTENIDO PRINCIPAL */}
      <div
        className="
          relative z-10
          flex h-full w-full
          items-center justify-center
          px-4 py-3
          sm:px-8 sm:py-4
        "
      >
        <div
          className="
            flex w-full min-w-0
            max-w-[min(44vw,520px)]
            flex-col items-center
            text-center

            max-lg:max-w-[min(50vw,480px)]
            max-sm:max-w-[min(70vw,340px)]
          "
        >
          {/* ENCABEZADO */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              flex w-full min-w-0
              flex-col items-center
            "
          >
            <h2
              className="
                w-full text-center
                text-[clamp(1.1rem,2.6vw,2.5rem)]
                font-semibold leading-[1.15]
                tracking-[-0.055em]
                [text-wrap:balance]
              "
            >
              Ideas que cobran{" "}
              <span
                className="
                  inline-block
                  rounded-full bg-[#D5FF63]
                  px-2 py-0.5
                "
              >
                vida.
              </span>
            </h2>

            <p
              className="
                mx-auto mt-3
                max-w-[340px]
                text-[10px] leading-[1.5]
                text-neutral-600
                sm:text-xs
              "
            >
              Cada proyecto tiene su propia historia.
              Aquí te mostramos algunas de las nuestras.
            </p>
          </motion.div>

          {/* CARRUSEL */}
          <div
            className="mt-5 w-full min-w-0 sm:mt-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null
                )
              ) {
                setPaused(false);
              }
            }}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={project.id}
                custom={direction}
                variants={variants}
                initial={reducedMotion ? false : "enter"}
                animate="center"
                exit={reducedMotion ? undefined : "exit"}
                transition={{
                  duration: reducedMotion ? 0 : 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </AnimatePresence>

           
          </div>

        </div>
      </div>
    </section>
  );
}

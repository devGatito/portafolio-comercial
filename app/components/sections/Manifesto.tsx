
import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01Icon } from "@hugeicons/core-free-icons";

export default function Manifesto() {
  const [expanded, setExpanded] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const isInView = useInView(videoRef, {
    amount: 0.2,
  });

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isInView && !reducedMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView, reducedMotion]);

  return (
    <section
      id="nosotros"
      className="relative w-full overflow-hidden bg-white
                 px-6 py-20 text-neutral-900
                 md:px-12 md:py-28 lg:px-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Manifesto */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="max-w-[1250px]
                     text-[clamp(2rem,4.8vw,4.75rem)]
                     font-medium leading-[1.1]
                     tracking-[-0.055em]"
        >
          Creemos en las ideas que transforman,
          en la tecnología que simplifica y en
          las experiencias que nos conectan.
        </motion.h2>

        {/* Content grid */}
        <div
          className="mt-16 grid grid-cols-1 items-center
                     gap-10 md:mt-24 md:grid-cols-2
                     lg:gap-16"
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex min-w-0 flex-col items-start"
          >
            <h3
              className="max-w-[540px]
                         text-[clamp(1.6rem,2.8vw,3rem)]
                         font-medium leading-[1.15]
                         tracking-[-0.045em]"
            >
              No solo creamos soluciones digitales.
              Creamos nuevas posibilidades.
            </h3>

            <p
              className="mt-6 max-w-[500px] text-base
                         leading-relaxed text-neutral-600
                         md:text-lg"
            >
              Somos un estudio digital independiente
              que combina creatividad, estrategia y
              tecnología para ayudar a las marcas a
              crecer, evolucionar y conectar con
              las personas.
            </p>

            {/* Expandable content */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id="manifesto-philosophy"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="overflow-hidden"
                >
                  <p
                    className="max-w-[500px] pt-6
                               text-base leading-relaxed
                               text-neutral-600 md:text-lg"
                  >
                    Cuestionamos lo complejo, apostamos
                    por lo esencial y construimos con
                    propósito. Porque la tecnología
                    tiene sentido cuando mejora la
                    vida de las personas.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Philosophy button */}
            <button
              type="button"
              aria-expanded={expanded}
              aria-controls={
                expanded ? "manifesto-philosophy" : undefined
              }
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-8 inline-flex cursor-pointer
                         items-center gap-4 rounded-full
                         border border-neutral-900
                         px-5 py-2.5 text-sm font-medium
                         transition-colors duration-300
                         hover:bg-neutral-900 hover:text-white
                         focus-visible:outline-2
                         focus-visible:outline-offset-4"
            >
              Nuestra filosofía

              <motion.span
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <HugeiconsIcon
                  icon={Add01Icon}
                  size={20}
                  strokeWidth={1.8}
                />
              </motion.span>
            </button>
          </motion.div>

          {/* Right column — video */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative flex w-full min-w-0
                       flex-col items-center justify-center"
          >
            <div
              className="relative aspect-square w-full
                         overflow-hidden bg-white"
            >
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                disablePictureInPicture
                disableRemotePlayback
                className="pointer-events-none h-full
                           w-full select-none object-contain"
              >
                <source
                  src="/cursor.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            
          </motion.figure>
        </div>
      </div>
    </section>
  );
}


import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "motion/react";

const cards = [
  {
    id: "design",
    image: "/cierra_dark.png",
    title: "Diseño digital",
    x: "-32%",
    y: "-42%",
    rotation: -12,
  },
  {
    id: "commerce",
    image: "/cierra_dark.png",
    title: "E-commerce",
    x: "32%",
    y: "-48%",
    rotation: 12,
  },
  {
    id: "automation",
    image: "/cierra_dark.png",
    title: "Automatización",
    x: "-33%",
    y: "43%",
    rotation: -8,
  },
  {
    id: "dashboard",
    image: "/cierra_dark.png",
    title: "Dashboard",
    x: "35%",
    y: "42%",
    rotation: 9,
  },
  {
    id: "development",
    image: "/cierra_dark.png",
    title: "Desarrollo",
    x: "0%",
    y: "0%",
    rotation: -3,
  },
];

export default function DigitalCollage() {
  const container = useRef<HTMLDivElement>(null);

  const isInView = useInView(container, {
    amount: 0.25,
  });

  const reducedMotion = useReducedMotion();
  const playing = isInView && !reducedMotion;

  return (
    <div
      ref={container}
      className="relative isolate mx-auto aspect-square
                 w-full max-w-[650px] select-none"
      aria-hidden="true"
    >
      {/* Interface cards */}
      {cards.map((card, index) => (
        <div
          key={card.id}
          className="pointer-events-none absolute
                     left-1/2 top-1/2 w-[43%]
                     -translate-x-1/2 -translate-y-1/2"
          style={{ zIndex: index + 1 }}
        >
          <motion.div
            initial={false}
            animate={
              playing
                ? {
                    x: ["0%", "0%", card.x, card.x, "0%", "0%"],
                    y: ["0%", "0%", card.y, card.y, "0%", "0%"],
                    rotate: [
                      index * 2 - 4,
                      index * 2 - 4,
                      card.rotation,
                      card.rotation,
                      index * 2 - 4,
                      index * 2 - 4,
                    ],
                    scale: [0.9, 0.9, 1, 1, 0.9, 0.9],
                  }
                : {
                    x: card.x,
                    y: card.y,
                    rotate: card.rotation,
                    scale: 1,
                  }
            }
            transition={
              playing
                ? {
                    duration: 8,
                    times: [0, 0.2, 0.4, 0.7, 0.9, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
                : { duration: reducedMotion ? 0 : 0.4 }
            }
            className="overflow-hidden rounded-xl
                       border border-black/5 bg-white
                       shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                       md:rounded-2xl"
          >
            {/* Browser toolbar */}
            <div
              className="flex items-center gap-1
                         border-b border-neutral-100
                         bg-neutral-50 px-2 py-2
                         md:gap-1.5 md:px-3"
            >
              {[0, 1, 2].map((dot) => (
                <span
                  key={dot}
                  className="size-1.5 rounded-full
                             bg-neutral-300"
                />
              ))}
            </div>

            <img
              src={card.image}
              alt=""
              loading="lazy"
              draggable={false}
              className=" w-full object-cover"
            />
          </motion.div>
        </div>
      ))}

      {/* Chrome cursor */}
      <div
        className="pointer-events-none absolute
                   left-[57%] top-[57%] z-20 w-[29%]"
      >
        <motion.img
          src="/images/cursor.webp"
          alt=""
          draggable={false}
          initial={false}
          animate={
            playing
              ? {
                  x: [0, -15, -15, 15, -10, 0],
                  y: [0, -20, -20, 5, -15, 0],
                  rotate: [-5, -12, 2, 8, -8, -5],
                  scale: [1, 0.85, 1, 1, 0.85, 1],
                }
              : {
                  x: 0,
                  y: 0,
                  rotate: -5,
                  scale: 1,
                }
          }
          transition={
            playing
              ? {
                  duration: 8,
                  times: [0, 0.19, 0.24, 0.55, 0.72, 1],
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { duration: reducedMotion ? 0 : 0.4 }
          }
          className="h-auto w-full object-contain
                     drop-shadow-[0_12px_15px_rgba(0,0,0,0.15)]
                     origin-top-left"
        />
      </div>

      {/* Click ripple */}
      {playing && (
        <div
          className="pointer-events-none absolute
                     left-[58%] top-[58%] z-10"
        >
          <motion.div
            animate={{
              scale: [0, 0, 2.5, 0, 0, 2.5, 0],
              opacity: [0, 0, 0.6, 0, 0, 0.6, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.19, 0.23, 0.32, 0.71, 0.75, 0.85],
              repeat: Infinity,
            }}
            className="-ml-6 -mt-6 size-12
                       rounded-full border border-neutral-400"
          />
        </div>
      )}
    </div>
  );
}

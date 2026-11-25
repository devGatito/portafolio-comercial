import {
  motion,
  useReducedMotion,
} from "motion/react";

const steps = [
  {
    id: "01",
    title: "Descubrimos",
    description:
      "Escuchamos tu idea, entendemos tus objetivos y encontramos oportunidades.",
    image: "/bombilla.png",
    color: "#D5FF63",
    rotation: -6,
  },
  {
    id: "02",
    title: "Diseñamos",
    description:
      "Convertimos conceptos en interfaces atractivas, intuitivas y funcionales.",
    image: "/Cohete.png",
    color: "#C4A5FF",
    rotation: 5,
  },
  {
    id: "03",
    title: "Desarrollamos",
    description:
      "Construimos soluciones rápidas, modernas y adaptadas a tus necesidades.",
    image: "/Computadora.png",
    color: "#FFDE59",
    rotation: -4,
  },
  {
    id: "04",
    title: "Lanzamos",
    description:
      "Ponemos tu proyecto en marcha y te acompañamos en su evolución.",
    image: "/Monitor.png",
    color: "#FFB5E8",
    rotation: 6,
  },
];

export default function OurProcess() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="proceso"
      aria-labelledby="process-title"
      className="
        relative isolate flex w-full
        flex-col overflow-hidden bg-white
        text-[#171717]
        lg:h-[50vh]
      "
    >
      {/* Shape verde inferior */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          inset-x-0 bottom-0 -z-10
          h-[65%] bg-[#D5FF63]
          lg:h-[62%] lg:bg-transparent
        "
      >
        <img
          src="/onda.png"
          alt=""
          className="
            hidden h-full w-full
            object-fill lg:block
          "
        />
      </div>

      <div
        className="
          relative mx-auto flex h-full
          w-full max-w-[1440px]
          flex-col px-6 py-10
          lg:px-12 lg:py-[2vh]
        "
      >
        {/* Encabezado */}
        <motion.header
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 12 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative z-10 text-center"
        >
          <span
            className="
              inline-flex rounded-full
              bg-[#D5FF63] px-4 py-1.5
              text-xs font-semibold
            "
          >
            05. Nuestro proceso
          </span>

          <h2
            id="process-title"
            className="
              mt-3 font-semibold
              text-[clamp(2rem,4vw,4rem)]
              leading-[1.05]
              tracking-[-0.065em]
              lg:mt-2
              lg:text-[clamp(1.8rem,3.5vw,5.5vh)]
            "
          >
            De una idea a algo increíble.
          </h2>

          <p
            className="
              mx-auto mt-3 max-w-xl
              text-sm leading-relaxed
              text-neutral-600
              lg:mt-2 lg:text-base
            "
          >
            Así transformamos tus ideas en
            experiencias digitales que funcionan.
          </p>
        </motion.header>

        {/* Recorrido creativo */}
        <div
          className="
            relative mt-10 flex flex-1
            items-center lg:mt-2
          "
        >
          {/* Línea horizontal animada */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            className="
              pointer-events-none absolute
              left-[12.5%] top-[45%]
              hidden h-12 w-[75%]
              lg:block
            "
          >
            <motion.path
              d="
                M 0 30
                Q 125 0 250 30
                T 500 30
                T 750 30
                T 1000 30
              "
              fill="none"
              stroke="#171717"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="8 10"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, scaleX: 0 }
              }
              whileInView={{
                opacity: 0.65,
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0 : 1.2,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "left" }}
            />
          </svg>

          {/* Línea vertical para móvil */}
          <motion.div
            aria-hidden="true"
            initial={
              reduceMotion
                ? false
                : { scaleY: 0 }
            }
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.8,
            }}
            className="
              absolute bottom-16 left-[56px]
              top-12 origin-top
              border-l-2 border-dashed
              border-black/40 lg:hidden
            "
          />

          {/* Etapas */}
          <ol
            className="
              relative grid w-full min-w-0
              grid-cols-1 gap-8
              lg:grid-cols-4 lg:gap-4
            "
          >
            {steps.map((step, index) => (
              <motion.li
                key={step.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 16 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: reduceMotion
                    ? 0
                    : index * 0.12,
                }}
                className="
                  relative flex min-w-0
                  items-center gap-4
                  lg:flex-col lg:gap-0
                  lg:text-center
                "
              >
                {/* Sticker */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -7,
                          rotate: 0,
                          scale: 1.04,
                        }
                  }
                  style={{
                    rotate: reduceMotion
                      ? 0
                      : step.rotation,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="
                    relative z-10 flex
                    h-28 w-28 shrink-0
                    items-center justify-center
                    lg:h-[clamp(65px,17vh,180px)]
                    lg:w-full
                    cursor-pointer select-none rounded-full
                  "
                >
                  <img
                    src={step.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="
                      
                      h-full w-full select-none
                      object-contain
                    "
                  />
                </motion.div>

                {/* Información */}
                <div
                  className="
                    relative z-20 flex min-w-0
                    flex-1 flex-col items-start
                    lg:items-center
                  "
                >
                  {/* Número */}
                  <span
                    style={{
                      backgroundColor: step.color,
                    }}
                    className="
                      relative z-10 inline-flex
                      items-center justify-center
                      rounded-full border-2
                      border-[#171717]
                      px-4 py-0.5
                      text-sm font-bold
                      shadow-[0_2px_0_#171717]
                      lg:-mb-2
                    "
                  >
                    {step.id}
                  </span>

                  {/* Nombre */}
                  <h3
                    className="
                      mt-2 inline-flex
                      items-center justify-center
                      rounded-full border-2
                      border-[#171717]
                      bg-white px-4 py-2
                      text-sm font-semibold
                      tracking-tight
                      shadow-[0_3px_0_#171717]
                      lg:mt-0 lg:pt-3
                      lg:text-[clamp(0.8rem,1.3vw,1.1rem)]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p
                    className="
                      mt-3 max-w-[250px]
                      text-xs leading-relaxed
                      text-neutral-800
                      lg:mt-2 lg:text-[clamp(0.7rem,0.9vw,0.875rem)]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
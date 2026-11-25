
import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar una página web?",
    answer:
      "Cada proyecto es diferente. Preparamos una propuesta personalizada según sus funcionalidades, diseño y alcance.",
  },
  {
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer:
      "Depende de su complejidad. Definimos un calendario de trabajo y fechas de entrega antes de comenzar.",
  },
  {
    question: "¿Desarrollan aplicaciones personalizadas?",
    answer:
      "Sí. Creamos soluciones digitales adaptadas a las necesidades de tu negocio y a diferentes dispositivos.",
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer:
      "Podemos ofrecer soporte, actualizaciones y mantenimiento según las necesidades de tu proyecto.",
  },
];

export default function FAQ() {
  const id = useId();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby={`${id}-title`}
      className="
        relative isolate flex w-full
        min-h-screen items-center
        overflow-hidden bg-white
        px-5 py-8 text-neutral-950
        md:px-10
        lg:h-screen lg:min-h-0
        lg:px-16 lg:py-6
        lg:[@media(max-height:650px)]:h-auto
      "
    >
      <div
        className="
          mx-auto grid w-full max-w-[1440px]
          grid-cols-1 items-center gap-8
          lg:grid-cols-[0.85fr_1.15fr]
          lg:gap-12
          xl:gap-16
        "
      >
        {/* ==================================
            COLUMNA IZQUIERDA
        ================================== */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
          }}
          className="
            relative flex min-w-0
            flex-col items-center
            text-center lg:items-start
            lg:text-left
          "
        >
          {/* Cartel FAQ */}

          <motion.img
            src="/faq.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.95 }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
            }}
            className="
              pointer-events-none
              h-[110px] w-full
              max-w-[260px] select-none
              object-contain
              md:h-[140px]
              lg:h-[clamp(100px,19vh,180px)]
              lg:object-left
            "
          />

          {/* Título */}

          <h2
            id={`${id}-title`}
            className="
              mt-3
              text-[clamp(1.9rem,3.2vw,3.5rem)]
              font-semibold leading-[1.05]
              tracking-[-0.065em]
            "
          >
            ¿Tienes preguntas?

            <span className="mt-1 block">
              <span
                className="
                  box-decoration-clone
                  bg-[#D5FF63] px-1
                "
              >
                Tenemos respuestas.
              </span>
            </span>
          </h2>

          {/* Descripción */}

          <p
            className="
              mt-3 max-w-md text-sm
              leading-relaxed text-neutral-500
              md:text-[15px]
            "
          >
            Sabemos que cada proyecto es diferente.
            Aquí resolvemos algunas de las dudas
            más comunes.
          </p>

          {/* Imagen completa del chico */}

          <motion.img
            src="/neon.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 15,
                    scale: 0.95,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="
              pointer-events-none
              mt-4 h-[220px] w-full
              max-w-[340px] select-none
              object-contain
              md:h-[260px]
              lg:h-[clamp(180px,34vh,340px)]
              lg:object-left
            "
          />
        </motion.div>

        {/* ==================================
            COLUMNA DERECHA
        ================================== */}

        <div
          className="
            relative isolate flex min-w-0
            flex-col gap-4
            lg:gap-[clamp(10px,1.8vh,20px)]
          "
        >
          {/* Shape decorativo verde */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -z-10 right-8 top-1/2
              hidden size-[280px]
              -translate-y-1/2 rotate-12
              rounded-[80px]
              bg-[#D5FF63]/30
              lg:block
            "
          />

          {/* Shape decorativo morado */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute
              -z-10 bottom-10 left-8
              hidden size-[160px]
              -rotate-12 rounded-[50px]
              bg-[#D8C5FF]/30
              lg:block
            "
          />

          {/* Preguntas y respuestas */}

          {faqs.map((faq, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={faq.question}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 15 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative min-w-0"
              >
                {/* Pregunta superpuesta */}

                <h3
                  className={`
                    relative z-10 -mb-3
                    inline-flex max-w-full
                    items-center gap-2
                    rounded-xl border border-black
                    px-3 py-2
                    text-sm font-semibold
                    leading-snug tracking-[-0.025em]
                    shadow-[2px_3px_0px_#171717]
                    md:px-4 md:text-base
                    ${
                      isEven
                        ? "bg-[#D5FF63]"
                        : "bg-[#D8C5FF]"
                    }
                  `}
                >
                  {faq.question}
                </h3>

                {/* Tarjeta de respuesta */}

                <div
                  className={`
                    relative ml-3 min-w-0
                    rounded-2xl border
                    border-neutral-200
                    px-4 pb-3 pt-5
                    sm:ml-6 sm:px-5
                    ${
                      isEven
                        ? "bg-[#F7F7F5]"
                        : "bg-[#F5F1FF]"
                    }
                  `}
                >
                  <p
                    className="
                      text-sm leading-relaxed
                      text-neutral-600
                      md:text-[15px]
                    "
                  >
                    {faq.answer}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section
      id="nosotros"
      className="
        relative isolate flex min-h-screen
        w-full flex-col overflow-hidden bg-white
      "
    >
      {/* Fondo decorativo */}
      <img
        src="/tech.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          pointer-events-none absolute inset-0
          -z-10 h-full w-full select-none
          object-cover 
        "
      />

      {/* Contenedor principal */}
      <div
        className="
          relative mx-auto flex w-full
          max-w-[1440px] flex-1 flex-col
          px-6 py-12 md:px-12 lg:px-16
        "
      >
        {/* Contenido principal: dos columnas */}
        <div
          className="
            grid flex-1 grid-cols-1
            items-center gap-8 py-8
            lg:grid-cols-2 lg:gap-4 lg:py-4
          "
        >
          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="
              relative flex min-w-0
              flex-col items-start gap-6
            "
          >
            <h2
              className="
                text-[clamp(2.3rem,5.2vw,5.5rem)]
                font-black leading-[0.98]
                tracking-[-0.065em] text-black
              "
            >
              No solo creamos páginas. Damos{" "}

              <span
                className="
                  relative isolate inline-block
                  whitespace-nowrap px-2 py-2
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0 -z-10
                    -rotate-2 rounded-[35px]
                    bg-[#D4FA39]
                  "
                />

                vida a ideas.
              </span>
            </h2>

            <p
              className="
                max-w-[600px] text-base
                font-medium leading-relaxed
                tracking-tight text-neutral-800
                md:text-xl lg:text-2xl
              "
            >
              En Somos Sierra creemos que cada idea
              merece convertirse en algo extraordinario.
              Combinamos creatividad, diseño y tecnología
              para construir experiencias digitales que
              conectan con las personas.
            </p>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative flex w-full min-w-0
              items-center justify-center
            "
          >
            <motion.img
              src="/monta.png"
              alt="Mascota creativa de Somos Sierra"
             
             
              className="
                h-auto w-full max-w-[680px]
                select-none object-contain
              "
              draggable={false}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

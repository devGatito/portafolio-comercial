
import { motion } from "motion/react";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

export default function Services() {
  return (
    <section
      id="servicios"
      className="
        relative w-full bg-white
        px-3 py-6
        sm:px-6 sm:py-10
        lg:px-10 lg:py-16
      "
    >
      {/* SERVICES BANNER */}
      <div
        className="
          relative mx-auto
          flex w-full max-w-[1600px]
          min-h-[650px]
          flex-col overflow-hidden
          rounded-[28px]
          bg-[#BDF45B]
          text-[#171717]

          sm:rounded-[36px]

          lg:h-[50vh]
          lg:min-h-[420px]
          lg:flex-row
          lg:rounded-[40px]
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute inset-0 z-0
          "
        >
          <img
            src="/bg_lima.png"
            alt=""
            draggable={false}
            className="
              h-full w-full
              object-cover object-center
              select-none
            "
          />
        </div>

        {/* LEFT COLUMN - 50% */}
        <div
          className="
            relative z-20
            flex w-full min-w-0
            flex-col items-start
            justify-center
            px-6 pt-12 pb-4

            sm:px-10

            lg:h-full
            lg:w-1/2
            lg:flex-none
            lg:px-10
            lg:py-8

            xl:px-16
          "
        >
          {/* MAIN HEADING */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.1,
            }}
            className="
              w-full max-w-[650px]
              font-black uppercase
              leading-[0.98]
              tracking-[-0.07em]

              text-[clamp(2.5rem,8vw,4rem)]

              lg:text-[clamp(2.5rem,3.8vw,5rem)]
            "
          >
            CREAMOS
            
              LO QUE
            
            
              IMAGINAS.
            
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-6 max-w-[420px]
              text-[14px] font-medium
              leading-[1.6]
              text-[#29420C]

              sm:text-[16px]
              lg:mt-5
            "
          >
            Transformamos ideas en sitios web,
            aplicaciones y soluciones digitales
            que hacen crecer tu negocio.
          </motion.p>

          {/* CTA */}
          <motion.a
            href="#contacto"
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
            className="
              group mt-8 inline-flex
              items-center justify-center
              gap-3 rounded-full
              bg-[#171717]
              px-7 py-4
              text-[13px] font-semibold
              text-white
              transition-colors duration-300
              hover:bg-[#303030]

              sm:text-[14px]
              lg:mt-7
            "
          >
            Hablemos de tu proyecto

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
          </motion.a>
        </div>

        {/* RIGHT COLUMN - 50% */}
        <div
          className="
            pointer-events-none
            relative z-10
            flex w-full min-w-0 flex-1
            items-center justify-center

            min-h-[280px]
            px-3 pb-6

            sm:min-h-[360px]

            lg:h-full
            lg:min-h-0
            lg:w-1/2
            lg:flex-none
            lg:p-0
          "
        >
          {/* Positioning container */}
          <div
            className="
              relative flex h-full w-full
              items-center justify-center
            "
          >
            <motion.img
              src="/device.png"
              alt="Mockups de laptop, tablet y celular"
              draggable={false}
              initial={{
                opacity: 0,
                x: 40,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                block h-auto w-full
                max-w-[520px]
                object-contain
                select-none

                drop-shadow-[0_20px_30px_rgba(0,0,0,0.12)]

                sm:max-w-[620px]

                lg:max-h-[95%]
                lg:max-w-[95%]

                xl:max-h-full
                xl:max-w-full
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

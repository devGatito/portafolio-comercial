"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

import { motion } from "motion/react";

import { Container } from "~/components/ui/Container";
import { contact } from "~/data/contact";
import { services } from "~/data/services";

function getWhatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    message,
  )}`;
}

export function Services() {
  return (
    <section
      id="servicios"
      className="overflow-hidden border-b border-zinc-200 bg-white"
    >
      {/* =========================================================
          HERO
      ========================================================== */}
      <div className="relative overflow-hidden bg-zinc-950 text-white">
        {/* Background image */}
        {services[0]?.image && (
          <motion.img
            initial={{
              scale: 1.08,
              opacity: 0,
            }}
            whileInView={{
              scale: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            src={services[0].image}
            alt=""
            className="absolute inset-0 size-full object-cover opacity-45"
          />
        )}

       
        {/* subtle grid */}
      </div>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <div>
        {services.map((service, index) => {
          const number = String(index + 1).padStart(2, "0");
          const textFirst = index % 2 === 0;
          const isGray = index % 2 !== 0;

          return (
            <div
              key={service.name}
              className={isGray ? "bg-zinc-100" : "bg-white"}
            >
              <Container>
                <motion.article
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    grid
                    
                    items-center
                    gap-8
                    lg:grid-cols-2
                    lg:gap-14
                    
                  "
                >
                  {/* =====================================================
                      TEXT
                  ====================================================== */}
                  <div
                    className={
                      textFirst
                        ? "lg:order-1"
                        : "lg:order-2 lg:pl-10 xl:pl-16"
                    }
                  >
                    <div className="max-w-xl">
                      {/* title */}
                      <h3
                        className="
                          max-w-2xl
                          text-[34px]
                          font-medium
                          leading-[0.98]
                          tracking-[-0.05em]
                          text-zinc-950
                          sm:text-[44px]
                          lg:text-[48px]
                          xl:text-[56px]
                        "
                      >
                        {service.name}
                      </h3>

                      {/* problem */}
                      <div className="mt-7 max-w-lg">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                          Problema que resuelve
                        </p>

                        <p className="mt-3 text-base leading-7 text-zinc-600 sm:text-[17px] sm:leading-7">
                          {service.problem}
                        </p>
                      </div>

                      {/* CTA */}
                      <div className="mt-9">
                        <a
                          href={getWhatsappUrl(service.whatsappMessage)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Consultar solución: ${service.name} por WhatsApp`}
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-3
                            text-sm
                            font-semibold
                            text-zinc-950
                          "
                        >
                          Consultar solución

                          <span
                            className="
                              flex
                              size-9
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-zinc-300
                              transition-all
                              duration-300
                              group-hover/link:border-zinc-950
                              group-hover/link:bg-zinc-950
                              group-hover/link:text-white
                            "
                          >
                            <HugeiconsIcon
                              icon={ArrowUpRight01Icon}
                              size={16}
                              strokeWidth={1.8}
                            />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* =====================================================
                      PHOTO NUMBER
                  ====================================================== */}
                  <div
                    className={
                      textFirst
                        ? "lg:order-2"
                        : "lg:order-1"
                    }
                  >
                    <div
                      className="
                        relative
                        flex
                        min-h-[260px]
                        items-center
                        justify-center
                        overflow-hidden
                        sm:min-h-[340px]
                        lg:min-h-[400px]
                      "
                    >
                      {/* faint background number */}
                      <span
                        aria-hidden="true"
                        className={`
                          absolute
                          select-none
                          text-[180px]
                          font-black
                          leading-none
                          tracking-[-0.12em]
                          sm:text-[245px]
                          lg:text-[300px]
                          xl:text-[350px]
                          ${
                            isGray
                              ? "text-white/70"
                              : "text-zinc-100"
                          }
                        `}
                      >
                        {number}
                      </span>

                      {/* image-filled number */}
                      <motion.span
                        aria-hidden="true"
                        initial={{
                          scale: 0.96,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        whileHover={{
                          scale: 1.025,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          relative
                          z-10
                          block
                          select-none
                          bg-clip-text
                          text-[180px]
                          font-black
                          leading-[0.78]
                          tracking-[-0.12em]
                          text-transparent
                          sm:text-[245px]
                          lg:text-[300px]
                          xl:text-[350px]
                        "
                        style={{
                          backgroundImage: `linear-gradient(
                            rgba(0, 0, 0, 0.03),
                            rgba(0, 0, 0, 0.03)
                          ), url("${service.image}")`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {number}
                      </motion.span>
                    </div>
                  </div>
                </motion.article>
              </Container>
            </div>
          );
        })}
      </div>

      {/* =========================================================
          CLOSING
      ========================================================== */}
      <div className="bg-zinc-950 text-white">
        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              grid
              gap-12
              py-16
              sm:py-20
              lg:grid-cols-[1fr_auto]
              lg:items-end
              lg:py-24
            "
          >
            <div>
              

              <h3
                className="
                  mt-6
                  max-w-4xl
                  text-4xl
                  font-medium
                  leading-[1.02]
                  tracking-[-0.05em]
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                No se trata de agregar más herramientas.
              </h3>

              <p className="mt-3 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-white/35 sm:text-5xl lg:text-6xl">
                Se trata de construir la solución correcta.
              </p>
            </div>

            <a
              href={getWhatsappUrl(
                "Hola, quiero conocer qué solución podría funcionar mejor para mi negocio.",
              )}
              target="_blank"
              rel="noreferrer"
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-4
                border-b
                border-white/30
                pb-3
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:border-white
              "
            >
              Hablemos

              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={18}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
import { motion } from "motion/react";

import { Container } from "~/components/ui/Container";

const companies = [
  {
    name: "Empresa 1",
    logo: "https://picsum.photos/seed/company-1/300/160",
  },
  {
    name: "Empresa 2",
    logo: "https://picsum.photos/seed/company-2/300/160",
  },
  {
    name: "Empresa 3",
    logo: "https://picsum.photos/seed/company-3/300/160",
  },
  {
    name: "Empresa 4",
    logo: "https://picsum.photos/seed/company-4/300/160",
  },
  {
    name: "Empresa 5",
    logo: "https://picsum.photos/seed/company-5/300/160",
  },
  {
    name: "Empresa 6",
    logo: "https://picsum.photos/seed/company-6/300/160",
  },
  {
    name: "Empresa 7",
    logo: "https://picsum.photos/seed/company-7/300/160",
  },
  {
    name: "Empresa 8",
    logo: "https://picsum.photos/seed/company-8/300/160",
  },
];

export function BusinessCases() {
  return (
    <section
      id="casos"
      className="overflow-hidden border-b border-zinc-200 bg-white py-4"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
        

          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-5xl">
            Empresas con las que he trabajado
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Algunas de las empresas y equipos con los que he colaborado
            desarrollando soluciones digitales.
          </p>
        </motion.div>
      </Container>

      <div className="relative mt-16 overflow-hidden">
        {/* Fade izquierdo */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent sm:w-28 lg:w-40" />

        {/* Fade derecho */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent sm:w-28 lg:w-40" />

        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Primera copia */}
          <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16">
            {companies.map((company) => (
              <div
                key={`first-${company.name}`}
                className="h-28 w-48 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-56"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>

          {/* Segunda copia para crear el loop */}
          <div
            className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 lg:gap-16 lg:pr-16"
            aria-hidden="true"
          >
            {companies.map((company) => (
              <div
                key={`second-${company.name}`}
                className="h-28 w-48 shrink-0 overflow-hidden rounded-2xl sm:h-32 sm:w-56"
              >
                <img
                  src={company.logo}
                  alt=""
                  className="h-full w-full object-cover grayscale transition duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowDown01Icon,
  ArrowUpRight01Icon,
  CodeIcon,
  WorkflowCircle06Icon,
  ConnectIcon,
} from "@hugeicons/core-free-icons";
import { motion } from "motion/react";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";

const solutions = [
  {
    icon: CodeIcon,
    label: "Sistemas web a medida",
  },
  {
    icon: WorkflowCircle06Icon,
    label: "Automatización de procesos",
  },
  {
    icon: ConnectIcon,
    label: "Integraciones de software",
  },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden   pt-25"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-zinc-100 blur-3xl" />
      </div>

      <Container>
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
           
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-6xl lg:text-6xl"
            >
              Digitaliza y automatiza procesos con software hecho para tu
              negocio.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl"
            >
              Ayudo a negocios de Latinoamérica a mejorar su operación mediante
              sistemas web a medida, integraciones y mejoras de software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#contacto">
                Cuéntame tu proyecto
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={18}
                  strokeWidth={1.8}
                />
              </Button>

              <Button href="#servicios" variant="secondary">
                Ver soluciones
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={18}
                  strokeWidth={1.8}
                />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="relative"
          >
           <img src="/mockup.png" alt="Hero image" className="w-full rounded-xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
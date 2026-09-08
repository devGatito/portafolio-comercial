import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  ArrowUpRight01Icon,
  GithubIcon,
  Linkedin01Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";

import { motion } from "motion/react";

import { Container } from "~/components/ui/Container";
import { contact } from "~/data/contact";

type FormData = {
  email: string;
  phone: string;
  message: string;
};

const initialFormData: FormData = {
  email: "",
  phone: "",
  message: "",
};

function buildWhatsappUrl(message: string) {
  const phone = contact.whatsapp.replace(/\D/g, "");

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function Contact() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const message = [
      contact.whatsappMessage,
      "",
      "Datos de contacto:",
      `Correo: ${formData.email}`,
      formData.phone
        ? `Teléfono: ${formData.phone}`
        : "Teléfono: No especificado",
      "",
      "Proyecto:",
      formData.message,
    ].join("\n");

    const whatsappUrl = buildWhatsappUrl(message);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="contacto"
      className="relative flex min-h-screen items-center overflow-hidden bg-zinc-950 text-white"
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-3xl"
      />

      <Container className="relative z-10 w-full">
        <div className="grid min-h-[78vh] gap-14 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-16 xl:grid-cols-[1fr_1fr] xl:gap-28">

          {/* =====================================================
              IZQUIERDA
          ====================================================== */}

          <div className="flex flex-col justify-between">
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.55,
              }}
            >
              <h2 className="max-w-[720px] text-[clamp(3.2rem,5.6vw,6.5rem)] font-semibold leading-[0.91] tracking-[-0.06em] text-white">
                Creamos software

                <span className="block text-zinc-500">
                  que hace avanzar
                </span>

                <span className="block">
                  tu negocio.
                </span>
              </h2>

              <p className="mt-8 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Diseñamos y desarrollamos sistemas,
                plataformas y productos digitales que
                convierten procesos complejos en soluciones
                simples, rápidas y escalables.
              </p>
            </motion.div>

            {/* CONTACTO REAL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="mt-14 flex flex-wrap gap-x-6 gap-y-4 lg:mt-0"
            >
              {/* EMAIL */}

              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
              >
                <HugeiconsIcon
                  icon={Mail01Icon}
                  size={18}
                  strokeWidth={1.7}
                />

                <span>{contact.email}</span>
              </a>

              {/* WHATSAPP */}

              <a
                href={buildWhatsappUrl(
                  contact.whatsappMessage,
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="flex items-center text-zinc-500 transition-colors hover:text-white"
              >
                <HugeiconsIcon
                  icon={WhatsappIcon}
                  size={19}
                  strokeWidth={1.7}
                />
              </a>

              {/* LINKEDIN */}

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Cierra"
                className="flex items-center text-zinc-500 transition-colors hover:text-white"
              >
                <HugeiconsIcon
                  icon={Linkedin01Icon}
                  size={19}
                  strokeWidth={1.7}
                />
              </a>

              {/* GITHUB */}

              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Cierra"
                className="flex items-center text-zinc-500 transition-colors hover:text-white"
              >
                <HugeiconsIcon
                  icon={GithubIcon}
                  size={19}
                  strokeWidth={1.7}
                />
              </a>
            </motion.div>
          </div>

          {/* =====================================================
              DERECHA
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: 0.08,
            }}
            className="flex flex-col"
          >
            <form
              onSubmit={handleSubmit}
              className="mt-auto pt-16 lg:pt-20"
            >
              {/* EMAIL */}

              <div className="group relative border-b border-zinc-700">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@empresa.com"
                  className="peer w-full bg-transparent px-1 py-4 text-base text-white outline-none placeholder:text-zinc-500 sm:text-lg"
                />

                <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-white transition-all duration-300 peer-focus:w-full" />
              </div>

              {/* TELÉFONO */}

              <div className="group relative border-b border-zinc-700">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+52 000 000 0000"
                  className="peer w-full bg-transparent px-1 py-4 text-base text-white outline-none placeholder:text-zinc-500 sm:text-lg"
                />

                <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-white transition-all duration-300 peer-focus:w-full" />
              </div>

              {/* MENSAJE */}

              <div className="group relative border-b border-zinc-700">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué necesitas desarrollar..."
                  className="peer min-h-[96px] w-full resize-none bg-transparent px-1 py-4 text-base text-white outline-none placeholder:text-zinc-500 sm:text-lg"
                />

                <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-white transition-all duration-300 peer-focus:w-full" />
              </div>

              {/* SUBMIT */}

              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200"
                >
                  Cuéntame tu proyecto

                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={18}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
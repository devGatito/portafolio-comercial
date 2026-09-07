import { type FormEvent, useState } from "react";

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
  name: string;
  company: string;
  contactMethod: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  company: "",
  contactMethod: "",
  message: "",
};

function buildWhatsappUrl(message: string) {
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hola Cierra, vi su sitio y quisiera hablar sobre un proyecto para mi negocio.",
      "",
      `Nombre: ${formData.name}`,
      formData.company
        ? `Empresa: ${formData.company}`
        : "Empresa: No especificada",
      `Correo o WhatsApp: ${formData.contactMethod}`,
      "",
      "Lo que necesito resolver:",
      formData.message,
    ].join("\n");

    window.open(
      buildWhatsappUrl(message),
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section
      id="contacto"
      className="relative flex min-h-screen flex-col overflow-hidden bg-zinc-950 text-white"
    >
      {/* Glow decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl"
      />

      {/* Contenido principal */}
      <div className="relative flex flex-1 items-center py-16 sm:py-20 lg:py-10">
        <Container className="w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
            {/* LADO IZQUIERDO */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-8 flex items-center gap-3">
                <span className="size-2 rounded-full bg-white" />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:text-sm">
                  Cierra · Agencia de software
                </p>
              </div>

              <h2 className="max-w-3xl text-[clamp(2.8rem,5.5vw,5.8rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white">
                Software que
                <span className="block text-zinc-500">
                  cierra la brecha.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Diseñamos y desarrollamos sistemas, plataformas y productos
                digitales que convierten procesos complejos en soluciones
                simples, rápidas y escalables.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={buildWhatsappUrl(contact.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  <HugeiconsIcon
                    icon={WhatsappIcon}
                    size={20}
                    strokeWidth={1.8}
                  />

                  Hablemos de tu proyecto

                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={17}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              {/* Redes */}
              <div className="mt-10 border-t border-zinc-800/80 pt-7">
                <p className="mb-4 text-sm text-zinc-500">
                  Encuentra a Cierra en
                </p>

                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`mailto:${contact.email}`}
                    aria-label="Correo electrónico"
                    className="group flex size-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={Mail01Icon}
                      size={19}
                      strokeWidth={1.7}
                    />
                  </a>

                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="group flex size-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={Linkedin01Icon}
                      size={19}
                      strokeWidth={1.7}
                    />
                  </a>

                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="group flex size-11 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={GithubIcon}
                      size={19}
                      strokeWidth={1.7}
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* FORMULARIO */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.08,
              }}
              className="rounded-[2rem] border border-zinc-800/80 bg-zinc-900/60 p-5 backdrop-blur-sm sm:p-7 lg:p-8"
            >
              <div className="mb-7 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Inicia un proyecto
                  </p>

                  <h3 className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                    Cuéntanos qué necesitas.
                  </h3>
                </div>

                <div className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-zinc-800 sm:flex">
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    size={19}
                    strokeWidth={1.7}
                    className="text-zinc-500"
                  />
                </div>
              </div>

              <p className="max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
                Déjanos los detalles y abriremos WhatsApp con toda la
                información lista para enviarnos.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-7 grid gap-4 sm:grid-cols-2"
              >
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-zinc-500"
                  >
                    Nombre
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        name: event.target.value,
                      })
                    }
                    placeholder="Tu nombre"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 hover:border-zinc-700 focus:border-zinc-500 focus:bg-zinc-950"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-zinc-500"
                  >
                    Empresa
                    <span className="ml-1 normal-case tracking-normal text-zinc-600">
                      (opcional)
                    </span>
                  </label>

                  <input
                    id="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        company: event.target.value,
                      })
                    }
                    placeholder="Nombre de tu negocio"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 hover:border-zinc-700 focus:border-zinc-500 focus:bg-zinc-950"
                  />
                </div>

                {/* Contacto */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contactMethod"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-zinc-500"
                  >
                    Correo o WhatsApp
                  </label>

                  <input
                    id="contactMethod"
                    type="text"
                    required
                    value={formData.contactMethod}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        contactMethod: event.target.value,
                      })
                    }
                    placeholder="correo@empresa.com o +52..."
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 hover:border-zinc-700 focus:border-zinc-500 focus:bg-zinc-950"
                  />
                </div>

                {/* Mensaje */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-zinc-500"
                  >
                    Proyecto
                  </label>

                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        message: event.target.value,
                      })
                    }
                    placeholder="Cuéntanos sobre el sistema, plataforma, automatización o producto que quieres desarrollar."
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-zinc-600 hover:border-zinc-700 focus:border-zinc-500 focus:bg-zinc-950"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-200 sm:w-auto"
                  >
                    <HugeiconsIcon
                      icon={WhatsappIcon}
                      size={19}
                      strokeWidth={1.8}
                    />

                    Enviar proyecto

                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={17}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </Container>
      </div>

      {/* FOOTER INFERIOR */}
      <footer className="relative border-t border-zinc-900">
        <Container>
          <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold tracking-[-0.04em]">
                CIERRA
              </span>

              <span className="hidden h-4 w-px bg-zinc-800 sm:block" />

              <span className="text-xs text-zinc-600">
                Software diseñado para avanzar.
              </span>
            </div>

            <div className="flex items-center gap-5 text-xs text-zinc-600">
              <span>
                © {new Date().getFullYear()} Cierra
              </span>

              <span>
                México
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
}
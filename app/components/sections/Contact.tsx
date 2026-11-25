
import { useId, useState } from "react";
import type { FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";

type ContactData = {
  name: string;
  email: string;
  project: string;
  message: string;
};

type FormErrors = Partial<Record<keyof ContactData, string>>;

type FormStatus = "idle" | "loading" | "success" | "error";

const initialData: ContactData = {
  name: "",
  email: "",
  project: "",
  message: "",
};

const projects = [
  { value: "website", label: "Sitio web" },
  { value: "app", label: "Aplicación" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "other", label: "Otro proyecto" },
];

const fieldClass = `
  w-full min-w-0 rounded-xl border border-neutral-200
  bg-white px-4 py-3 text-sm text-black
  outline-none transition-colors duration-200
  placeholder:text-neutral-400
  hover:border-neutral-400
  focus:border-black focus:ring-2 focus:ring-[#D5FF63]
  aria-[invalid=true]:border-red-500
  disabled:opacity-60
  motion-reduce:transition-none
`;

function validate(data: ContactData): FormErrors {
  const errors: FormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "Escribe tu nombre.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Introduce un correo válido.";
  }

  if (!projects.some((item) => item.value === data.project)) {
    errors.project = "Selecciona un tipo de proyecto.";
  }

  if (data.message.trim().length < 10) {
    errors.message = "Cuéntanos un poco más sobre tu proyecto.";
  }

  return errors;
}

// Conectar esta ruta con tu backend.
async function sendContact(data: ContactData): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(15000),
  });

  if (!response.ok) {
    throw new Error("No se pudo enviar el mensaje.");
  }

  const result = await response.json();

  if (result?.success !== true) {
    throw new Error("El servidor no confirmó el envío.");
  }
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="size-5"
      aria-hidden="true"
    >
      <path
        d="M6 18 18 6M6 6h12v12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactStickers() {
  const reducedMotion = useReducedMotion();

  const floating = (delay: number) => ({
    animate: reducedMotion ? {} : { y: [0, -7, 0] },
    transition: {
      duration: 4.5,
      delay,
      repeat: reducedMotion ? 0 : Infinity,
      ease: "easeInOut" as const,
    },
  });

  return (
    <div
      aria-hidden="true"
      className="relative mt-6 flex h-28 w-full
        max-w-[420px] items-center justify-around
        select-none sm:h-36"
    >
      {/* Sticker: mensaje */}
      <motion.div {...floating(0)}>
        <svg
          viewBox="0 0 120 120"
          className="w-20 -rotate-12
            drop-shadow-[3px_5px_0px_rgba(0,0,0,0.12)]
            sm:w-28"
        >
          <rect
            x="8" y="18" width="104" height="78"
            rx="24" fill="white"
          />
          <rect
            x="13" y="23" width="94" height="68"
            rx="19" fill="#C7ACFF"
            stroke="black" strokeWidth="3"
          />
          <rect
            x="31" y="39" width="58" height="36"
            rx="5" fill="white"
            stroke="black" strokeWidth="3"
          />
          <path
            d="m32 42 28 20 28-20"
            fill="none" stroke="black"
            strokeWidth="3" strokeLinejoin="round"
          />
          <path
            d="M21 8v12M15 14h12"
            stroke="black" strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Sticker: creatividad */}
      <motion.div {...floating(0.7)}>
        <svg
          viewBox="0 0 120 120"
          className="w-20 rotate-12
            drop-shadow-[3px_5px_0px_rgba(0,0,0,0.12)]
            sm:w-28"
        >
          <path
            d="m60 7 13 29 32-10-15 29
               23 23-33 2-20 33-17-33
               -34-2 24-23-17-29 32 10Z"
            fill="#FFE277"
            stroke="white"
            strokeWidth="12"
            strokeLinejoin="round"
          />
          <path
            d="m60 7 13 29 32-10-15 29
               23 23-33 2-20 33-17-33
               -34-2 24-23-17-29 32 10Z"
            fill="#FFE277"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <ellipse cx="46" cy="56" rx="4" ry="6" />
          <ellipse cx="74" cy="56" rx="4" ry="6" />
          <path
            d="M46 70Q60 86 74 70"
            fill="none"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Sticker: lanzamiento */}
      <motion.div {...floating(1.4)}>
        <svg
          viewBox="0 0 120 120"
          className="w-20 -rotate-12
            drop-shadow-[3px_5px_0px_rgba(0,0,0,0.12)]
            sm:w-28"
        >
          <path
            d="M12 12 108 49 66 66 49 108Z"
            fill="#FFB9DC"
            stroke="white"
            strokeWidth="13"
            strokeLinejoin="round"
          />
          <path
            d="M12 12 108 49 66 66 49 108Z"
            fill="#FFB9DC"
            stroke="black"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="m12 12 54 54"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="m25 75-13 13m20 3-12 12"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const id = useId();
  const reducedMotion = useReducedMotion();

  const [data, setData] = useState<ContactData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const isLoading = status === "loading";

  function updateField<K extends keyof ContactData>(
    field: K,
    value: ContactData[K]
  ) {
    setData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));

    setStatus((previous) =>
      previous === "loading" ? previous : "idle"
    );
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (isLoading) return;

    const cleanData: ContactData = {
      name: data.name.trim(),
      email: data.email.trim(),
      project: data.project,
      message: data.message.trim(),
    };

    const validationErrors = validate(cleanData);
    setErrors(validationErrors);

    const firstError = Object.keys(validationErrors)[0];

    if (firstError) {
      setStatus("idle");
      document.getElementById(`${id}-${firstError}`)?.focus();
      return;
    }

    setStatus("loading");

    try {
      await sendContact(cleanData);

      setData(initialData);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function renderError(field: keyof ContactData) {
    return errors[field] ? (
      <p
        id={`${id}-${field}-error`}
        className="mt-1 text-xs text-red-600"
        role="alert"
      >
        {errors[field]}
      </p>
    ) : null;
  }

  const reveal = {
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.65,
      ease: "easeOut" as const,
    },
  };

  return (
    <section
      id="contacto"
      aria-labelledby={`${id}-title`}
      className="
        relative isolate flex w-full flex-col
        justify-center overflow-hidden bg-white
        px-5 py-14 text-black
        sm:px-8
        lg:min-h-[100svh] lg:px-12 lg:py-12
      "
    >
      {/* Fondo decorativo inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute
          inset-x-0 bottom-0 -z-10"
      >
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block h-24 w-full lg:h-36"
        >
          <path
            d="M0 75
               C160 -20 230 -20 360 75
               S600 170 720 75
               S960 -20 1080 75
               S1320 170 1440 75
               V180 H0Z"
            fill="#D5FF63"
          />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-7xl">

       

        <div
          className="
            grid min-w-0 grid-cols-1 items-center
            gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14
          "
        >
          {/* Columna izquierda */}
          <motion.div {...reveal} className="min-w-0">

            

            <h2
              id={`${id}-title`}
              className="
                text-[clamp(2.7rem,5.5vw,5.8rem)]
                font-semibold leading-[1.05]
                tracking-[-0.075em]
              "
            >
              Tu próxima
              <br />

              gran{" "}
              <span
                className="inline-block -rotate-3
                  rounded-full bg-[#D5FF63]
                  px-[0.23em] pb-[0.07em]"
              >
                idea
              </span>

              <br />
              empieza aquí.
            </h2>

            <p
              className="mt-6 max-w-md text-base
                leading-relaxed text-neutral-600
                sm:text-lg"
            >
              Cuéntanos qué tienes en mente. En Somos Sierra
              transformamos ideas en experiencias digitales
              que dejan huella.
            </p>

            <ContactStickers />

          </motion.div>

          {/* Columna derecha */}
          <motion.div
            {...reveal}
            transition={{
              ...reveal.transition,
              delay: reducedMotion ? 0 : 0.12,
            }}
            className="
              relative min-w-0 rounded-[28px]
              border border-neutral-200 bg-[#F7F7F7]
              p-5 shadow-[0_8px_40px_rgba(0,0,0,0.04)]
              sm:p-8
            "
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold tracking-[-0.05em]">
                Hagamos algo increíble.
              </h3>

              <p className="mt-1 text-sm text-neutral-500">
                El primer paso empieza contigo.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              aria-busy={isLoading}
              className="space-y-4"
            >
              {/* Nombre */}
              <div>
                <label
                  htmlFor={`${id}-name`}
                  className="mb-1.5 block text-sm font-medium"
                >
                  Nombre
                </label>

                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="¿Cómo te llamas?"
                  value={data.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? `${id}-name-error` : undefined
                  }
                  maxLength={100}
                  disabled={isLoading}
                  required
                  className={fieldClass}
                />

                {renderError("name")}
              </div>

              {/* Correo */}
              <div>
                <label
                  htmlFor={`${id}-email`}
                  className="mb-1.5 block text-sm font-medium"
                >
                  Correo electrónico
                </label>

                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="hola@ejemplo.com"
                  value={data.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? `${id}-email-error` : undefined
                  }
                  maxLength={254}
                  disabled={isLoading}
                  required
                  className={fieldClass}
                />

                {renderError("email")}
              </div>

              {/* Tipo de proyecto */}
              <div>
                <label
                  htmlFor={`${id}-project`}
                  className="mb-1.5 block text-sm font-medium"
                >
                  Tipo de proyecto
                </label>

                <select
                  id={`${id}-project`}
                  name="project"
                  value={data.project}
                  onChange={(e) => updateField("project", e.target.value)}
                  aria-invalid={Boolean(errors.project)}
                  aria-describedby={
                    errors.project ? `${id}-project-error` : undefined
                  }
                  disabled={isLoading}
                  required
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Selecciona una opción
                  </option>

                  {projects.map((project) => (
                    <option key={project.value} value={project.value}>
                      {project.label}
                    </option>
                  ))}
                </select>

                {renderError("project")}
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor={`${id}-message`}
                  className="mb-1.5 block text-sm font-medium"
                >
                  Cuéntanos sobre tu idea
                </label>

                <textarea
                  id={`${id}-message`}
                  name="message"
                  rows={3}
                  placeholder="Todo comienza con una idea..."
                  value={data.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? `${id}-message-error` : undefined
                  }
                  maxLength={2000}
                  disabled={isLoading}
                  required
                  className={`${fieldClass} resize-y`}
                />

                {renderError("message")}
              </div>

              {/* Botón principal */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={
                  reducedMotion || isLoading ? undefined : { y: -2 }
                }
                whileTap={
                  reducedMotion || isLoading ? undefined : { scale: 0.98 }
                }
                className="
                  group flex w-full items-center
                  justify-between rounded-full
                  bg-black py-2 pl-5 pr-2
                  text-sm font-medium text-white
                  outline-none transition-colors
                  hover:bg-neutral-800
                  focus-visible:ring-2
                  focus-visible:ring-black
                  focus-visible:ring-offset-4
                  disabled:cursor-wait disabled:opacity-60
                  motion-reduce:transition-none
                "
              >
                {isLoading ? "Enviando tu idea..." : "Enviar mi idea"}

                <span
                  className="flex size-10 shrink-0
                    items-center justify-center rounded-full
                    bg-[#D5FF63] text-black"
                >
                  {isLoading ? (
                    <span
                      aria-hidden="true"
                      className="size-4 animate-spin
                        rounded-full border-2 border-black/20
                        border-t-black motion-reduce:animate-none"
                    />
                  ) : (
                    <ArrowIcon />
                  )}
                </span>
              </motion.button>

              {/* Respuesta del servidor */}
              <div aria-live="polite" aria-atomic="true">
                {status === "success" && (
                  <p
                    className="rounded-xl border border-lime-300
                      bg-lime-50 p-3 text-sm text-lime-900"
                  >
                    ¡Tu idea está en camino! Gracias por
                    contactar con Somos Sierra.
                  </p>
                )}

                {status === "error" && (
                  <p
                    className="rounded-xl border border-red-200
                      bg-red-50 p-3 text-sm text-red-700"
                  >
                    No pudimos confirmar el envío.
                    Inténtalo nuevamente.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

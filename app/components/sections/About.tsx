import { motion } from "motion/react";

import {
  // Frontend
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiLaravel,
  SiPhp,
  SiSpringboot,
  SiOpenjdk,
  SiPython,
  SiDjango,
  SiFastapi,

  // Mobile
  SiFlutter,
  SiKotlin,
  SiSwift,

  // Data
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiElasticsearch,

  // Cloud / DevOps
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiVercel,
  SiNginx,
  SiLinux,
  SiGithub,
  SiGitlab,

  // Automation / Integrations
  SiN8N,
  SiZapier,
  SiAirtable,
  SiPostman,
  SiGraphql,
  SiSwagger,
  SiRabbitmq,
  SiApachekafka,

  // AI / Data Science
  SiTensorflow,
  SiPytorch,
  SiPandas,
  SiNumpy,
  SiJupyter,

  // Testing / Design / Commerce
  SiJest,
  SiVitest,
  SiCypress,
  SiFigma,
  SiStorybook,
  SiWordpress,
  SiShopify,
} from "react-icons/si";

import {
  FiBarChart2,
  FiCloud,
  FiCpu,
  FiGrid,
  FiPlayCircle,
} from "react-icons/fi";

import { Container } from "~/components/ui/Container";

const technologies = [
  // Frontend
  {
    name: "React",
    category: "Frontend",
    icon: SiReact,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SiNextdotjs,
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: SiAngular,
  },
  {
    name: "Vue.js",
    category: "Frontend",
    icon: SiVuedotjs,
  },
  {
    name: "TypeScript",
    category: "Lenguaje",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    category: "Lenguaje",
    icon: SiJavascript,
  },
  {
    name: "Tailwind CSS",
    category: "UI",
    icon: SiTailwindcss,
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: SiVite,
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
  },
  {
    name: "Express",
    category: "Backend",
    icon: SiExpress,
  },
  {
    name: "NestJS",
    category: "Backend",
    icon: SiNestjs,
  },
  {
    name: "Laravel",
    category: "Backend",
    icon: SiLaravel,
  },
  {
    name: "PHP",
    category: "Lenguaje",
    icon: SiPhp,
  },
  {
    name: "Spring Boot",
    category: "Backend",
    icon: SiSpringboot,
  },
  {
    name: "Java",
    category: "Enterprise",
    icon: SiOpenjdk,
  },
  {
    name: "Python",
    category: "Backend & IA",
    icon: SiPython,
  },
  {
    name: "Django",
    category: "Backend",
    icon: SiDjango,
  },
  {
    name: "FastAPI",
    category: "APIs",
    icon: SiFastapi,
  },

  // Mobile
  {
    name: "React Native",
    category: "Mobile",
    icon: SiReact,
  },
  {
    name: "Flutter",
    category: "Mobile",
    icon: SiFlutter,
  },
  {
    name: "Kotlin",
    category: "Android",
    icon: SiKotlin,
  },
  {
    name: "Swift",
    category: "iOS",
    icon: SiSwift,
  },

  // Data
  {
    name: "MySQL",
    category: "Base de datos",
    icon: SiMysql,
  },
  {
    name: "PostgreSQL",
    category: "Base de datos",
    icon: SiPostgresql,
  },
  {
    name: "MongoDB",
    category: "Base de datos",
    icon: SiMongodb,
  },
  {
    name: "Redis",
    category: "Datos & Cache",
    icon: SiRedis,
  },
  {
    name: "Prisma",
    category: "Datos",
    icon: SiPrisma,
  },
  {
    name: "Supabase",
    category: "Backend & Datos",
    icon: SiSupabase,
  },
  {
    name: "Firebase",
    category: "Cloud & Mobile",
    icon: SiFirebase,
  },
  {
    name: "Elasticsearch",
    category: "Búsqueda & Datos",
    icon: SiElasticsearch,
  },
  {
    name: "Excel",
    category: "Operación",
    icon: FiGrid,
  },
  {
    name: "Power BI",
    category: "Business Intelligence",
    icon: FiBarChart2,
  },

  // Cloud / DevOps
  {
    name: "Docker",
    category: "Infraestructura",
    icon: SiDocker,
  },
  {
    name: "Kubernetes",
    category: "Infraestructura",
    icon: SiKubernetes,
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: FiCloud,
  },
  {
    name: "Azure",
    category: "Cloud",
    icon: FiCloud,
  },
  {
    name: "Google Cloud",
    category: "Cloud",
    icon: SiGooglecloud,
  },
  {
    name: "Vercel",
    category: "Cloud",
    icon: SiVercel,
  },
  {
    name: "Nginx",
    category: "Infraestructura",
    icon: SiNginx,
  },
  {
    name: "Linux",
    category: "Infraestructura",
    icon: SiLinux,
  },
  {
    name: "GitHub",
    category: "Desarrollo",
    icon: SiGithub,
  },
  {
    name: "GitLab",
    category: "DevOps",
    icon: SiGitlab,
  },

  // Automation / Integration
  {
    name: "n8n",
    category: "Automatización",
    icon: SiN8N,
  },
  {
    name: "Zapier",
    category: "Automatización",
    icon: SiZapier,
  },
  {
    name: "Airtable",
    category: "Operación",
    icon: SiAirtable,
  },
  {
    name: "Postman",
    category: "APIs",
    icon: SiPostman,
  },
  {
    name: "GraphQL",
    category: "APIs",
    icon: SiGraphql,
  },
  {
    name: "Swagger",
    category: "APIs",
    icon: SiSwagger,
  },
  {
    name: "RabbitMQ",
    category: "Integraciones",
    icon: SiRabbitmq,
  },
  {
    name: "Apache Kafka",
    category: "Arquitectura",
    icon: SiApachekafka,
  },

  // AI / Data Science
  {
    name: "OpenAI",
    category: "Inteligencia Artificial",
    icon: FiCpu,
  },
  {
    name: "TensorFlow",
    category: "Machine Learning",
    icon: SiTensorflow,
  },
  {
    name: "PyTorch",
    category: "Machine Learning",
    icon: SiPytorch,
  },
  {
    name: "Pandas",
    category: "Datos",
    icon: SiPandas,
  },
  {
    name: "NumPy",
    category: "Datos",
    icon: SiNumpy,
  },
  {
    name: "Jupyter",
    category: "Data Science",
    icon: SiJupyter,
  },

  // Testing / Design / Commerce
  {
    name: "Jest",
    category: "Testing",
    icon: SiJest,
  },
  {
    name: "Vitest",
    category: "Testing",
    icon: SiVitest,
  },
  {
    name: "Cypress",
    category: "Testing",
    icon: SiCypress,
  },
  {
    name: "Playwright",
    category: "Testing",
    icon: FiPlayCircle,
  },
  {
    name: "Figma",
    category: "Diseño",
    icon: SiFigma,
  },
  {
    name: "Storybook",
    category: "UI Systems",
    icon: SiStorybook,
  },
  {
    name: "WordPress",
    category: "Web & CMS",
    icon: SiWordpress,
  },
  {
    name: "Shopify",
    category: "E-commerce",
    icon: SiShopify,
  },
] as const;

const capabilities = [
  {
    title: "Software",
    description: "Sistemas y plataformas construidos alrededor de tu operación.",
  },
  {
    title: "Automatización",
    description: "Menos trabajo manual y procesos más rápidos y consistentes.",
  },
  {
    title: "Integraciones",
    description: "Conectamos sistemas, herramientas, datos y servicios.",
  },
  {
    title: "IA & Datos",
    description: "Información y automatización aplicadas a decisiones reales.",
  },
] as const;

export function About() {
  return (
    <section
      id="nosotros"
      className="border-b border-zinc-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 border-b border-zinc-200 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 "
        >
          <div>
            

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
              Tecnología que se adapta a tu operación, no al revés.
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              En Cierra diseñamos y desarrollamos soluciones digitales para
              empresas que necesitan operar mejor, reducir tareas manuales y
              crecer con una base tecnológica sólida.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-500">
              Atendemos desde necesidades puntuales de pequeñas y medianas
              empresas hasta plataformas, integraciones y procesos más
              complejos dentro de operaciones en crecimiento.
            </p>
          </div>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="grid border-b border-zinc-200 sm:grid-cols-2 lg:grid-cols-4"
        >
          {capabilities.map((item, index) => (
            <div
              key={item.title}
              className={[
                "border-zinc-200 py-6",
                "border-b sm:px-6",
                index % 2 === 0 ? "sm:border-r" : "",
                index < 2 ? "lg:border-b-0" : "",
                "lg:border-b-0 lg:border-r",
                index === capabilities.length - 1 ? "lg:border-r-0" : "",
                index === 0 ? "sm:pl-0" : "",
              ].join(" ")}
            >
              <p className="text-xl font-semibold tracking-tight text-zinc-950">
                {item.title}
              </p>

              <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-500">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="pt-10 sm:pt-12"
        >
          <div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Stack & herramientas
              </p>

              <h3 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
                {technologies.length} tecnologías para construir la solución
                adecuada.
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-zinc-500 lg:text-right">
              Elegimos la arquitectura y las herramientas según el problema,
              presupuesto, infraestructura y escala de cada proyecto.
            </p>
          </div>

          {/* Technology grid */}
          <div className="grid grid-cols-2 border-l border-t border-zinc-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={technology.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.012, 0.3),
                  }}
                  className="group flex min-h-26.5 flex-col justify-between border-b border-r border-zinc-200 p-4 transition-colors duration-300 hover:bg-zinc-950"
                >
                  <Icon
                    size={24}
                    className="text-zinc-400 transition-colors duration-300 group-hover:text-white"
                  />

                  <div className="mt-5">
                    <p className="text-[13px] font-semibold leading-4 text-zinc-900 transition-colors duration-300 group-hover:text-white">
                      {technology.name}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-400">
                      {technology.category}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom text */}
          <div className="mt-5 flex items-start justify-between gap-6">
            <p className="max-w-2xl text-sm leading-6 text-zinc-500">
              Desde sitios web, sistemas administrativos y aplicaciones hasta
              e-commerce, automatizaciones, APIs, infraestructura cloud,
              analítica, inteligencia artificial e integraciones empresariales.
            </p>

            <span className="hidden shrink-0 font-mono text-xs text-zinc-300 sm:block">
              01—{technologies.length.toString().padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
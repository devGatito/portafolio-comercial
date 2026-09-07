import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  GithubIcon,
} from "@hugeicons/core-free-icons";

import { motion } from "motion/react";

import type { Project } from "~/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const hasDemo = Boolean(project.demoUrl);
  const hasGithub = Boolean(project.githubUrl);
  const hasScreenshot = project.screenshots.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white"
    >
      {hasScreenshot && (
        <div className="overflow-hidden border-b border-zinc-200 bg-zinc-100">
          <img
            src={project.screenshots[0]}
            alt={`Captura de ${project.name}`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="p-6 sm:p-8">
        <p className="text-sm font-medium text-zinc-500">
          {project.context}
        </p>

        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
          {project.name}
        </h3>

        <div className="mt-7 grid gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Problema
            </p>

            <p className="mt-2 leading-7 text-zinc-600">
              {project.problem}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Solución
            </p>

            <p className="mt-2 leading-7 text-zinc-600">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Funciones principales
          </p>

          <ul className="mt-3 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-6 text-zinc-600"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-950"
                />

                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Tecnologías
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {(hasDemo || hasGithub) && (
          <div className="mt-8 flex flex-wrap gap-3 border-t border-zinc-200 pt-6">
            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
              >
                Ver demostración

                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={17}
                  strokeWidth={1.8}
                />
              </a>
            )}

            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50"
              >
                GitHub

                <HugeiconsIcon
                  icon={GithubIcon}
                  size={17}
                  strokeWidth={1.8}
                />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
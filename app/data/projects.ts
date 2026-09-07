export type Project = {
  name: string;
  context: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  screenshots: string[];
  demoUrl?: string;
  githubUrl?: string;
  priority: number;
};

export const projects: Project[] = [
  {
    name: "[PENDIENTE: nombre del proyecto]",
    context: "[PENDIENTE: tipo de negocio o contexto]",
    problem:
      "[PENDIENTE: explica qué problema operativo o comercial necesitaba resolverse]",
    solution:
      "[PENDIENTE: describe la solución desarrollada y cómo ayuda al negocio]",
    features: [
      "[PENDIENTE: función principal]",
      "[PENDIENTE: segunda función]",
      "[PENDIENTE: tercera función]",
    ],
    technologies: [
      "[PENDIENTE]",
      "[PENDIENTE]",
    ],
    screenshots: [
      "/projects/proyecto-1/01.webp",
    ],
    demoUrl: "",
    githubUrl: "",
    priority: 1,
  },

  {
    name: "[PENDIENTE: nombre del proyecto]",
    context: "[PENDIENTE: tipo de negocio o contexto]",
    problem:
      "[PENDIENTE: problema que existía antes de desarrollar la solución]",
    solution:
      "[PENDIENTE: solución implementada]",
    features: [
      "[PENDIENTE: función principal]",
      "[PENDIENTE: segunda función]",
      "[PENDIENTE: tercera función]",
    ],
    technologies: [
      "[PENDIENTE]",
      "[PENDIENTE]",
    ],
    screenshots: [
      "/projects/proyecto-2/01.webp",
    ],
    demoUrl: "",
    priority: 2,
  },

  {
    name: "[PENDIENTE: nombre del proyecto]",
    context: "[PENDIENTE: tipo de negocio o contexto]",
    problem:
      "[PENDIENTE: problema que necesitaba resolverse]",
    solution:
      "[PENDIENTE: solución desarrollada]",
    features: [
      "[PENDIENTE: función principal]",
      "[PENDIENTE: segunda función]",
      "[PENDIENTE: tercera función]",
    ],
    technologies: [
      "[PENDIENTE]",
      "[PENDIENTE]",
    ],
    screenshots: [
      "/projects/proyecto-3/01.webp",
    ],
    demoUrl: "",
    priority: 3,
  },
];
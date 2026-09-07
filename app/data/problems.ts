export type Problem = {
  title: string;
  description: string;
  image: string;
};

export const problems = [
  {
    title: "Procesos manuales que consumen tiempo",
    description:
      "Tareas repetitivas absorben horas del equipo y dificultan que la operación pueda crecer sin aumentar la carga de trabajo.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
  },

  {
    title: "Información dispersa entre herramientas",
    description:
      "Datos importantes terminan repartidos entre hojas de cálculo, mensajes, documentos y plataformas que no se comunican entre sí.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
  },

  {
    title: "Errores que frenan la operación",
    description:
      "Cuando un proceso depende demasiado de tareas manuales, aumentan los errores, los retrabajos y los tiempos de respuesta.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
  },

  {
    title: "Herramientas que dejaron de escalar",
    description:
      "Las soluciones que funcionaban al principio empiezan a quedarse cortas cuando aumenta el volumen de clientes y operaciones.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
  },
] as const;
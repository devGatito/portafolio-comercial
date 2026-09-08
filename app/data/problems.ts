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

    // Captura de trabajo manual sobre hojas de cálculo / data entry.
    image:
      "https://images.unsplash.com/photo-1759752393975-7ca7b302fcc6?auto=format&fit=crop&w=1400&h=1000&q=85",
  },

  {
    title: "Información dispersa entre herramientas",
    description:
      "Datos importantes terminan repartidos entre hojas de cálculo, mensajes, documentos y plataformas que no se comunican entre sí.",

    // Cables y conexiones cruzadas: metáfora de sistemas mal conectados.
    image:
      "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?auto=format&fit=crop&w=1400&h=1000&q=85",
  },

  {
    title: "Errores que frenan la operación",
    description:
      "Cuando un proceso depende demasiado de tareas manuales, aumentan los errores, los retrabajos y los tiempos de respuesta.",

    // Terminal real con código y salida del sistema.
    image:
      "https://images.unsplash.com/photo-1774901128283-64c62117216a?auto=format&fit=crop&w=1400&h=1000&q=85",
  },

  {
    title: "Herramientas que dejaron de escalar",
    description:
      "Las soluciones que funcionaban al principio empiezan a quedarse cortas cuando aumenta el volumen de clientes y operaciones.",

    // Computadora legacy / tecnología obsoleta.
    image:
      "https://images.unsplash.com/photo-1766941234615-ffc4cf1e029e?auto=format&fit=crop&w=1400&h=1000&q=85",
  },
] as const;
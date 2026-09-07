export type Service = {
  name: string;
  problem: string;
  examples: string;
  whatsappMessage: string;
  image: string;
};

export const services: readonly Service[] = [
  {
    name: "Sistemas para negocios",

    problem:
      "Cuando la operación depende de hojas de cálculo, mensajes o herramientas separadas, es fácil perder control y duplicar trabajo.",

    examples:
      "Inventario, pedidos, clientes, cotizaciones, paneles administrativos y herramientas internas.",

    whatsappMessage:
      "Hola, quiero consultar una solución de sistemas para negocios. Me interesa centralizar procesos como inventario, pedidos, clientes o herramientas internas.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "Automatización e integraciones",

    problem:
      "Si tu equipo repite tareas manuales o mueve información entre sistemas todos los días, se pierde tiempo y aumentan los errores.",

    examples:
      "Conexión de APIs, sincronización de información, generación de reportes y automatización de tareas repetitivas.",

    whatsappMessage:
      "Hola, quiero consultar una solución de automatización e integraciones. Me interesa conectar sistemas y reducir tareas repetitivas en mi operación.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "Mejoras a sistemas existentes",

    problem:
      "Un sistema puede seguir siendo útil, pero quedarse corto cuando aparecen nuevas necesidades, errores o procesos que ya no encajan.",

    examples:
      "Corrección de errores, nuevas funcionalidades, integraciones, modernización y continuación de proyectos abandonados.",

    whatsappMessage:
      "Hola, quiero consultar mejoras para un sistema existente. Necesito revisar errores, nuevas funciones, integraciones o continuar un proyecto.",

    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
  },
];
import {
  Building03Icon,
  Alert02Icon,
  Target02Icon,
  Flag02Icon,
  CodeIcon,
  Clock01Icon,
  Money03Icon,
  PackageIcon,
  Layers01Icon,
  ViewIcon,
  CheckmarkCircle02Icon,
  Settings02Icon,
  TestTube01Icon,
  SentIcon,
  Wrench01Icon,
  CustomerSupportIcon,
} from "@hugeicons/core-free-icons";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  duration: string;
  deliverable: string;
  points: readonly {
    label: string;
    icon: typeof Building03Icon;
  }[];
  image: string;
};

export const processSteps = [
  {
    number: "01",
    title: "Conocemos el problema",
    description:
      "Conversamos sobre la operación, la necesidad y el resultado esperado.",
    duration: "Primera reunión",
    deliverable: "Diagnóstico inicial",

    // Software engineer analizando el flujo / sistema en whiteboard
    image:
      "https://images.unsplash.com/photo-1580894740397-0946742deb4b?auto=format&fit=crop&w=1400&h=1000&q=85",

    points: [
      {
        label: "Contexto del negocio",
        icon: Building03Icon,
      },
      {
        label: "Problema actual",
        icon: Alert02Icon,
      },
      {
        label: "Objetivo principal",
        icon: Target02Icon,
      },
      {
        label: "Resultado esperado",
        icon: Flag02Icon,
      },
    ],
  },

  {
    number: "02",
    title: "Definimos alcance y propuesta",
    description:
      "Se establecen funcionalidades, tiempos, entregables, precio y condiciones.",
    duration: "Antes de comenzar",
    deliverable: "Propuesta de proyecto",

    // Wireframes reales: convertir la idea en una solución definida
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?auto=format&fit=crop&w=1400&h=1000&q=85",

    points: [
      {
        label: "Funcionalidades",
        icon: CodeIcon,
      },
      {
        label: "Tiempos estimados",
        icon: Clock01Icon,
      },
      {
        label: "Precio del proyecto",
        icon: Money03Icon,
      },
      {
        label: "Condiciones y entregables",
        icon: PackageIcon,
      },
    ],
  },

  {
    number: "03",
    title: "Desarrollamos por avances",
    description:
      "El cliente puede revisar el progreso y validar las partes importantes.",
    duration: "Durante el desarrollo",
    deliverable: "Avances revisables",

    // Código real en dark mode, mucho más propio de desarrollo
    image:
      "https://images.unsplash.com/photo-1770734360042-676ef707d022?auto=format&fit=crop&w=1400&h=1000&q=85",

    points: [
      {
        label: "Desarrollo por etapas",
        icon: Layers01Icon,
      },
      {
        label: "Revisión de avances",
        icon: ViewIcon,
      },
      {
        label: "Validación del cliente",
        icon: CheckmarkCircle02Icon,
      },
      {
        label: "Ajustes acordados",
        icon: Settings02Icon,
      },
    ],
  },

  {
    number: "04",
    title: "Entregamos y damos seguimiento",
    description:
      "Probamos la solución, realizamos la entrega y atendemos los ajustes acordados.",
    duration: "Etapa final",
    deliverable: "Solución terminada",

    // Dashboard / monitoreo posterior al lanzamiento
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1400&h=1000&q=85",

    points: [
      {
        label: "Pruebas finales",
        icon: TestTube01Icon,
      },
      {
        label: "Entrega del proyecto",
        icon: SentIcon,
      },
      {
        label: "Ajustes acordados",
        icon: Wrench01Icon,
      },
      {
        label: "Seguimiento posterior",
        icon: CustomerSupportIcon,
      },
    ],
  },
] satisfies readonly ProcessStep[];
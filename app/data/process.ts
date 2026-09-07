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
    image: "https://picsum.photos/seed/cierra-discovery/1400/1000",

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
    image: "https://picsum.photos/seed/cierra-planning/1400/1000",

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
    image: "https://picsum.photos/seed/cierra-development/1400/1000",

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
    image: "https://picsum.photos/seed/cierra-delivery/1400/1000",

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
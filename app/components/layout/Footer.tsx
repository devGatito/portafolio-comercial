import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  Linkedin01Icon,
} from "@hugeicons/core-free-icons";

import { Container } from "~/components/ui/Container";
import { navigation } from "~/data/navigation";
import { contact } from "~/data/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10 text-zinc-400">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <a
              href="#inicio"
              className="text-base font-semibold text-white"
            >
              {contact.name}
            </a>

            <p className="mt-2 text-sm">
              Desarrollo de software para negocios.
            </p>
          </div>

          <nav
            aria-label="Navegación del footer"
            className="flex flex-wrap gap-x-5 gap-y-3"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Elías Soto"
              className="flex size-10 items-center justify-center rounded-full border border-zinc-800 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <HugeiconsIcon
                icon={Linkedin01Icon}
                size={18}
                strokeWidth={1.7}
              />
            </a>

            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Elías Soto"
              className="flex size-10 items-center justify-center rounded-full border border-zinc-800 transition-colors hover:border-zinc-600 hover:text-white"
            >
              <HugeiconsIcon
                icon={GithubIcon}
                size={18}
                strokeWidth={1.7}
              />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-6">
          <p className="text-sm text-zinc-500">
            © {currentYear} {contact.name}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
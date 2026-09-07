import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import { useState } from "react";
import { navigation } from "~/data/navigation";
import { Button } from "~/components/ui/Button";
import { Container } from "~/components/ui/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a
            href="#inicio"
            className="text-base font-bold tracking-tight text-zinc-950"
          >
            <img src="/cierra_dark.png" alt="Logo" className="h-16 w-auto" />
          </a>

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-7 lg:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contacto">
              Cuéntame tu proyecto
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={18}
                strokeWidth={1.8}
              />
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex size-10 items-center justify-center rounded-full border border-zinc-200 lg:hidden"
          >
            <HugeiconsIcon
              icon={open ? Cancel01Icon : Menu01Icon}
              size={22}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {open && (
          <div className="border-t border-zinc-200 py-5 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button href="#contacto" className="mt-4 w-full">
              Cuéntame tu proyecto
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                size={18}
                strokeWidth={1.8}
              />
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}
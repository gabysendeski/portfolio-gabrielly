"use client";

import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/data/portfolio";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    function clickOutside(event: PointerEvent) {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", clickOutside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", clickOutside);
    };
  }, [open]);

  return (
    <div ref={wrapper} className="md:hidden">
      <button
        ref={trigger}
        type="button"
        className="icon-button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Fechar navegação" : "Abrir navegação"}
        onClick={() => setOpen(!open)}
      >
        <span aria-hidden="true">{open ? "×" : "☰"}</span>
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Navegação no celular"
        hidden={!open}
        className="absolute top-full inset-x-0 border-b border-line bg-background px-5 py-6 shadow-xl"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-3 text-sm hover:bg-surface"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={profile.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary mt-4 w-full"
          onClick={() => setOpen(false)}
        >
          Falar sobre meu projeto ↗
        </a>
      </nav>
    </div>
  );
}

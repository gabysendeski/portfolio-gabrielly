"use client";

import { useEffect, useRef } from "react";

export function ThemeToggle() {
  const button = useRef<HTMLButtonElement>(null);
  function updateLabel() {
    const label = `Ativar tema ${document.documentElement.dataset.theme === "light" ? "escuro" : "claro"}`;
    button.current?.setAttribute("aria-label", label);
    button.current?.setAttribute("title", label);
  }
  useEffect(() => {
    updateLabel();
  }, []);
  function toggleTheme() {
    const root = document.documentElement;
    const theme = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = theme;
    try {
      localStorage.setItem("gs-theme", theme);
    } catch {
      /* Storage may be unavailable. */
    }
    updateLabel();
  }
  return (
    <button
      ref={button}
      className="icon-button"
      type="button"
      aria-label="Alternar tema"
      title="Alternar tema"
      onClick={toggleTheme}
    >
      ◐
    </button>
  );
}

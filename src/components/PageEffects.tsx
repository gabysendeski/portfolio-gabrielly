"use client";

import { useEffect, useRef } from "react";

export function PageEffects() {
  const progress = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function updateProgress() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current)
        progress.current.style.width = `${max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0}%`;
    }
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.removeAttribute("data-pending");
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top >= window.innerHeight) {
          element.dataset.pending = "true";
          observer.observe(element);
        }
      });
    }
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      observer.disconnect();
      elements.forEach((element) => element.removeAttribute("data-pending"));
    };
  }, []);
  return <div ref={progress} className="progress" aria-hidden="true" />;
}

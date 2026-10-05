"use client";

import { useEffect } from "react";

// Progressive enhancement: content stays visible when JS or motion is disabled.
export default function PortfolioMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (preference.matches) return;
      const targets = Array.from(document.querySelectorAll<HTMLElement>(
        "#intro > div:first-child > *, #intro > div:last-child, main > section:not(#intro):not(#featured) .section-title, main > section:not(#intro):not(#featured) .section-description",
      ));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      targets.forEach((target, index) => {
        target.style.setProperty("--reveal-delay", target.closest("#intro") ? `${Math.min(index, 5) * 90}ms` : "0ms");
        target.classList.add("motion-reveal");
        observer.observe(target);
      });
      const cards = Array.from(document.querySelectorAll<HTMLElement>(".showcase-card"));
      const visuals = Array.from(document.querySelectorAll<HTMLElement>(".showcase-visual"));
      const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 760px)");
      let frame = 0;
      const update = () => {
        frame = 0;
        visuals.forEach((visual) => {
          const rect = visual.getBoundingClientRect();
          const amount = Math.max(-1, Math.min(1, (window.innerHeight / 2 - rect.top - rect.height / 2) / window.innerHeight));
          visual.style.setProperty("--drift", `${desktop.matches ? amount * 38 : 0}px`);
        });
        if (cards.length > 1) {
          const nextTop = cards[1].getBoundingClientRect().top;
          const progress = desktop.matches ? Math.max(0, Math.min(1, (window.innerHeight - nextTop) / (window.innerHeight - 112))) : 0;
          cards[0].style.setProperty("--card-scale", `${1 - progress * 0.045}`);
        }
      };
      const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      update();
      dispose = () => {
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        window.cancelAnimationFrame(frame);
        targets.forEach((target) => { target.classList.remove("motion-reveal", "motion-visible"); target.style.removeProperty("--reveal-delay"); });
        cards.forEach((card) => card.style.removeProperty("--card-scale"));
        visuals.forEach((visual) => visual.style.removeProperty("--drift"));
      };
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { dispose(); preference.removeEventListener("change", setup); };
  }, []);
  return null;
}

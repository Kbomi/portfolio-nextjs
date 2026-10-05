"use client";
import { useEffect } from "react";

const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(max, value));

// Progressive enhancement: every section remains readable without motion or JS.
export default function PortfolioMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};
    const setup = () => {
      dispose();
      if (preference.matches) return;
      const targets = Array.from(document.querySelectorAll<HTMLElement>(
        "[data-reveal], main > section .section-title, main > section .section-description, .sideproject-grid > article",
      ));
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      targets.forEach((target, index) => {
        target.style.setProperty("--reveal-delay", target.closest("#intro") ? `${Math.min(index, 4) * 100}ms` : "0ms");
        target.classList.add("motion-reveal");
        observer.observe(target);
      });
      const cards = Array.from(document.querySelectorAll<HTMLElement>(".showcase-card"));
      const visuals = Array.from(document.querySelectorAll<HTMLElement>(".showcase-visual"));
      const ribbon = document.querySelector<HTMLElement>(".project-ribbon");
      const story = document.querySelector<HTMLElement>(".about-copy");
      const words = Array.from(document.querySelectorAll<HTMLElement>(".story-word"));
      const career = document.querySelector<HTMLElement>(".career-timeline");
      const hero = document.querySelector<HTMLElement>(".motion-hero");
      const stage = document.querySelector<HTMLElement>(".hero-stage");
      const about = document.querySelector<HTMLElement>(".about-story");
      const desktop = window.matchMedia("(min-width: 1024px) and (min-height: 760px)");
      const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
      let frame = 0;
      const update = () => {
        frame = 0;
        const height = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight - height;
        document.documentElement.style.setProperty("--page-progress", `${pageHeight > 0 ? clamp(window.scrollY / pageHeight) : 0}`);
        visuals.forEach((visual) => {
          const rect = visual.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > height) return;
          const amount = clamp((height / 2 - rect.top - rect.height / 2) / height, -1, 1);
          visual.style.setProperty("--drift", `${desktop.matches ? amount * 38 : 0}px`);
        });
        if (cards.length > 1) {
          const progress = desktop.matches ? clamp((height - cards[1].getBoundingClientRect().top) / (height - 112)) : 0;
          cards[0].style.setProperty("--card-scale", `${1 - progress * 0.045}`);
        }
        if (hero) {
          const rect = hero.getBoundingClientRect();
          hero.style.setProperty("--hero-lift", `${clamp(-rect.top / rect.height) * -95}px`);
        }
        if (ribbon) {
          const rect = ribbon.getBoundingClientRect();
          if (rect.bottom >= 0 && rect.top <= height) {
            const progress = clamp((height - rect.top) / (height + rect.height));
            ribbon.style.setProperty("--ribbon-shift", `${(progress - 0.5) * (window.innerWidth < 768 ? 240 : 650)}px`);
          }
        }
        if (story) {
          const rect = story.getBoundingClientRect();
          const progress = clamp((height * 0.86 - rect.top) / (height * 0.54 + rect.height));
          words.forEach((word, index) => {
            word.style.opacity = `${0.24 + clamp(progress * words.length - index) * 0.76}`;
          });
        }
        if (about) {
          const rect = about.getBoundingClientRect();
          about.style.setProperty("--about-drift", `${clamp((height / 2 - rect.top - rect.height / 2) / height, -1, 1) * 75}px`);
        }
        if (career) {
          const rect = career.getBoundingClientRect();
          career.style.setProperty("--timeline-fill", `${clamp((height * 0.65 - rect.top) / rect.height)}`);
        }
      };
      const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
      const move = (event: PointerEvent) => {
        if (!stage || !finePointer.matches) return;
        const rect = stage.getBoundingClientRect();
        stage.style.setProperty("--pointer-x", `${clamp((event.clientX - rect.left - rect.width / 2) / 35, -10, 10)}deg`);
        stage.style.setProperty("--pointer-y", `${clamp((event.clientY - rect.top - rect.height / 2) / -35, -6, 6)}deg`);
      };
      const leave = () => { stage?.style.removeProperty("--pointer-x"); stage?.style.removeProperty("--pointer-y"); };
      stage?.addEventListener("pointermove", move);
      stage?.addEventListener("pointerleave", leave);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      update();
      dispose = () => {
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        window.cancelAnimationFrame(frame);
        stage?.removeEventListener("pointermove", move);
        stage?.removeEventListener("pointerleave", leave);
        leave();
        targets.forEach((target) => { target.classList.remove("motion-reveal", "motion-visible"); target.style.removeProperty("--reveal-delay"); });
        words.forEach((word) => word.style.removeProperty("opacity"));
        cards.forEach((card) => card.style.removeProperty("--card-scale"));
        visuals.forEach((visual) => visual.style.removeProperty("--drift"));
        document.documentElement.style.removeProperty("--page-progress");
        hero?.style.removeProperty("--hero-lift"); ribbon?.style.removeProperty("--ribbon-shift"); about?.style.removeProperty("--about-drift"); career?.style.removeProperty("--timeline-fill");
      };
    };
    setup();
    preference.addEventListener("change", setup);
    return () => { dispose(); preference.removeEventListener("change", setup); };
  }, []);
  return <div className="page-scroll-progress" aria-hidden="true" />;
}

"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, MousePointer2 } from "lucide-react";
import { HeroInteraction, TURN_FRAMES } from "./hero-timeline.mjs";
import styles from "./InteractiveHero.module.css";

export default function InteractiveHero() {
  const root = useRef<HTMLElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const message = useRef<HTMLParagraphElement>(null);
  const greet = useRef<HTMLButtonElement>(null);
  const hint = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = root.current;
    const surface = canvas.current;
    const button = greet.current;
    if (!section || !surface || !button) return;
    const context = surface.getContext("2d", { alpha: false });
    if (!context) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = matchMedia(
      "(max-width: 767px), (hover: none), (pointer: coarse)",
    );
    const abort = new AbortController();
    const frames = new Map<string, ImageBitmap>();
    let disposed = false;
    let ready = false;
    let visible = true;
    let raf = 0;
    let previousTime = 0;
    const interaction = new HeroInteraction();
    let timingCount = 0;
    let timingTotal = 0;
    let timingDelayed = 0;

    let lastMessage = "";
    let lastPaint = "";

    const say = (text: string) => {
      if (text === lastMessage) return;
      lastMessage = text;
      if (message.current) message.current.textContent = text;
    };
    const paint = (source: string, index: number) => {
      const key = `${source}:${index}`;
      if (lastPaint === key) return;
      const frame = frames.get(key);
      if (!frame) return;
      // One complete frame per draw: no overlapping faces or runtime dissolves.
      context.drawImage(frame, 0, 0, surface.width, surface.height);
      lastPaint = key;
      section.dataset.motionFrame = key;
    };
    const tick = (now: number) => {
      raf = 0;
      if (disposed || !ready || !visible || document.hidden || reduced.matches)
        return;
      const elapsed = previousTime ? now - previousTime : 1000 / 60;
      if (previousTime && process.env.NODE_ENV === "development") {
        timingCount++;
        timingTotal += elapsed;
        if (elapsed > 35) timingDelayed++;
        if (timingCount % 20 === 0) {
          section.dataset.motionAverageMs = (timingTotal / timingCount).toFixed(
            1,
          );
          section.dataset.motionDelayed = String(timingDelayed);
          section.dataset.motionSamples = String(timingCount);
        }
      }
      previousTime = now;
      const state = interaction.update(Math.min(50, elapsed));
      paint(state.source, state.index);
      if (section.dataset.zone !== state.zone)
        section.dataset.zone = state.zone;
      const gaze = interaction.gaze.toFixed(3);
      if (section.dataset.gaze !== gaze) section.dataset.gaze = gaze;
      say(state.message);
      if (interaction.needsFrame()) raf = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!raf && ready && visible && !document.hidden && !reduced.matches) {
        previousTime = 0;
        raf = requestAnimationFrame(tick);
      }
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch" || coarse.matches || reduced.matches)
        return;
      const box = section.getBoundingClientRect();
      interaction.pointer((event.clientX - box.left) / box.width);
      schedule();
    };
    const leave = (event: PointerEvent) => {
      if (event.pointerType === "touch" || coarse.matches) return;
      interaction.pointer(null);
      schedule();
    };
    const tap = () => {
      if (!ready || reduced.matches) return;
      interaction.greet();
      schedule();
    };
    const preference = () => {
      if (hint.current)
        hint.current.textContent = reduced.matches
          ? "아래에서 제 작업을 만나보세요"
          : coarse.matches
            ? "캐릭터를 탭해서 인사해 주세요"
            : "커서를 움직여 보세요";
      if (coarse.matches) interaction.pointer(null);
      button.disabled = !ready || reduced.matches;
      if (reduced.matches) {
        cancelAnimationFrame(raf);
        raf = 0;
        interaction.reset();
        paint("original", 19);
        say("");
        section.dataset.zone = "idle";
      } else schedule();
    };
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) {
        cancelAnimationFrame(raf);
        raf = 0;
        interaction.pointer(null);
      } else schedule();
    });
    observer.observe(section);
    section.addEventListener("pointermove", move, { passive: true });
    section.addEventListener("pointerleave", leave);
    button.addEventListener("click", tap);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", preference);
    coarse.addEventListener("change", preference);
    preference();

    // All decoding finishes before interaction; the draw loop only uses ready bitmaps.
    const load = async (
      source: "original" | "left" | "right" | "pan",
      index: number,
    ) => {
      const url =
        source === "original"
          ? `/hero/frame_${String(index).padStart(4, "0")}.webp`
          : `/hero-motion/${source}/${String(index).padStart(3, "0")}.webp`;
      const response = await fetch(url, { signal: abort.signal });
      if (!response.ok) throw new Error(`Hero frame: ${response.status}`);
      const blob = await response.blob();
      const bitmap =
        source === "original"
          ? await createImageBitmap(blob, 300, 0, 680, 720, {
              resizeWidth: 408,
              resizeHeight: 432,
            })
          : await createImageBitmap(blob);
      if (disposed) bitmap.close();
      else frames.set(`${source}:${index}`, bitmap);
    };
    void (async () => {
      try {
        await load("original", 19);
        if (disposed) return;
        paint("original", 19);
        section.dataset.loaded = "true";
        const needed: Array<{
          source: "original" | "left" | "right" | "pan";
          index: number;
        }> = [
          ...Array.from({ length: TURN_FRAMES.left }, (_, i) => ({
            source: "left" as const,
            index: i + 1,
          })),
          ...Array.from({ length: TURN_FRAMES.right }, (_, i) => ({
            source: "right" as const,
            index: i + 1,
          })),
          ...Array.from({ length: TURN_FRAMES.pan }, (_, i) => ({
            source: "pan" as const,
            index: i + 1,
          })),
          ...Array.from({ length: 87 }, (_, i) => ({
            source: "original" as const,
            index: i + 64,
          })),
        ];
        let next = 0;
        await Promise.all(
          Array.from({ length: 5 }, async () => {
            while (next < needed.length && !disposed) {
              const frame = needed[next++];
              await load(frame.source, frame.index);
            }
          }),
        );
        if (disposed) return;
        ready = true;
        section.dataset.ready = "true";
        preference();
      } catch {
        if (!disposed && hint.current)
          hint.current.textContent = "아래에서 제 작업을 만나보세요";
      }
    })();
    return () => {
      disposed = true;
      abort.abort();
      cancelAnimationFrame(raf);
      observer.disconnect();
      frames.forEach((frame) => frame.close());
      section.removeEventListener("pointermove", move);
      section.removeEventListener("pointerleave", leave);
      button.removeEventListener("click", tap);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", preference);
      coarse.removeEventListener("change", preference);
    };
  }, []);

  return (
    <section
      ref={root}
      id="hello"
      className={styles.hero}
      aria-labelledby="hero-heading"
      data-zone="idle"
    >
      <div className={styles.topline}>
        <span>작업을 소개하기 전에, 먼저 인사해요</span>
        <span>김보미의 포트폴리오 · 2026</span>
      </div>
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>웹/앱 개발자</p>
          <h1 id="hero-heading">
            안녕하세요,
            <br />
            <strong>김보미</strong>입니다<span className={styles.dot}>.</span>
          </h1>
          <p className={styles.description}>
            작은 인터랙션으로
            <br />
            기억에 남는 경험을 만듭니다.
          </p>
          <div className={styles.instruction}>
            <MousePointer2 size={18} aria-hidden="true" />
            <span ref={hint}>커서를 움직여 저를 불러주세요</span>
          </div>
        </div>
        <button
          ref={greet}
          type="button"
          className={styles.character}
          disabled
          aria-label="김보미 캐릭터와 인사하기"
        >
          {/* A static poster also keeps the character visible before loading and without JavaScript. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero/frame_0019.webp"
            alt="노트북 앞에서 작업하는 김보미 캐릭터"
            width="1280"
            height="720"
            fetchPriority="high"
            className={styles.poster}
          />
          <canvas
            ref={canvas}
            width="408"
            height="432"
            aria-hidden="true"
            className={styles.canvas}
          />
          <span className={styles.tapLabel}>
            탭해서 인사하기 <ArrowUpRight size={12} aria-hidden="true" />
          </span>
        </button>
        <div className={styles.reaction}>
          <span className={styles.reactionLine} aria-hidden="true" />
          <p
            ref={message}
            className={styles.message}
            role="status"
            aria-live="polite"
            aria-atomic="true"
          />
          <span className={styles.sideNote}>
            함께 만들 다음
            <br />
            경험을 기다립니다.
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>사람을 생각하며 만드는 웹 경험</span>
        <a href="#intro">
          포트폴리오 살펴보기 <ArrowDown size={16} aria-hidden="true" />
        </a>
        <span>아래로 내려서 만나보세요</span>
      </div>
    </section>
  );
}

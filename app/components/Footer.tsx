import { ArrowUpRight, Github, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer id="footer" className="contact-surface text-white">
      <div className="shell section-space">
        <p className="contact-display" aria-hidden="true" data-reveal>LET’S BUILD<span>TOGETHER.</span></p>
        <p className="text-[11px] font-bold tracking-[.16em] text-[#bed0b4]">
          06 / Let&apos;s connect
        </p>
        <div data-reveal className="mt-4 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold leading-relaxed tracking-tight md:text-4xl">
              함께 만들 다음 경험이
              <br />
              기대됩니다.
            </h2>
            <a
              href="mailto:93rlaqhal@gmail.com"
              className="mt-7 inline-flex items-center gap-3 border-b border-[#6d8b77] pb-2 text-base"
            >
              <Mail size={18} />
              93rlaqhal@gmail.com
              <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-[#dce7d6]">
            <a
              href="https://github.com/Kbomi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/%EB%B3%B4%EB%AF%B8-%EA%B9%80-126326207"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.kko-kkuri.com"
              target="_blank"
              rel="noreferrer"
            >
              Blog ↗
            </a>
          </div>
        </div>
        <div className="mt-16 flex justify-between border-t border-[#50705b] pt-6 text-[11px] text-[#bed0b4]">
          <span>© {new Date().getFullYear()} Kim Bomi</span>
          <a href="#intro">맨 위로 ↑</a>
        </div>
      </div>
    </footer>
  );
}

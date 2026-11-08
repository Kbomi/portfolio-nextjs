export default function Footer() {
  return (
    <footer id="footer" className="simple-footer">
      <div className="shell footer-inner">
        <div><p>함께할 작업이 있다면 연락 주세요.</p><a href="mailto:93rlaqhal@gmail.com">93rlaqhal@gmail.com</a></div>
        <div className="footer-links">
          <a href="https://github.com/Kbomi" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/%EB%B3%B4%EB%AF%B8-%EA%B9%80-126326207" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.kko-kkuri.com" target="_blank" rel="noreferrer">Blog</a>
        </div>
        <small>© {new Date().getFullYear()} 김보미</small>
      </div>
    </footer>
  );
}

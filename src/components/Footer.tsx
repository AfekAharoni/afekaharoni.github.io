import { PROFILE } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <p>Built with React & Framer Motion</p>
      </div>
    </footer>
  );
}

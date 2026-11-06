import { ArrowUp } from "lucide-react";
import { PROFILE } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. Designed & built with React and Framer Motion.
        </p>
        <a href="#top" className="icon-btn icon-btn-sm" aria-label="Back to top">
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}

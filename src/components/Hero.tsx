import type { CSSProperties } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "../data";
import Magnetic from "./Magnetic";
import RotatingText from "./RotatingText";

const SOCIALS = [
  { icon: Github, href: PROFILE.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
  { icon: FileText, href: PROFILE.resume, label: "Resume" },
];

/** Delay for the CSS intro animation. The intro runs in CSS so it plays from the pre-rendered HTML, before JS loads. */
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function Hero() {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 80]);
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);
  const tiltX = useSpring(0, { stiffness: 120, damping: 14 });
  const tiltY = useSpring(0, { stiffness: 120, damping: 14 });

  const [first, last] = PROFILE.name.split(" ");

  return (
    <section id="top" className="hero container">
      <motion.div className="hero-text" style={{ y: textY, opacity: fade }}>
        <div className="status-pill intro-up" style={delay(0.05)}>
          <span className="status-dot" />
          <MapPin size={13} /> {PROFILE.location}
        </div>

        <h1 className="hero-name" aria-label={PROFILE.name}>
          {[first, last].map((word, w) => (
            <span key={word} className="hero-word" aria-hidden>
              {word.split("").map((ch, i) => (
                <span key={i} className="hero-char" style={delay(0.1 + w * 0.15 + i * 0.03)}>
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="hero-role intro-up" style={delay(0.45)}>
          <RotatingText words={PROFILE.roles} />
        </p>

        <p className="hero-lead intro-up" style={delay(0.55)}>
          Studying at the Hebrew University of Jerusalem and currently a Software Engineering Intern at Dell
          Technologies.
        </p>

        <div className="hero-actions intro-up" style={delay(0.65)}>
          <Magnetic>
            <a href="#projects" className="btn btn-primary">
              View my work <ArrowRight size={16} className="btn-arrow" />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </Magnetic>
        </div>

        <ul className="hero-socials">
          {SOCIALS.map(({ icon: Icon, href, label }, i) => (
            <li key={label} className="intro-up" style={delay(0.75 + i * 0.06)}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label={label}
                data-tip={label}
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div className="hero-visual" style={{ y: photoY }}>
        <div className="intro-pop" style={delay(0.15)}>
          <motion.div
            className="photo-wrap"
            style={{ rotateX: tiltX, rotateY: tiltY, transformPerspective: 900 }}
            onPointerMove={(e) => {
              if (e.pointerType !== "mouse") return;
              const r = e.currentTarget.getBoundingClientRect();
              tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 16);
              tiltX.set(-((e.clientY - r.top) / r.height - 0.5) * 16);
            }}
            onPointerLeave={() => {
              tiltX.set(0);
              tiltY.set(0);
            }}
          >
            <div className="photo-ring" />
            <div className="photo-glow" />
            <img src={PROFILE.photo} alt={PROFILE.name} className="photo" />
            <div className="float-chip chip-a">
              <span className="mono chip-label">GPA</span> 91
            </div>
            <div className="float-chip chip-b">
              <span className="chip-emoji">🏆</span> HUJI Hackathon Top 4
            </div>
            <div className="float-chip chip-c mono">{"</>"}</div>
          </motion.div>
        </div>
      </motion.div>

      <a href="#about" className="scroll-cue intro-fade" style={delay(1.2)} aria-label="Scroll down">
        <span className="mono">scroll</span>
        <ArrowDown size={14} className="scroll-cue-arrow" />
      </a>
    </section>
  );
}

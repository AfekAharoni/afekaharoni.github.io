import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "../data";
import Magnetic from "./Magnetic";
import RotatingText from "./RotatingText";

const ease = [0.22, 1, 0.36, 1] as const;

const SOCIALS = [
  { icon: Github, href: PROFILE.github, label: "GitHub" },
  { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
  { icon: FileText, href: PROFILE.resume, label: "Resume" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 600], [0, 80]);
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  const [first, last] = PROFILE.name.split(" ");

  return (
    <section id="top" className="hero container">
      <motion.div className="hero-text" style={{ y: textY, opacity: fade }}>
        <motion.div
          className="status-pill"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <span className="status-dot" />
          <MapPin size={13} /> {PROFILE.location}
        </motion.div>

        <h1 className="hero-name" aria-label={PROFILE.name}>
          {[first, last].map((word, w) => (
            <span key={word} className="hero-word" aria-hidden>
              {word.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="hero-char"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.45 + w * 0.25 + i * 0.045, ease }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
        >
          <RotatingText words={PROFILE.roles} />
        </motion.p>

        <motion.p
          className="hero-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25, ease }}
        >
          Building Lightning, Dell's parallel file system for large-scale AI, while studying Computer Science at
          the Hebrew University of Jerusalem.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease }}
        >
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
        </motion.div>

        <motion.ul
          className="hero-socials"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 1.6 } } }}
        >
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.li key={label} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
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
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      <motion.div
        className="hero-visual"
        style={{ y: photoY }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease }}
      >
        <div className="photo-wrap">
          <div className="photo-ring" />
          <div className="photo-glow" />
          <img src={PROFILE.photo} alt={PROFILE.name} className="photo" />
          <motion.div
            className="float-chip chip-a"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="mono chip-label">GPA</span> 91
          </motion.div>
          <motion.div
            className="float-chip chip-b"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <span className="chip-emoji">🏆</span> HUJI Hackathon Top 4
          </motion.div>
          <motion.div
            className="float-chip chip-c mono"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            {"</>"}
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-cue"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <span className="mono">scroll</span>
        <ArrowDown size={14} className="scroll-cue-arrow" />
      </motion.a>
    </section>
  );
}

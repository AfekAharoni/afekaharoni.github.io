import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { PROFILE } from "../data";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <section id="contact" className="section container">
      <Reveal>
        <div className="contact card">
          <div className="contact-glow" />
          <p className="eyebrow eyebrow-center">
            <span className="eyebrow-index">07</span>
            <span className="eyebrow-line" />
            Contact
          </p>
          <h2 className="contact-title">
            Let's build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="contact-lead">
            I'm always happy to talk about interesting projects, opportunities, or anything tech. My inbox is open.
          </p>

          <div className="contact-actions">
            <Magnetic>
              <a href={`mailto:${PROFILE.email}`} className="btn btn-primary btn-lg">
                <Mail size={17} /> Say hello
              </a>
            </Magnetic>
            <button className="btn btn-ghost btn-lg copy-btn" onClick={copy}>
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span key="ok" className="copy-inner" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                    <Check size={16} /> Copied!
                  </motion.span>
                ) : (
                  <motion.span key="copy" className="copy-inner" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
                    <Copy size={16} /> <span className="mono">{PROFILE.email}</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          <div className="contact-socials">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-underline">
              <Github size={15} /> GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

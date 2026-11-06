import { motion } from "framer-motion";
import Reveal from "./Reveal";

type Props = { index: string; label: string; title: string; subtitle?: string };

const ease = [0.22, 1, 0.36, 1] as const;

export default function SectionHeading({ index, label, title, subtitle }: Props) {
  return (
    <div className="section-heading">
      <Reveal>
        <p className="eyebrow">
          <span className="eyebrow-index">{index}</span>
          <motion.span
            className="eyebrow-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
          />
          {label}
        </p>
      </Reveal>
      <motion.h2
        className="section-title"
        aria-label={title}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
      >
        {title.split(" ").map((word, i) => (
          <span key={i} className="word-mask" aria-hidden>
            <motion.span
              className="word"
              variants={{ hidden: { y: "105%" }, show: { y: "0%" } }}
              transition={{ duration: 0.85, ease }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h2>
      {subtitle && (
        <Reveal delay={0.25}>
          <p className="section-subtitle">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

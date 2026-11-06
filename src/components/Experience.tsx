import { motion, useScroll, useSpring } from "framer-motion";
import { Award } from "lucide-react";
import { useRef } from "react";
import { EXPERIENCE } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="section container">
      <SectionHeading
        index="02"
        label="Experience"
        title="Where I've worked."
        subtitle="From high-performance storage at Dell to leading and teaching in the Air Force."
      />

      <div className="timeline" ref={ref}>
        <div className="timeline-track">
          <motion.div className="timeline-fill" style={{ scaleY }} />
        </div>

        {EXPERIENCE.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.05} className="timeline-item">
            <motion.span
              className="timeline-dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.4, 1] }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            <div className="card exp-card">
              <div className="exp-head">
                <div className="exp-id">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="exp-logo" loading="lazy" />
                  <div>
                    <h3 className="card-title">{exp.role}</h3>
                    <p className="card-sub">{exp.company}</p>
                  </div>
                </div>
                <span className="period mono">{exp.period}</span>
              </div>
              <p className="card-body">{exp.description}</p>
              {exp.highlight && (
                <p className="highlight">
                  <Award size={15} /> {exp.highlight}
                </p>
              )}
              <div className="tags">
                {exp.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

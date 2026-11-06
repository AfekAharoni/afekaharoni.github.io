import { motion } from "framer-motion";
import { Brain, Code2, HardDrive, Server } from "lucide-react";
import { SKILLS } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = { code: Code2, drive: HardDrive, server: Server, brain: Brain };

export default function Skills() {
  return (
    <section id="skills" className="section container">
      <SectionHeading index="05" label="Skills" title="My toolkit." />
      <div className="skills-grid">
        {SKILLS.map((group, i) => {
          const Icon = ICONS[group.icon];
          return (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="card skill-card">
                <div className="skill-icon">
                  <Icon size={20} />
                </div>
                <h3 className="skill-title">{group.title}</h3>
                <motion.div
                  className="tags"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.2 + i * 0.08 } } }}
                >
                  {group.skills.map((s) => (
                    <motion.span
                      key={s}
                      className="tag tag-lg"
                      variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

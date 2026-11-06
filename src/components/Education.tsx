import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";
import { EDUCATION } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="section container">
      <SectionHeading index="04" label="Education" title="What I've studied." />
      <div className="edu-grid">
        {EDUCATION.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.1}>
            <div className="card edu-card">
              <div className="edu-top">
                <div className="edu-icon">
                  <GraduationCap size={20} />
                </div>
                <span className="period mono">{edu.period}</span>
              </div>
              <h3 className="card-title">{edu.degree}</h3>
              <p className="card-sub">{edu.institution}</p>

              <div className="gpa">
                <span className="gpa-value text-gradient">{edu.gpa}</span>
                <span className="gpa-label mono">GPA</span>
              </div>

              {edu.grades && (
                <div className="grades">
                  <p className="grades-title mono">Notable grades</p>
                  {edu.grades.map((g, j) => (
                    <div key={g.course} className="grade-row">
                      <div className="grade-meta">
                        <span>{g.course}</span>
                        <span className="mono">{g.grade}</span>
                      </div>
                      <div className="grade-bar">
                        <motion.div
                          className="grade-fill"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: g.grade / 100 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1.2, delay: 0.15 + j * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {edu.awards && (
                <ul className="awards">
                  {edu.awards.map((a) => (
                    <li key={a}>
                      <Sparkles size={15} />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

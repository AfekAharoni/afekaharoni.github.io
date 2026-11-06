import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Github, Trophy } from "lucide-react";
import { PROJECTS, PROFILE, type Project } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ALERTS = [
  { level: "high", title: "Bullying detected", meta: "Group chat · text analysis" },
  { level: "med", title: "Unsafe media flagged", meta: "Image · vision model" },
  { level: "ok", title: "Guidance sent to parent", meta: "Real-time · WebSocket" },
];

/** Decorative mock of ParAlert's live alert feed. */
function AlertFeed() {
  return (
    <div className="feed" aria-hidden>
      <div className="feed-head">
        <span className="live-dot" />
        <span className="mono">live alerts</span>
      </div>
      {ALERTS.map((a, i) => (
        <motion.div
          key={a.title}
          className={`feed-item feed-${a.level}`}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 + i * 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="feed-bar" />
          <div>
            <p className="feed-title">{a.title}</p>
            <p className="feed-meta mono">{a.meta}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/** Card with a cursor-tracking spotlight and a subtle 3D tilt. */
function ProjectCard({ project }: { project: Project }) {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const rx = useSpring(0, { stiffness: 160, damping: 18 });
  const ry = useSpring(0, { stiffness: 160, damping: 18 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(120, 140, 255, 0.13), transparent 45%)`;
  const border = useMotionTemplate`radial-gradient(360px circle at ${mx}px ${my}px, rgba(140, 160, 255, 0.55), transparent 50%)`;

  return (
    <motion.article
      className={`project card ${project.featured ? "project-featured" : ""}`}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        mx.set(x);
        my.set(y);
        const tilt = project.featured ? 2 : 4;
        ry.set(((x / r.width) - 0.5) * tilt);
        rx.set(-((y / r.height) - 0.5) * tilt);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
        mx.set(-400);
        my.set(-400);
      }}
    >
      <motion.div className="project-border" style={{ background: border }} />
      <motion.div className="project-spot" style={{ background: spotlight }} />

      <div className="project-inner">
        <div className="project-main">
          <div className="project-head">
            <div className="project-icon">
              <img src={project.icon} alt="" loading="lazy" />
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={17} />
              <ArrowUpRight size={15} className="project-link-arrow" />
            </a>
          </div>
  
          {project.badge && (
            <p className="badge">
              <Trophy size={13} /> {project.badge}
            </p>
          )}
  
          <h3 className="project-title">{project.title}</h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="card-body">{project.description}</p>
  
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
        {project.featured && <AlertFeed />}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section container">
      <SectionHeading
        index="03"
        label="Projects"
        title="Things I've built."
        subtitle="A selection of work across AI, security and systems."
      />
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.1} className={p.featured ? "span-2" : undefined}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
      <Reveal className="projects-more">
        <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="link-underline">
          More on GitHub <ArrowUpRight size={15} />
        </a>
      </Reveal>
    </section>
  );
}

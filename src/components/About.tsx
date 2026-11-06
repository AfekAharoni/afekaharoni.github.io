import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ABOUT, STATS, TERMINAL } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading index="01" label="About" title="Engineer by training, builder by nature." />
      <div className="about-grid">
        <div className="about-copy">
          {ABOUT.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="terminal">
              <div className="terminal-bar">
                <span />
                <span />
                <span />
                <p className="mono">afek@portfolio: ~</p>
              </div>
              <pre className="mono terminal-body">
                {TERMINAL.map(({ cmd, out }) => (
                  <span key={cmd}>
                    <span className="t-prompt">$</span> {cmd}
                    {"\n"}
                    <span className="t-out">{out}</span>
                    {"\n"}
                  </span>
                ))}
                <span className="t-prompt">$</span> <span className="caret caret-inline" />
              </pre>
            </div>
          </Reveal>
        </div>

        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.08}>
              <div className="stat card">
                <p className="stat-value text-gradient">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="stat-label">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

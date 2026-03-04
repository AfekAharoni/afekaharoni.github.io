import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";

const PROJECTS = [
  {
    title: "cloud-sync-engine",
    description: "A real-time file synchronization engine built with Rust. Handles conflict resolution and delta compression for efficient transfers.",
    tags: ["Rust", "WebSocket", "AWS S3"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "react-terminal-ui",
    description: "A customizable terminal emulator component for React applications. Supports themes, plugins, and command history.",
    tags: ["React", "TypeScript", "CSS Modules"],
    github: "https://github.com",
  },
  {
    title: "ml-pipeline-cli",
    description: "CLI tool to scaffold, train, and deploy machine learning pipelines. Integrates with popular ML frameworks.",
    tags: ["Python", "Docker", "MLflow"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "distributed-kv-store",
    description: "A distributed key-value store implementing the Raft consensus algorithm. Built for learning and experimentation.",
    tags: ["Go", "gRPC", "Raft"],
    github: "https://github.com",
  },
];

const SKILLS = [
  { title: "Languages", skills: ["TypeScript", "Rust", "Go", "Python", "SQL"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Vite"] },
  { title: "Backend", skills: ["Node.js", "PostgreSQL", "Redis", "GraphQL"] },
  { title: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Terraform"] },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:you@example.com", label: "Email" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between">
          <span className="font-display text-sm font-bold text-primary">~/dev</span>
          <div className="flex gap-6">
            {["projects", "skills", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="font-display text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                .{s}()
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="container pb-20 pt-24 md:pt-32">
        <p className="mb-3 font-display text-sm text-primary">Hi, my name is</p>
        <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
          Your Name<span className="text-gradient">.</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Full-stack developer who loves building performant systems and beautiful interfaces.
          Currently open to new opportunities.
        </p>
        <div className="flex gap-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-glow hover:text-primary hover:glow"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container pb-20">
        <h2 className="mb-2 font-display text-sm font-medium text-primary">// projects</h2>
        <p className="mb-8 text-2xl font-semibold text-foreground font-display">Things I've built</p>
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container pb-20">
        <h2 className="mb-2 font-display text-sm font-medium text-primary">// skills</h2>
        <p className="mb-8 text-2xl font-semibold text-foreground font-display">Tech I work with</p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-20">
        <h2 className="mb-2 font-display text-sm font-medium text-primary">// contact</h2>
        <p className="mb-4 text-2xl font-semibold text-foreground font-display">Let's connect</p>
        <p className="mb-6 max-w-md text-muted-foreground">
          I'm always interested in hearing about new projects and opportunities.
          Drop me a line anytime.
        </p>
        <a
          href="mailto:you@example.com"
          className="inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-6 py-3 font-display text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <Mail size={16} />
          Say hello
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <p className="font-display text-xs text-muted-foreground">
            Built with React & Tailwind CSS — <a href="https://github.com" className="text-primary hover:underline">view source</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

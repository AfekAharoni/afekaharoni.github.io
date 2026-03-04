import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

const ProjectCard = ({ title, description, tags, github, live }: ProjectCardProps) => (
  <div className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-glow hover:glow">
    <div className="mb-4 flex items-center justify-between">
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <div className="flex gap-3">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <Github size={18} />
          </a>
        )}
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-border bg-muted px-3 py-1 font-display text-xs text-muted-foreground">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;

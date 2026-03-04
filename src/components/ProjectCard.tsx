import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  icon?: string;
}

const ProjectCard = ({ title, description, tags, github, live, icon }: ProjectCardProps) => (
  <div className="apple-card p-8">
    <div className="mb-5 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {icon && (
          <img
            src={icon}
            alt={`${title} icon`}
            className="h-12 w-12 rounded-xl object-contain"
          />
        )}
        <h3 className="text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      </div>

      <div className="flex gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground"
          >
            <Github size={18} />
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:bg-secondary hover:text-foreground"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
    <p className="mb-5 text-[15px] leading-relaxed text-muted-foreground">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-secondary px-3.5 py-1.5 text-xs font-medium text-secondary-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;

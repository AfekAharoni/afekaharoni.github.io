interface SkillGroupProps {
  title: string;
  skills: string[];
}

const SkillGroup = ({ title, skills }: SkillGroupProps) => (
  <div>
    <h3 className="mb-3 font-display text-sm font-medium text-primary">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded border border-border bg-muted px-3 py-1.5 font-display text-xs text-secondary-foreground transition-colors hover:border-glow"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillGroup;

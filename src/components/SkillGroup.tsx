interface SkillGroupProps {
  title: string;
  skills: string[];
}

const SkillGroup = ({ title, skills }: SkillGroupProps) => (
  <div className="apple-card p-6">
    <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors duration-300 hover:bg-foreground hover:text-primary-foreground"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillGroup;

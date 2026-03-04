import { Github, Linkedin, Mail, FileText } from "lucide-react"; // הוסר Twitter
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";

const EXPERIENCE = [
  {
    company: "The Hebrew University of Jerusalem",
    role: "First-Year Students Mentor",
    period: "2025 – Present",
    description: "Mentoring and supporting a group of first-year Computer Science students at the Hebrew University. Provide academic guidance, study strategies, and valuable resources to help students adapt to university level learning. Organizing group sessions and one-on-one meetings to address academic and personal challenges, while fostering a positive, inclusive, and welcoming environment that encourages collaboration, motivation, and confidence in their first year of studies.",
  },
  {
    company: "Israel Defense Forces",
    role: "Instructor in a Classified Operational Unit (Air Force)",
    period: "2021 – 2024",
    description: "Trained combat soldiers and commanders in a classified operational unit of the Israeli Air Force, including operational qualification days, led instructor courses, and took part in selection processes for new recruits. Developed and improved training methodologies, presented to senior military personnel, and was awarded the Air Force Wing Excellence Certificate for exceptional performance. Completed over three months of reserve duty as an instructor and training developer in the unit's training center.",
  },
  {
    company: "Instagram Pages",
    role: "Social Media Manager",
    period: "2017 – 2021",
    description: "Managed and created content for multiple Instagram pages with a total following of over 500,000. Specialized in content strategy, audience engagement, community management, and performance optimization.",
  },
];

const EDUCATION = [
  {
    degree: "B.Sc. Student in Computer Science",
    institution: "The Hebrew University of Jerusalem",
    period: "2024 – Present",
    gpa: "91",
    grades: "Introduction to Computer Science (100), C/C++ (97), Data Structures (86), Linear Algebra 1 (96), Linear Algebra 2 (100), OOP (94)",
  },
  {
    degree: "High School Diploma in Software Engineering and Cyber Security Track",
    institution: "High School",
    period: "2018 – 2021",
    gpa: "117.63",
    awards: [
      "Excellence Award from the Ministry of Education",
      "Certificate of Appreciation – Outstanding Student Award signed by the Mayor and the Director General of the Ministry of Education",
    ],
  },
];

const VOLUNTEER = [
  {
    title: "HUJI Hackathon 2025",
    organization: "Hebrew University of Jerusalem",
    period: "2025",
    description: "Volunteered as part of the organizing team for “Next 100: Shaping AI’s Future”, a major 24-hour hackathon hosted by the School of Computer Science in celebration of the university’s 100th anniversary. Assisted with event logistics, setup, and coordination, contributing to the smooth execution of a large scale, high-profile event.",
  },
];

const PROJECTS = [
  {
    title: "Text Analyzer",
    icon: "/textanalyzer.png",
    description: "Developed a Text Analyzer in Python that clusters sentences based on shared words and finds fixed-length paths in connection graphs. Focused on graph algorithms, optimization, and performance analysis.",
    tags: ["Python", "Data Analysis", "Algorithms", "Data Structures"],
    github: "https://github.com/AfekAharoni/TextAnalyzer",
  },
  {
    title: "Secure Share",
    icon: "/secureshare.png",
    description: "SecureShare is a decentralized, secure file-sharing application ensuring privacy and control over shared data. Built with end-to-end encryption, it protects data during transfer and storage, granting access only to authorized users. Developed as my high school final project, SecureShare was primarily created through self-learning to meet the need for privacy-focused file-sharing solutions. It combines high-level data protection with a simple, intuitive user experience.",
    tags: ["Python", "Databases", "MongoDB", "Cryptography"],
    github: "https://github.com/AfekAharoni/SecureShare",
  },
];

const SKILLS = [
  { title: "Coding", skills: ["Java", "Python", "C", "C++"] },
  { title: "VCS", skills: ["Git"] }
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/AfekAharoni", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/afek-aharoni", label: "LinkedIn" },
  { icon: Mail, href: "mailto:afekaharoni@gmail.com", label: "Email" },
  { icon: FileText, href: "https://drive.google.com/file/d/1-25hvtfAAQWrvzsV65W8W4n4PS0uoOE3/view?usp=sharing", label: "Resume" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between">
          <span className="font-display text-sm font-bold text-primary">~/Afek Aharoni's Portfolio</span>
          <div className="flex gap-6">
            {["experience", "education", "volunteer", "projects", "skills", "contact"].map((s) => (
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
  {/* Changed items-end to items-center and increased gap */}
  <div className="mb-8 flex items-center gap-6"> 
    <img 
      src="/favicon.png" 
      alt="Favicon Icon" 
      /* Added mt-4 to push it down a bit further */
      className="mt-4 h-32 w-32 animate-jump object-contain md:h-40 md:w-40" 
    />
    <p className="font-display text-3xl font-bold tracking-tight text-primary md:text-5xl">
      Hi, my name is
    </p>
  </div>
<h1 className="mb-4 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
          Afek Aharoni<span className="text-gradient">.</span>
        </h1>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Computer Science Student
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
{/* Experience */}
      <section id="experience" className="container pb-20">
        <h2 className="mb-4 font-display text-lg font-bold tracking-widest text-primary md:text-xl uppercase">
          // experience
        </h2>
        <div className="space-y-10">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="relative border-l border-border pl-6 transition-all hover:border-primary">
              <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary" />
              <p className="font-display text-sm font-bold text-primary">{exp.period}</p>
              <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
              <p className="mb-2 text-sm font-medium text-muted-foreground">{exp.company}</p>
              <p className="max-w-2xl text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
{/* Education */}
      <section id="education" className="container pb-20">
        <h2 className="mb-4 font-display text-lg font-bold tracking-widest text-primary md:text-xl uppercase">
          // education
        </h2>
        <div className="space-y-10">
          {EDUCATION.map((edu) => (
            <div key={edu.degree} className="relative border-l border-border pl-6 transition-all hover:border-primary">
              <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary" />
              <p className="font-display text-sm font-bold text-primary">{edu.period}</p>
              <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
              <p className="mb-2 text-sm font-medium text-muted-foreground">{edu.institution} | GPA {edu.gpa}</p>
              {edu.grades && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-foreground">Notable Grades:</span> {edu.grades}
                </p>
              )}
              {edu.awards && (
                <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                  {edu.awards.map((award, i) => <li key={i}>{award}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="container pb-20">
        <h2 className="mb-4 font-display text-lg font-bold tracking-widest text-primary md:text-xl uppercase">
          // volunteer
        </h2>
        <div className="space-y-10">
          {VOLUNTEER.map((vol) => (
            <div key={vol.title} className="relative border-l border-border pl-6 transition-all hover:border-primary">
              <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary" />
              <p className="font-display text-sm font-bold text-primary">{vol.period}</p>
              <h3 className="text-xl font-bold text-foreground">{vol.title}</h3>
              <p className="mb-2 text-sm font-medium text-muted-foreground">{vol.organization}</p>
              <p className="max-w-2xl text-muted-foreground">{vol.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Projects */}
      <section id="projects" className="container pb-20">
<h2 className="mb-4 font-display text-lg font-bold tracking-widest text-primary md:text-xl uppercase">
  // projects
</h2>       
        <div className="grid gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container pb-20">
<h2 className="mb-4 font-display text-lg font-bold tracking-widest text-primary md:text-xl uppercase">
  // skills
</h2>        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group) => (
            <SkillGroup key={group.title} {...group} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-20">
<h2 className="mb-4 font-display text-lg font-bold tracking-widest text-primary md:text-xl uppercase">
  // contact
</h2>        
        <p className="mb-6 max-w-md text-muted-foreground">
          I'm always interested in hearing about new projects and opportunities.
          Drop me a line anytime.
        </p>
        <a
          href="mailto:afekaharoni@gmail.com"
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
            Built with React & Tailwind CSS 
          </p>
          <p className="font-display text-xs text-muted-foreground">
             ©2026 Afek Aharoni
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
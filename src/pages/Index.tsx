import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import SkillGroup from "@/components/SkillGroup";
import FadeIn from "@/components/FadeIn";

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
    description: 'Volunteered as part of the organizing team for "Next 100: Shaping AI\'s Future", a major 24-hour hackathon hosted by the School of Computer Science in celebration of the university\'s 100th anniversary. Assisted with event logistics, setup, and coordination, contributing to the smooth execution of a large scale, high-profile event.',
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
    description: "SecureShare is a decentralized, secure file-sharing application ensuring privacy and control over shared data. Built with end-to-end encryption, it protects data during transfer and storage, granting access only to authorized users.",
    tags: ["Python", "Databases", "MongoDB", "Cryptography"],
    github: "https://github.com/AfekAharoni/SecureShare",
  },
];

const SKILLS = [
  { title: "Coding", skills: ["Java", "Python", "C", "C++"] },
  { title: "VCS", skills: ["Git"] },
];

const SOCIALS = [
  { icon: Github, href: "https://github.com/AfekAharoni", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/afek-aharoni", label: "LinkedIn" },
  { icon: Mail, href: "mailto:afekaharoni@gmail.com", label: "Email" },
  { icon: FileText, href: "https://drive.google.com/file/d/1-25hvtfAAQWrvzsV65W8W4n4PS0uoOE3/view?usp=sharing", label: "Resume" },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
    {children}
  </h2>
);

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["experience", "education", "volunteer", "projects", "skills", "contact"];

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/60 glass">
        <div className="container flex h-12 items-center justify-between">
          <a href="#" className="text-sm font-semibold text-foreground">
            Afek Aharoni
          </a>
          {/* Desktop nav */}
          <div className="hidden gap-8 md:flex">
            {navLinks.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="text-xs font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground capitalize"
              >
                {s}
              </a>
            ))}
          </div>
          {/* Mobile burger */}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border/60 glass px-6 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground capitalize"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="container flex flex-col items-center justify-center pb-28 pt-32 text-center md:pt-44">
        <FadeIn>
          <img
            src="/favicon.png"
            alt="Afek Aharoni"
            className="mx-auto mb-8 h-28 w-28 rounded-full object-contain md:h-36 md:w-36"
          />
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
            <span className="text-gradient">Afek Aharoni</span>
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mb-10 max-w-lg text-lg text-muted-foreground md:text-xl">
            Computer Science Student
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all duration-300 hover:bg-foreground hover:text-primary-foreground"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Experience */}
      <section id="experience" className="container pb-28">
        <FadeIn>
          <SectionTitle>Experience</SectionTitle>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Where I've worked.
          </h2>
        </FadeIn>
        <div className="space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.1}>
              <div className="apple-card p-8">
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-medium text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="mb-1 text-xl font-semibold tracking-tight text-foreground">{exp.role}</h3>
                <p className="mb-3 text-sm font-medium text-muted-foreground">{exp.company}</p>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{exp.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="container pb-28">
        <FadeIn>
          <SectionTitle>Education</SectionTitle>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I've studied.
          </h2>
        </FadeIn>
        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.1}>
              <div className="apple-card p-8">
                <span className="text-xs font-medium text-muted-foreground">{edu.period}</span>
                <h3 className="mb-1 text-xl font-semibold tracking-tight text-foreground">{edu.degree}</h3>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  {edu.institution} · GPA {edu.gpa}
                </p>
                {edu.grades && (
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">Notable Grades: </span>
                    {edu.grades}
                  </p>
                )}
                {edu.awards && (
                  <ul className="mt-3 space-y-1">
                    {edu.awards.map((award, j) => (
                      <li key={j} className="text-sm text-muted-foreground">
                        ✦ {award}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="container pb-28">
        <FadeIn>
          <SectionTitle>Volunteer</SectionTitle>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Giving back.
          </h2>
        </FadeIn>
        <div className="space-y-8">
          {VOLUNTEER.map((vol, i) => (
            <FadeIn key={vol.title} delay={i * 0.1}>
              <div className="apple-card p-8">
                <span className="text-xs font-medium text-muted-foreground">{vol.period}</span>
                <h3 className="mb-1 text-xl font-semibold tracking-tight text-foreground">{vol.title}</h3>
                <p className="mb-3 text-sm font-medium text-muted-foreground">{vol.organization}</p>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{vol.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container pb-28">
        <FadeIn>
          <SectionTitle>Projects</SectionTitle>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What I've built.
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container pb-28">
        <FadeIn>
          <SectionTitle>Skills</SectionTitle>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            My toolkit.
          </h2>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, i) => (
            <FadeIn key={group.title} delay={i * 0.1}>
              <SkillGroup {...group} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container pb-28">
        <FadeIn>
          <div className="mx-auto max-w-xl text-center">
            <SectionTitle>Contact</SectionTitle>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get in touch.
            </h2>
            <p className="mb-8 text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <a
              href="mailto:afekaharoni@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-85"
            >
              <Mail size={16} />
              Say hello
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-10">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            ©2026 Afek Aharoni
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

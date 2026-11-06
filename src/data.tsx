import type { ReactNode } from "react";

export const PROFILE = {
  name: "Afek Aharoni",
  email: "afekaharoni@gmail.com",
  location: "Rishon LeZion, Israel",
  photo: "/profile.webp",
  roles: ["Software Engineer @ Dell", "Computer Science Student", "Systems Builder", "Full-Stack Developer"],
  github: "https://github.com/AfekAharoni",
  linkedin: "https://linkedin.com/in/afek-aharoni",
  resume: "https://drive.google.com/file/d/1-25hvtfAAQWrvzsV65W8W4n4PS0uoOE3/view?usp=sharing",
};

export const ABOUT = [
  "I'm a Software Engineer at Dell Technologies, where I work on Lightning, Dell's parallel file system for large-scale AI workloads, and a Computer Science student at the Hebrew University of Jerusalem.",
  "I enjoy turning complex problems into clean, reliable systems, from high-performance storage to AI-powered applications and security tools. Before tech, I spent three years as an instructor in a classified Air Force unit, where I learned to lead, teach and perform under pressure.",
];

export const STATS = [
  { value: 91, suffix: "", label: "B.Sc. GPA" },
  { value: 4, prefix: "Top ", suffix: "", label: "HUJI Hackathon 2026" },
  { value: 500, suffix: "K+", label: "Audience managed" },
  { value: 3, suffix: "+ yrs", label: "Instruction & leadership" },
];

export const TERMINAL = [
  { cmd: "whoami", out: "software engineer @ dell · CS student @ HUJI" },
  { cmd: "cat interests.txt", out: "distributed systems · storage · AI infrastructure · security" },
];

export const EXPERIENCE = [
  {
    company: "Dell Technologies",
    logo: "/logos/dell.svg",
    role: "Software Engineer - Lightning File System",
    period: "Oct 2026 - Present",
    description:
      "Developing Dell Lightning, a software-defined parallel file system built for extreme-scale AI training and inference. Working on a high-performance distributed storage platform designed to feed data to large GPU clusters at very high throughput, with a focus on performance, scalability and reliability.",
    tags: ["Parallel File Systems", "Distributed Systems", "Storage", "AI Infrastructure"],
  },
  {
    company: "The Hebrew University of Jerusalem",
    logo: "/logos/huji.svg",
    role: "First-Year Students Mentor",
    period: "2025 - Present",
    description:
      "Mentoring and supporting a group of first-year Computer Science students. Providing academic guidance, study strategies and resources to help students adapt to university-level learning, through group sessions and one-on-one meetings that foster a collaborative, inclusive and motivating environment.",
    tags: ["Mentorship", "Leadership", "Communication"],
  },
  {
    company: "Israel Defense Forces",
    logo: "/logos/iaf.png",
    role: "Instructor, Classified Operational Unit (Air Force)",
    period: "2021 - 2024",
    description:
      "Trained combat soldiers and commanders, including operational qualification days. Led instructor courses, took part in selection processes for new recruits, developed and improved training methodologies and presented to senior military personnel. Completed 3+ months of reserve duty as an instructor and training developer.",
    highlight: "Awarded the Air Force Wing Excellence Certificate",
    tags: ["Training Design", "Leadership", "Public Speaking"],
  },
  {
    company: "Instagram Pages",
    logo: "/logos/instagram.svg",
    role: "Social Media Manager",
    period: "2017 - 2021",
    description:
      "Managed and created content for multiple Instagram pages with a combined following of 500,000+. Specialized in content strategy, audience engagement, community management and performance optimization.",
    tags: ["Growth", "Analytics", "Content Strategy"],
  },
];

export type Project = {
  title: string;
  icon: string;
  subtitle: string;
  description: ReactNode;
  tags: string[];
  github: string;
  badge?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "ParAlert",
    icon: "/paralert.png",
    subtitle: "AI-powered child-safety alert system",
    badge: "Top 4 Finalist · HUJI Hackathon 2026",
    featured: true,
    description: (
      <>
        A real-time system that detects harmful situations in children's WhatsApp conversations, including bullying,
        threats, unsafe media, deepfakes and social exclusion. It analyzes text, images and video, classifies event
        severity, identifies the child's role and gives parents contextual, practical guidance. Built a React
        dashboard, a FastAPI backend, a WebSocket-based alert flow, ML detection models and a WhatsApp proof-of-concept
        bridge.
      </>
    ),
    tags: ["HuggingFace Transformers", "FastAPI", "WebSockets", "React", "SQLite", "REST APIs"],
    github: "https://github.com/yonatan-cs/ParAlert",
  },
  {
    title: "PhishEye",
    icon: "/phisheye.png",
    subtitle: "Malicious email scorer for Gmail",
    description:
      "A Gmail add-on that detects phishing threats by automatically scoring links and attachments. Evaluates sender reputation and email authentication to generate a comprehensive risk assessment.",
    tags: ["Python", "FastAPI", "Apps Script", "ngrok", "URL Analysis"],
    github: "https://github.com/AfekAharoni/PhishEye-Malicious-Email-Scorer",
  },
  {
    title: "SecureShare",
    icon: "/secureshare.png",
    subtitle: "Decentralized encrypted file sharing",
    description:
      "A decentralized file-sharing application with end-to-end encryption, protecting data in transit and at rest and granting access only to authorized users.",
    tags: ["Python", "MongoDB", "Encryption", "Databases"],
    github: "https://github.com/AfekAharoni/SecureShare",
  },
  {
    title: "Text Analyzer",
    icon: "/textanalyzer.png",
    subtitle: "Graph-based sentence clustering",
    description:
      "Clusters sentences by shared words and finds fixed-length paths in connection graphs, with a focus on graph algorithms, optimization and performance analysis.",
    tags: ["Python", "Algorithms", "Data Structures"],
    github: "https://github.com/AfekAharoni/TextAnalyzer",
  },
];

export const EDUCATION = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "The Hebrew University of Jerusalem",
    period: "2024 - Present",
    gpa: "91",
    grades: [
      { course: "Introduction to CS", grade: 100 },
      { course: "Linear Algebra 2", grade: 100 },
      { course: "Databases", grade: 99 },
      { course: "C / C++", grade: 97 },
      { course: "Linear Algebra 1", grade: 96 },
      { course: "Object-Oriented Programming", grade: 94 },
      { course: "Computational Models, Computability & Complexity", grade: 94 },
      { course: "Operating Systems", grade: 91 },
      { course: "From NAND to Tetris", grade: 89 },
      { course: "Data Structures", grade: 86 },
    ],
  },
  {
    degree: "High School Diploma, Software Engineering & Cyber Security",
    institution: "High School",
    period: "2018 - 2021",
    gpa: "117.63",
    awards: [
      "Excellence Award from the Ministry of Education",
      "Outstanding Student Award, signed by the Mayor and the Director General of the Ministry of Education",
    ],
  },
];

export const SKILLS = [
  { title: "Languages", icon: "code", skills: ["Java", "Python", "C", "C++", "SQL"] },
  { title: "Systems", icon: "drive", skills: ["Operating Systems", "File Systems", "Distributed Systems", "Git"] },
  { title: "Backend & Web", icon: "server", skills: ["FastAPI", "REST APIs", "WebSockets", "React"] },
  { title: "Data & AI", icon: "brain", skills: ["HuggingFace", "MongoDB", "SQLite", "Data Analysis"] },
] as const;

export const VOLUNTEER = [
  {
    title: "HUJI Hackathon 2025, Organizing Team",
    organization: "School of Computer Science, Hebrew University",
    period: "2025",
    description:
      "Volunteered on the organizing team of \"Next 100: Shaping AI's Future\", a 24-hour hackathon celebrating the university's 100th anniversary. Assisted with logistics, setup and coordination for a large-scale, high-profile event.",
  },
];

export const NAV = ["about", "experience", "projects", "education", "skills", "contact"];

import card from "../app/assets/benefits/card-1.svg";
import card2 from "../app/assets/benefits/card-2.svg";
import card3 from "@/app/assets/benefits/card-3.svg";
import card4 from "@/app/assets/benefits/card-4.svg";
import card5 from "@/app/assets/benefits/card-5.svg";
import card6 from "@/app/assets/benefits/card-6.svg";

interface Project {
  id: string;
  name: string;
  description: string;
  tag: string[];
  card: string;
  url: string;
}
interface IQualification {
  id: string;
  name: string;
  title: string;
  description: string;
  since: string;
}

export const qualification:IQualification[] = [
  {
    id: "school-spiral-children-academy",
    since: "2019",
    name: "Spiral Children Academy",
    title: "School",
    description: "Computer Science",
  },
  {
    id: "college-siraj-ud-dulla",
    title: "Collage",
    description: "Commerce",
    name: "Siraj-Ud-Dulla government",
    since: "2021 To 2022",
  },
  {
    id: "GIAIC",
    title: "Course",
    description: "GenAI, Web 3.0, and Metaverse",
    name: "GIAIC",
    since: "2024 To present",
  },
];

export const gitProjects: Project[] = [
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, projects, and experience.",
    tag: ["Side Project", "Next.js", "portfolio"],
    card: card.src,
    url: "https://github.com/Saeef1/Portfolio",
  },
  {
    name: "E-commerce responsive website",
    id: "ecommerce-responsive-website",
    description:
      "A responsive e-commerce website built with Next.js, featuring product listings.",
    tag: ["Side Project", "Next.js", "E-commerce", "Responsive Design"],
    card: card2.src,
    url: "https://github.com/Saeef1/Assignment-4-responsive-eCommerce-",
  },
  {
    id: "ecommerce-platform",
    name: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js and Node.js, Sanity API, Clerk API, featuring product listings and shopping cart.",
    tag: [
      "Side Project",
      "Next.js",
      "E-commerce",
      "Hackathon",
      "Sanity API",
      "Clerk API",
    ],
    card: card3.src,
    url: "https://github.com/Saeef1/Hackathon-2",
  },
  {
    id: "45-typescript-assignments",
    name: "45 Typescript Assignments",
    description:
      "A collection of 45 TypeScript assignments covering various concepts and applications.",
    tag: ["TypeScript", "Assignments", "Learning"],
    card: card4.src,
    url: "https://github.com/Saeef1/45-Typescript-Assignment",
  },
  {
    id: "secure-data-encryption",
    name: "Scure Data Encryption",
    description:
      "A project focused on secure data encryption techniques using modern cryptographic algorithms.",
    tag: [
      "Security",
      "Encryption",
      "Streamlit",
      "Data Protection",
      "python",
      "Assignment",
    ],
    card: card5.src,
    url: "https://growth-mind-hfriv.streamlit.app/",
  },
  {
    id: "mood-tracker",
    name: "Mood tracker",
    description:
      "A mood tracker application that allows users to log and analyze their moods over time.",
    tag: ["Python", "Mood Tracker", "Streamlit", "Mental Health", "Assignment"],
    card: card6.src,
    url: "https://growth-mind-olsyuqzynyton8uze.streamlit.app/",
  },
  {
    name: "Password Generator",
    id: "password-generator",
    description:
      "A simple password generator tool that creates strong, random passwords for users.",
    tag: [
      "Python",
      "Password Generator",
      "Streamlit",
      "Security",
      "Assignment",
    ],
    card: card.src,
    url: "https://growth-mind-gxqn5itz4xv3ambsrhzxiw.streamlit.app/",
  },
  {
    name: "Unit Converter",
    id: "unit-converter",
    description:
      "A unit converter application that allows users to convert between different measurement units.",
    tag: ["Python", "Unit Converter", "Streamlit", "Utility", "Assignment"],
    card: card2.src,
    url: "https://growth-mind-jpvn9tkxjn73zqc8pseqtk.streamlit.app/",
  },
];

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  betteryou,
  crm,
  bujji,
  caluculator,
  fakecurrency,
  languageengine,
  medicalinventory,
  personalportfolio,
  smartassistbanner,
} from "../assets";

export const name = "Goutham";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id:"skills",
  //   title:"Skills"
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: "web",
  },
  {
    title: "Mobile App Developer",
    icon: "mobile",
  },
  {
    title: "Tutor",
    icon: "backend",
  },
  {
    title: "Photography",
    icon: "creator",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Brainovision Solutions Pvt Ltd",
    icon: "brainovision",
    iconBg: "#383E56",
    date: "September 2021 - October 2021",
    points: [],
  },
  {
    title: "SDE - 1",
    company_name: "Ennea Solutions Pvt Ltd",
    icon: "ennea",
    iconBg: "#E6DEDD",
    date: "August 2022 - November 2022",
    points: [],
  },
  {
    title: "Senior Associate Application Development",
    company_name: "AT&T",
    icon: "at&t",
    iconBg: "#383E56",
    date: "Feb 2023 - Aug 2024",
    points: [],
  },
];

const projects = [
  {
    name: "Better You",
    description:
      "BetterYou—an AI-driven solution designed to personalize your journey to a healthier, more balanced life. BetterYou offers tailored meal and exercise plans, crafted to align with your unique needs using AI.",
    tags: [
      {
        name: "vt-hacks-12",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "propel-auth",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "llama",
        color: "blue-text-gradient",
      },
      {
        name: "microsoft-azure",
        color: "green-text-gradient",
      },
      {
        name: "defang",
        color: "pink-text-gradient",
      },
    ],
    image: betteryou,
    source_code_link: "https://github.com/kallagoutham/vthacks12.git",
  },

  {
    name: "CRM Application",
    description:
      "A Web based application enhances relationships among managers, customers, and sales representatives which manages and streamline customer interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "spring-boot",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: crm,
    source_code_link: "https://github.com/kallagoutham/CRM-Application",
  },
  {
    name: "MediStock Analyzer",
    description:
      "An app that analyzes medicine inventory, paginates data, and aggregates reports for multiple batches. It allows checking inventory information for individual batches and accepts only .csv/.xlsx files.",
    tags: [
      {
        name: "ennea-solutions",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: medicalinventory,
    source_code_link: "https://github.com/kallagoutham/MediStock-Analyzer",
  },
  {
    name: "Fake Currency Detection System",
    description:
      "This system uses deep learning with convolutional neural networks to help users identify fake Indian currency easily through a desktop or Android application, addressing the growing issue of counterfeit notes.",
    tags: [
      {
        name: "major-project",
        color: "pink-text-gradient",
      },
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
      {
        name: "dart",
        color: "blue-text-gradient",
      },

    ],
    image: fakecurrency, source_code_link:"https://github.com/kallagoutham/FakeCurrencyDetectionSystem",
  },
  {
    name: "Language Engine",
    description:
      "An API-based language engine that accepts code in C++, C, Python, and Java, processes it, and provides output.",
    tags: [
      {
        name: "att-internship",
        color: "pink-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "nginx",
        color: "blue-text-gradient",
      },
      {
        name: "docker-swarm",
        color: "green-text-gradient",
      },

    ],
    image: languageengine, source_code_link:"https://github.com/kallagoutham/Compiler-API",
  },
  {
    name: "Bujji",
    description:
      "Bujji is a little discord bot that lets people organise group buys more easily. We're making this because arranging and managing group buys while also keeping track of things is just a littlet too annoying.",
    tags: [
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "bs4",
        color: "blue-text-gradient",
      },
      {
        name: "playwright",
        color: "green-text-gradient",
      },
    ],
    image: bujji, source_code_link:"https://github.com/kallagoutham/Bujji-HLJ",
  },
  {
    name: "Smart Assist",
    description:
      "A responsive web application helps users to find the better service, It provides the best service providers in the user's locality.",
    tags: [
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "ionicons",
        color: "green-text-gradient",
      },
      {
        name: "spring-boot",
        color: "pink-text-gradient",
      },
    ],
    image: smartassistbanner, 
    source_code_link:"https://github.com/kallagoutham/SmartAssist",
  },
  {
    name: "My Personal Portfolio",
    description:
      "My Personal Website is a website that showcases my work, projects, and experiences. It is a responsive website.",
    tags: [
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "ionicons",
        color: "green-text-gradient",
      },
    ],
    image: personalportfolio, 
    source_code_link:"https://github.com/kallagoutham/goutham-kalla-personal-website",
  },
  {
    name: "Calculator",
    description:
      "A web application that performs basic arithmetic caluculations.",
    tags: [
      {
        name: "beginner",
        color: "green-text-gradient",
      },
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: caluculator, 
    source_code_link:"https://github.com/kallagoutham/Caluculator",
  },
];

export { services, technologies, experiences, projects };

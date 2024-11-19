import {
  // Icons for navigation/general
  icon1,
  icon2,
  icon3,
  mobile,
  backend,
  web,

  // Frontend technologies
  html,
  css,
  javascript,
  typescript,
  reactjs,
  nextjs,
  tailwind,

  // Backend technologies
  java,
  springboot,
  hibernate,
  jdbc,
  servlet,
  python,
  fastapi,

  // Databases
  oracle,
  mysql,
  postgres,

  // DevOps & Tools
  git,
  docker,
  aws,

  // Company logos
  technoforte_company,
  jspider_company,

  // Project images
  startup_project,
  lms_project,
  todo_project,
} from "../assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  // Frontend
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },

  // Backend
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: springboot,
  },
  {
    name: "Hibernate",
    icon: hibernate,
  },
  {
    name: "JDBC",
    icon: jdbc,
  },
  {
    name: "Servlet",
    icon: servlet,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "FastAPI",
    icon: fastapi,
  },

  // Databases
  {
    name: "Oracle DB",
    icon: oracle,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },

  // DevOps & Tools
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
];
const experiences = [
  {
    title: "Junior Software Engineer",
    company_name: "Technoforte Software Pvt. Ltd.",
    icon: technoforte_company,
    iconBg: "#383E56",
    date: "June 2024 – Present • Bengaluru, IN • Full-time",
    points: [
      "Engineered backend services using FastAPI, achieving 30% improved data processing efficiency.",
      "Developed and optimized React.js components, reducing page load time by 25%.",
      "Implemented secure authentication system serving 10,000+ daily users.",
    ],
  },
  {
    title: "Java Developer Trainee",
    company_name: "JSpiders - Training & Development Center",
    icon: jspider_company,
    iconBg: "#E6DEDD",
    date: "Oct 2023 – Jun 2024 • Bhubaneswar, IN • Full-time",
    points: [
      "Built web applications using Spring Boot, Hibernate, and MySQL, implementing MVC architecture patterns.",
      "Developed dynamic web pages using JSP, Servlets, and JDBC for database connectivity.",
      "Implemented REST APIs with Spring Boot and integrated them with frontend applications.",
    ],
  },
];

const projects = [
  {
    name: "StartupSync",
    description: `StartupSync is a modern platform built with Next.js 15 and TypeScript, designed 
    for entrepreneurs to showcase their startup ideas through virtual pitch competitions. The platform 
    features secure authentication powered by Auth.js with GitHub integration, ensuring trusted user 
    access. Content management is streamlined using Sanity.io as a headless CMS, allowing for flexible 
    content updates and scalable data management. Error tracking and monitoring are implemented using 
    Sentry, ensuring robust error reporting and optimal user experience. The application showcases a 
    sleek, minimalistic design built with Tailwind CSS and shadcn UI components, delivering a 
    responsive and intuitive interface for users to browse, submit, and engage with startup pitches.`,
    tags: [
      { name: "NextJs", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Sanity", color: "orange-text-gradient" },
      { name: "Sentry", color: "pink-text-gradient" },
      { name: "shadcn ui", color: "purple-text-gradient" },
      { name: "Tailwind CSS", color: "purple-text-gradient" },
      { name: "Auth.js", color: "purple-text-gradient" },
    ],
    image: startup_project,
    source_link: "https://github.com/Q-Niranjan/startupSync",
    website_link: "https://startup-sync-phi.vercel.app/",
  },
  {
    name: "E-LMS",
    description: `A comprehensive Learning Management System built with the MERN stack (MongoDB, Express.js, 
    React, Node.js), designed for seamless educational experiences. The platform features secure user 
    authentication with role-based access control, ensuring protected content delivery. Backend operations 
    utilize RESTful APIs with Node.js and Express.js for efficient course management. MongoDB provides 
    flexible data storage, while React.js with Redux powers the frontend. The application delivers an 
    intuitive interface for course creation, interactive learning, and real-time progress tracking, 
    enhancing the educational experience.`,
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "purple-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: lms_project,
    source_link: "https://github.com/Q-Niranjan/GIET-LMS.git",
    website_link: "https://github.com/Q-Niranjan/GIET-LMS.git",
  },
  {
    name: "TodoApp ",
    description: `Developed a comprehensive Todo application backend using FastAPI framework with robust user authentication and role-based access control.
     Implemented secure JWT token-based authentication, PostgreSQL database integration, and RESTful APIs for CRUD operations. 
     Incorporated Pydantic models for data validation and schema enforcement. Features include user management, task categorization, and deadline tracking.
      Enhanced API documentation using Swagger UI for clear endpoint visualization and testing.
     Ensured API reliability through extensive Postman testing and error handling.`,
    tags: [
      {
        name: "FastAPI",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "JWT",
        color: "orange-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: todo_project,
    source_link:
      "https://github.com/Q-Niranjan/TodoApp-Using-FastAPI-PostgreSQL.git",
    website_link:
      "https://github.com/Q-Niranjan/TodoApp-Using-FastAPI-PostgreSQL.git",
  },
];

const footerIcons = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/niranjan-kumar-144243223",
    icon: icon1,
  },
  {
    name: "GitHub",
    link: "https://github.com/Q-Niranjan",
    icon: icon2,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nethore_niranjan",
    icon: icon3,
  },
];

const toRotateText = [
  "Simplicity is the ultimate sophistication.",
  "Clean code always looks like it was written by someone who cares.",
  "In nature, nothing is perfect and everything is perfect.",
  "Nature does not hurry, yet everything is accomplished.",
  "Make it work, make it right, make it fast.",
  "Code is like humor. When you have to explain it, it's bad.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The best error message is the one that never shows up.",
];

const resumelink = "https://drive.google.com/file/d/1X1Yku-WCunmuKM7SO-pR9ElrWrKCd0qe"
export {
  navLinks,
  services,
  technologies,
  experiences,
  projects,
  toRotateText,
  footerIcons,
  resumelink
};

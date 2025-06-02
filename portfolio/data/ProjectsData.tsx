// projectsData.tsx
export interface Project {
  title: string;
  description: string;
  url?: string;
  categories: string[];
  longDescription?: string; // Optional field for detailed description
  image?: string; // Optional field for project image URL
  date?: string; // Optional field for project completion date
  technologies?: string[]; // Optional field for technologies used
  videoUrl?: string; // Optional field for project video URL
  id?: number; // Optional field for unique project ID
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Portfolio Website",
    description: "Developed a personal portfolio website to showcase my skills and projects, utilizing React, TypeScript, and Tailwind CSS for a modern, responsive design.",
    url: "https://patrickkabanda.com",
    categories: ["Frontend"],
    longDescription: "This portfolio website serves as a showcase of my skills and projects, built with React, TypeScript, and Tailwind CSS. It features a modern, responsive design that highlights my work and allows potential clients or employers to view my capabilities.",
    image: "/images/Profile.jpg", // Example image URL
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 1,
    title: "Netpipo",
    description: "Collaborated as a full-stack developer on Netpipo, a web application built to streamline user interactions and deliver a robust, scalable experience using modern front-end and back-end technologies.",
    url: "https://www.netpipo.com",
    categories: ["Backend", "Frontend"],
    longDescription: "Netpipo is a web application designed to enhance user interactions and provide a robust, scalable experience. As a full-stack developer, I contributed to both the front-end and back-end development, ensuring seamless integration and performance across the platform.",
    image: "/images/Profile.jpg", // Example image URL
    technologies: ["Flask", "React", "JavaScript", "SCSS", "PostgreSQL"],
    },
  {
    id: 2,
    title: "Learnpipe",
    description: "Single-handedly developed Learnpipe, an enrollment and training management system for educational institutions, enhancing administrative efficiency with a user-friendly interface and streamlined workflows.",
    url: "https://education.accountants.co.rw",
    categories: ["Backend", "Frontend"],
    image: "/images/Profile.jpg",
  },
  {
    id: 3,
    title: "DreamJob",
    description: "Built the front-end of DreamJob, a job posting and application platform, using React to create a responsive and intuitive user interface for job seekers and employers.",
    longDescription: "Developed the front-end of DreamJob, a job posting and application platform, using React to create a responsive and intuitive user interface for job seekers and employers. The platform allows users to easily post jobs, search for opportunities, and manage applications.",
    categories: ["Frontend"],
    technologies: ["React", "SCSS"],
    image: "/images/Profile.jpg",

  },
  {
    id: 4,
    title: "Goalifai (In Development)",
    description: "Currently developing Goalifai, an expense tracking app featuring AI-powered financial advice agents to help users manage budgets and achieve financial goals.",
    categories: ["Backend", "Frontend"],
    longDescription: "Goalifai is an expense tracking app currently in development, designed to help users manage their finances effectively. The app features AI-powered financial advice agents that provide personalized recommendations based on user spending patterns and financial goals. It aims to simplify budgeting and enhance financial literacy.",
    image: "/images/Profile.jpg",
    
  },
];


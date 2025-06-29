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
  images?: string[]; // Optional field for multiple images
}

export const projects: Project[] = [
  {
    id: 0,
    title: "PORTFOLIO WEBSITE",
    description: "Developed a personal portfolio website to showcase my skills and projects, utilizing React, TypeScript, and Tailwind CSS for a modern, responsive design.",
    url: "https://patrickkabanda.com",
    categories: ["Frontend"],
    longDescription: "This portfolio website serves as a showcase of my skills and projects, built with React, TypeScript, and Tailwind CSS. It features a modern, responsive design that highlights my work and allows potential clients or employers to view my capabilities.",
    image: "/images/Profile.jpg", // Example image URL
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 1,
    title: "NETPIPO (HUMAN RESOURCE MANAGEMENT & PAYROLL SYSTEM)",
    description: "Collaborated as a full-stack developer on Netpipo, a web application built to streamline user interactions and deliver a robust, scalable experience using modern front-end and back-end technologies.",
    url: "https://www.netpipo.com",
    categories: ["Backend", "Frontend"],
    longDescription: "Netpipo is a web application designed to enhance user interactions and provide a robust, scalable experience. As a full-stack developer, I contributed to both the front-end and back-end development, ensuring seamless integration and performance across the platform.",
    images: [
      "/images/netpipo_1.png",
      "/images/netpipo_2.png",
      "/images/netpipo_3.png",
      "/images/netpipo_4.png",
    ],
    technologies: ["Flask", "React", "JavaScript", "SCSS", "PostgreSQL"],
    },
  {
    id: 2,
    title: "LEARNPIPE (ENROLLMENT AND TRAINING MANAGEMENT SYSTEM)",
    description: "Single-handedly developed Learnpipe, an enrollment and training management system for educational institutions, enhancing administrative efficiency with a user-friendly interface and streamlined workflows.",
    url: "https://education.accountants.co.rw",
    categories: ["Backend", "Frontend"],
    images: [
      "/images/learnpipe_1.png",
      "/images/learnpipe_2.png",
      "/images/learnpipe_3.png",
      "/images/learnpipe_4.png",
      "/images/learnpipe_5.png",
      "/images/learnpipe_6.png",
      "/images/learnpipe_7.png",
      "/images/learnpipe_8.png",
    ],
    longDescription: "Learnpipe is an enrollment and training management system designed for educational institutions. I developed this platform single-handedly, focusing on enhancing administrative efficiency through a user-friendly interface and streamlined workflows. The system allows institutions to manage student enrollments, track training progress, and facilitate communication between students and administrators.",
    technologies: ["Flask", "React", "JavaScript", "SCSS", "PostgreSQL", "API Integration"],
    date: "2024-01-15",
  },
  {
    id: 3,
    title: "DREAMJOB (JOB POSTING AND APPLICATION PLATFORM)",
    description: "Built the front-end of DreamJob, a job posting and application platform, using React to create a responsive and intuitive user interface for job seekers and employers.",
    longDescription: "Developed the front-end of DreamJob, a job posting and application platform, using React to create a responsive and intuitive user interface for job seekers and employers. The platform allows users to easily post jobs, search for opportunities, and manage applications.",
    images: [
      "/images/dreamjob_1.png",
      "/images/dreamjob_2.png",
      "/images/dreamjob_3.png",
      "/images/dreamjob_4.png",
    ],
    categories: ["Frontend"],
    technologies: ["React", "SCSS"],
    image: "/images/Profile.jpg",

  },
  {
    id: 4,
    title: "GOALIFAI (EXPENSE TRACKING APP)",
    description: "Currently developing Goalifai, an expense tracking app featuring AI-powered financial advice agents to help users manage budgets and achieve financial goals.",
    categories: ["Backend", "Frontend"],
    longDescription: "Goalifai is an expense tracking app currently in development, designed to help users manage their finances effectively. The app features AI-powered financial advice agents that provide personalized recommendations based on user spending patterns and financial goals. It aims to simplify budgeting and enhance financial literacy.",
    image: "/images/Profile.jpg",
    
  },
];


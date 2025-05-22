// projectsData.tsx
export interface Project {
  title: string;
  description: string;
  url?: string;
  categories: string[];
}

export const projects: Project[] = [
  {
    title: "Netpipo",
    description: "Collaborated as a full-stack developer on Netpipo, a web application built to streamline user interactions and deliver a robust, scalable experience using modern front-end and back-end technologies.",
    url: "https://www.netpipo.com",
    categories: ["Backend", "Frontend"],
  },
  {
    title: "Learnpipe",
    description: "Single-handedly developed Learnpipe, an enrollment and training management system for educational institutions, enhancing administrative efficiency with a user-friendly interface and streamlined workflows.",
    url: "https://education.accountants.co.rw",
    categories: ["Backend", "Frontend"],
  },
  {
    title: "DreamJob",
    description: "Built the front-end of DreamJob, a job posting and application platform, using React to create a responsive and intuitive user interface for job seekers and employers.",
    categories: ["Frontend"],
  },
  {
    title: "Goalifai (In Development)",
    description: "Currently developing Goalifai, an expense tracking app featuring AI-powered financial advice agents to help users manage budgets and achieve financial goals.",
    categories: ["Backend", "Frontend"],
  },
];


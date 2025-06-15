// pages/projects/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Assuming this is your Project interface in ProjectsData
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  video?: string; // New: Video URL for project demo
  images?: string[]; // New: Array for image carousel
  url: string;
  githubUrl?: string; // New: GitHub repository link
  categories: string[];
  technologies: string[];
  role?: string; // New: Your role in the project
  features?: string[]; // New: Key features
  challenges?: { problem: string; solution: string }[]; // New: Challenges and solutions
  results?: string[]; // New: Measurable outcomes
  date?: string; // New: Project completion date
}

interface ProjectPageProps {
  project: Project | null;
}

export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
        <Link
          href="/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
          aria-label="Return to projects page"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head>
        <title>{project.title} | Your Portfolio</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.categories.join(", ")} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image || "/default-og-image.jpg"} />
        <meta property="og:url" content={`https://yourdomain.com/projects/${project.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <motion.div
        className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="max-w-5xl mx-auto">
          {/* Project Header */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white text-center mb-8"
            variants={itemVariants}
          >
            {project.title}
          </motion.h1>

          {/* Media Section */}
          <motion.div className="mb-12" variants={itemVariants}>
            {project.video ? (
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <video
                  src={project.video}
                  controls
                  className="w-full h-full object-cover"
                  aria-label={`Video demo of ${project.title}`}
                />
              </div>
            ) : project.images && project.images.length > 1 ? (
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                {/* Placeholder for image carousel - implement with a library like react-slick */}
                <p className="text-center text-gray-600 dark:text-gray-400">
                  [Image Carousel Placeholder: {project.images.length} images]
                </p>
              </div>
            ) : project.image ? (
              <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-64 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">No media available</p>
              </div>
            )}
          </motion.div>

          {/* Project Details */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8" variants={itemVariants}>
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </section>

              {/* Key Features */}
              {project.features && (
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Key Features
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Challenges and Solutions */}
              {project.challenges && (
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Challenge:</strong> {challenge.problem}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <strong>Solution:</strong> {challenge.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Results */}
              {project.results && (
                <section>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    Results
                  </h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Technologies */}
              {project.technologies && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Categories */}
              {project.categories && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((category, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Role */}
              {project.role && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    My Role
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
                </section>
              )}

              {/* Date */}
              {project.date && (
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Date
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
                </section>
              )}

              {/* Links */}
              <section>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Links
                </h3>
                <div className="space-y-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    aria-label={`Visit live demo of ${project.title}`}
                  >
                    Live Demo
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-600 text-white text-center px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                      aria-label={`View source code of ${project.title}`}
                    >
                      View Source
                    </a>
                  )}
                </div>
              </section>
            </div>
          </motion.div>

          {/* Back to Projects */}
          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:underline text-lg"
              aria-label="Return to projects page"
            >
              Back to Projects
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await import("@/data/ProjectsData"); // Dynamic import
  const paths = projects
    .filter((project) => typeof project.id === "string" && project.id)
    .map((project) => ({
      params: { slug: String(project.id) },
    }));

  return {
    paths,
    fallback: "blocking", // Better for SEO and UX
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projects } = await import("@/data/ProjectsData"); // Dynamic import
  const slug = params?.slug as string;
  const project = projects.find((p) => String(p.id) === slug);

  return {
    props: {
      project: project || null,
    },
    revalidate: 60, // ISR: Revalidate every 60 seconds
  };
};
// pages/projects/index.tsx
import { projects } from "@/data/ProjectsData";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Your Portfolio</title>
        <meta name="description" content="Explore my portfolio of projects built with modern technologies." />
      </Head>
      <div className="container mx-auto p-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id} // Use project.id instead of index
              className="bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-white font-heading">{project.title}</h3>
              <p className="mt-2 text-gray-300 font-body">{project.description}</p>
              <p className="mt-2 text-sm text-gray-400 font-body">
                Categories: {project.categories.join(", ")}
              </p>
              {project.title && (
                <Link href={`/projects/${project.id}`} passHref>
                  <motion.div
                    className="mt-2 inline-block text-white bg-sky-500 px-4 py-2 rounded-lg text-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    View Project
                  </motion.div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
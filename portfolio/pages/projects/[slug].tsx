// pages/projects/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import { Project, projects } from "@/data/ProjectsData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    return <div>Loading...</div>;
  }

  if (!project) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <Link href="/projects" className="text-blue-500 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Head>
        <title>{project.title} | Your Portfolio</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.categories.join(", ")} />
      </Head>
      <div className="container mx-auto p-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {project.image && (
            <motion.div
              className="w-full md:w-1/2"
              initial="hidden"
              animate={isMounted ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full"
                priority
              />
            </motion.div>
          )}
          <motion.div
            className="w-full md:w-1/2 space-y-4"
            initial="hidden"
            animate={isMounted ? "visible" : "hidden"}
            variants={contentVariants}
          >
            <p className="text-lg">{project.longDescription || project.description}</p>
            <p>
              <strong>Categories:</strong> {project.categories.join(", ")}
            </p>
            {project.technologies && (
              <p>
                <strong>Technologies:</strong> {project.technologies.join(", ")}
              </p>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Visit Project
            </a>
          </motion.div>
        </div>
        <div className="text-center mt-8">
          <Link href="/projects" className="text-blue-500 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects
    .filter((project) => project.id !== undefined && project.id !== null)
    .map((project) => ({
      params: { slug: project.id!.toString() }, // Use id as string
    }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects.find((p) => p.id !== undefined && p.id.toString() === slug);

  return {
    props: {
      project: project || null,
    },
  };
};
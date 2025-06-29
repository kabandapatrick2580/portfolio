import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useRef } from "react";

// Project Interface
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  video?: string;
  images?: string[];
  url: string;
  githubUrl?: string;
  categories: string[];
  technologies: string[];
  role?: string;
  features?: string[];
  challenges?: { problem: string; solution: string }[];
  results?: string[];
  date?: string;
}

interface ProjectPageProps {
  project: Project | null;
}

// Styled Components
const PageContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 4rem 1rem;
  background-color: "#f7fafc"
  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 1.5rem;
  font-weight: 700;
  color: "#1a202c";
  text-align:   left;
  margin-bottom: 2rem;
  position: absolute;
  top: 1px;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const MediaContainer = styled(motion.div)`
  margin-bottom: 3rem;
`;

const MediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  height: 100vh;
  @media (max-width: 768px) {
    height: 24rem;
  }
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const PrevButton = styled(NavButton)`
  left: 1rem;
`;

const NextButton = styled(NavButton)`
  right: 1rem;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#fff" : "rgba(255, 255, 255, 0.5)")};
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  transform: ${({ active }) => (active ? "scale(1.25)" : "scale(1)")};
`;

const PlaceholderMedia = styled.div`
  width: 100%;
  height: 16rem;
  background: "#e2e8f0";
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: "#718096";
  @media (min-width: 768px) {
    height: 24rem;
  }
`;

const GridContainer = styled(motion.div)`
  display: grid;
  gap: 2rem;
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: "#1a202c";
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: "#4a5568";
  line-height: 1.75;
`;

const List = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: "#4a5568";
`;

const ChallengeItem = styled.div`
  border-left: 4px solid #2563eb;
  padding-left: 1rem;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SidebarSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const SidebarTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: "#1a202c";
  margin-bottom: 0.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span<{ isTech?: boolean }>`
  background: ${({ isTech}) =>
    isTech ?  "#bfdbfe" :  "#e5e7eb"};
  color: ${({ isTech }) =>
    isTech ?  "#1e40af" : "#1f2937"};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
`;

const LinkButton = styled.a`
  display: block;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s;
`;

const LiveDemoButton = styled(LinkButton)`
  background: #2563eb;
  &:hover {
    background: #1d4ed8;
  }
`;

const SourceButton = styled(LinkButton)`
  background: #4b5563;
  &:hover {
    background: #374151;
  }
`;

const BackLink = styled(Link)`
  color: "#2563eb";
  text-decoration: none;
  font-size: 1.125rem;
  text-align: center;
  display: block;
  margin-top: 3rem;
  &:hover {
    text-decoration: underline;
  }
`;

const LoadingContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:"#f7fafc";
`;

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: "#f7fafc";
`;

const ErrorTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: "#1a202c";
  margin-bottom: 1rem;
`;

// Theme interface
interface Theme {
  background?: string;
  text?: string;
  textSecondary?: string;
  placeholder?: string;
  placeholderText?: string;
  tagTech?: string;
  tagTechText?: string;
  tagCategory?: string;
  tagCategoryText?: string;
  link?: string;
}

// Theme objects
const theme: Theme = {
  background: "#f7fafc",
  text: "#1a202c",
  textSecondary: "#4a5568",
  placeholder: "#e2e8f0",
  placeholderText: "#718096",
  tagTech: "#bfdbfe",
  tagTechText: "#1e40af",
  tagCategory: "#e5e7eb",
  tagCategoryText: "#1f2937",
  link: "#2563eb",
};


export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
  const AUTO_SLIDE_DELAY = 5000;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (project?.images && project.images.length > 1) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.images!.length - 1 ? 0 : prev + 1
        );
      }, AUTO_SLIDE_DELAY);
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [project?.images]);

  // Reset auto-slide on user interaction
  const resetAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
    if (project?.images && project.images.length > 1) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.images!.length - 1 ? 0 : prev + 1
        );
      }, AUTO_SLIDE_DELAY);
    }
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      project && project.images
        ? prev === 0
          ? (project.images.length || 1) - 1
          : prev - 1
        : prev
    );
    resetAutoSlide();
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      project && project.images
        ? prev === (project.images.length || 1) - 1
          ? 0
          : prev + 1
        : prev
    );
    resetAutoSlide();
  };

  if (router.isFallback) {
    return (
      <LoadingContainer>
        <Text style={{ fontSize: "1.25rem", fontWeight: 600 }}>Loading...</Text>
      </LoadingContainer>
    );
  }

  if (!project) {
    return (
      <ErrorContainer>
        <ErrorTitle>Project Not Found</ErrorTitle>
        <BackLink href="/projects" aria-label="Return to projects page">
          Back to Projects
        </BackLink>
      </ErrorContainer>
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
      <PageContainer
        initial="hidden"
        animate={isMounted ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <ContentWrapper>
          <ProjectTitle variants={itemVariants}>
            {project.title}
          </ProjectTitle>

          {/* Media Section */}
          <MediaContainer variants={itemVariants}>
            {project.video ? (
              <MediaWrapper>
                <VideoElement
                  src={project.video}
                  controls
                  aria-label={`Video demo of ${project.title}`}
                />
              </MediaWrapper>
            ) : project.images && project.images.length > 0 ? (
              <MediaWrapper>
                <CarouselWrapper>
                  {project.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      style={{
                        objectFit: "cover",
                        transition: "opacity 0.5s",
                        opacity: index === currentImageIndex ? 1 : 0,
                      }}
                      priority={index === 0}
                    />
                  ))}
                  {project.images.length > 1 && (
                    <>
                      <PrevButton onClick={handlePrev} aria-label="Previous image">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </PrevButton>
                      <NextButton onClick={handleNext} aria-label="Next image">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </NextButton>
                      <DotsContainer>
                        {project.images.map((_, i) => (
                          <Dot
                            key={i}
                            active={i === currentImageIndex}
                            onClick={() => {
                              setCurrentImageIndex(i);
                              resetAutoSlide();
                            }}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </DotsContainer>
                    </>
                  )}
                </CarouselWrapper>
              </MediaWrapper>
            ) : project.image ? (
              <MediaWrapper>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </MediaWrapper>
            ) : (
              <PlaceholderMedia>
                <Text>No media available</Text>
              </PlaceholderMedia>
            )}
          </MediaContainer>

          {/* Project Details */}
          <GridContainer variants={itemVariants}>
            {/* Main Content */}
            <MainContent>
              <Section>
                <SectionTitle>Overview</SectionTitle>
                <Text >{project.longDescription || project.description}</Text>
              </Section>

              {project.features && (
                <Section>
                  <SectionTitle>Key Features</SectionTitle>
                  <List>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </List>
                </Section>
              )}

              {project.challenges && (
                <Section>
                  <SectionTitle>Challenges & Solutions</SectionTitle>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {project.challenges.map((challenge, index) => (
                      <ChallengeItem key={index}>
                        <Text>
                          <strong>Challenge:</strong> {challenge.problem}
                        </Text>
                        <Text>
                          <strong>Solution:</strong> {challenge.solution}
                        </Text>
                      </ChallengeItem>
                    ))}
                  </div>
                </Section>
              )}

              {project.results && (
                <Section>
                  <SectionTitle>Results</SectionTitle>
                  <List>
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </List>
                </Section>
              )}
            </MainContent>

            {/* Sidebar */}
            <Sidebar>
              {project.technologies && (
                <SidebarSection>
                  <SidebarTitle>Technologies</SidebarTitle>
                  <TagContainer>
                    {project.technologies.map((tech, index) => (
                      <Tag key={index} isTech>
                        {tech}
                      </Tag>
                    ))}
                  </TagContainer>
                </SidebarSection>
              )}

              {project.categories && (
                <SidebarSection>
                  <SidebarTitle>Categories</SidebarTitle>
                  <TagContainer>
                    {project.categories.map((category, index) => (
                      <Tag key={index}>
                        {category}
                      </Tag>
                    ))}
                  </TagContainer>
                </SidebarSection>
              )}

              {project.role && (
                <SidebarSection>
                  <SidebarTitle>My Role</SidebarTitle>
                  <Text>{project.role}</Text>
                </SidebarSection>
              )}

              {project.date && (
                <SidebarSection>
                  <SidebarTitle>Date</SidebarTitle>
                  <Text>{project.date}</Text>
                </SidebarSection>
              )}

              <SidebarSection>
                <SidebarTitle>Links</SidebarTitle>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <LiveDemoButton
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live demo of ${project.title}`}
                  >
                    Live Demo
                  </LiveDemoButton>
                  {project.githubUrl && (
                    <SourceButton
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code of ${project.title}`}
                    >
                      View Source
                    </SourceButton>
                  )}
                </div>
              </SidebarSection>
            </Sidebar>
          </GridContainer>

          <BackLink
            href="/projects"
            aria-label="Return to projects page"
          >
            Back to Projects
          </BackLink>
        </ContentWrapper>
      </PageContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { projects } = await import("@/data/ProjectsData");
  const paths = projects
    .filter((project) => typeof project.id === "string" && project.id)
    .map((project) => ({
      params: { slug: String(project.id) },
    }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projects } = await import("@/data/ProjectsData");
  const slug = params?.slug as string;
  const project = projects.find((p) => String(p.id) === slug);

  return {
    props: {
      project: project || null,
    },
    revalidate: 60,
  };
};
// components/Grid.js
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTh, FaServer, FaCode, FaPaintBrush, FaTools } from 'react-icons/fa';
import { RiSeoLine } from 'react-icons/ri';
import Backend from '@/sections/Backend';
import Frontend from '@/sections/Frontend';
import Designing from '@/sections/Designing';
import DevOps from '@/sections/DevOps';
import { projects } from '@/data/ProjectsData';
import Typewriter from '@/effects/typewriter';
import Link from 'next/link';

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  `;

const HeroTexts = styled.div`
  display: flex;
  flex-direction: column;
  color:rgb(13, 68, 68)!important;
  background-color: rgb(187, 208, 208);
  font-family: 'roboto', sans-serif;
  `;
const HeroImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #062c2d;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-image: url('/images/patrick_port_left.png'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Two columns on larger screens */
    padding: 4rem 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr; /* Two columns on larger screens */
    padding: 6rem 3rem;
  }`;


const IntroSection = styled(motion.div)`
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

const AboutSection = styled(motion.div)`
  width: 100%;
  max-width: 48rem; /* max-w-3xl */
  margin: 0 auto;
  padding: 2rem 1rem;

  h2 {
    font-size: 1.5rem; /* text-2xl */
    font-weight: bold;
    color: #ffffff;
    font-family: 'YourHeadingFont', sans-serif; /* Replace with your heading font */
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 1.875rem; /* text-3xl */
    }
  }

  p {
    color: #d1d5db; /* text-gray-300 */
    font-family: 'YourBodyFont', sans-serif; /* Replace with your body font */
    font-size: 1.125rem;
    line-height: 1.75;
  }
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #1f2937; /* bg-gray-800 */
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    position: static;
    width: 20%; /* md:w-1/5 */
    flex-direction: column;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

const SidebarItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: #374151; /* bg-gray-700 */
  color: #ffffff;
  border-radius: 0.5rem;
  cursor: pointer;
  flex: 1;
  text-align: center;

  &:hover {
    background-color: #2563eb; /* hover:bg-navy-600 */
  }

  span {
    font-size: 0.75rem; /* text-xs */
    font-family: 'YourHeadingFont', sans-serif;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
    flex: initial;
    text-align: left;

    span {
      font-size: 0.875rem; /* text-sm */
    }
  }
`;

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: #2563eb; /* bg-navy-600 */
  color: #ffffff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  flex: 1;
  text-align: center;

  &:hover {
    background-color: #1e40af; /* hover:bg-navy-500 */
  }

  span {
    font-size: 0.75rem;
    font-family: 'YourHeadingFont', sans-serif;
  }

  @media (min-width: 768px) {
    padding: 0.75rem;
    flex: initial;
    text-align: left;

    span {
      font-size: 0.875rem;
    }
  }
`;

const ContentArea = styled(motion.div)`
  flex: 1;
  margin-top: 5rem;
  padding: 1.5rem;
  overflow-y: auto;
  background-color: #1f2937; /* bg-gray-800 */

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 2rem;
  }
`;

const GridContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 64rem; /* max-w-4xl */
  padding: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); /* sm:grid-cols-2 */
  }
`;

const GridItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #1f2937; /* bg-gray-800 */
  color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #2563eb; /* hover:bg-navy-600 */
  }

  span {
    margin-top: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'YourHeadingFont', sans-serif;
  }
`;

const ProjectsSection = styled(motion.div)`
  width: 100%;
  max-width: 64rem;
  padding: 3rem 1rem;
  margin: 0 auto;

  h2 {
    font-size: 1.875rem;
    font-weight: bold;
    color: #ffffff;
    font-family: 'YourHeadingFont', sans-serif;
    margin-bottom: 1.5rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: #374151; /* bg-gray-700 */
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #ffffff;
    font-family: 'YourHeadingFont', sans-serif;
  }

  p {
    margin-top: 0.5rem;
    color: #d1d5db; /* text-gray-300 */
    font-family: 'YourBodyFont', sans-serif;
  }

  p.categories {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #9ca3af; /* text-gray-400 */
  }
`;

const ProjectLink = styled(Link)`
  display: inline-block;
  margin-top: 0.5rem;
  background-color: #0ea5e9; /* bg-sky-500 */
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem; 
  color: f7d002;
  margin: 10px 0;
  `;
const Title = styled.h1`
  font-size: 2.5rem;
  color: #062c2d;
  margin: 0;
  `;


// Framer Motion variants
const sidebarVariants = {
  hidden: { y: -200, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, delay: 0.2 } },
};

// Grid Component
const Grid = () => {
  const [selectedGrid, setSelectedGrid] = useState<string | null>(null);

  const handleClick = (grid: string) => {
    setSelectedGrid(grid);
  };

  const handleBack = () => {
    setSelectedGrid(null);
  };

  const grids = [
    { name: 'Backend', icon: <FaServer className="text-xl md:text-2xl" /> },
    { name: 'Frontend', icon: <FaCode className="text-xl md:text-2xl" /> },
    { name: 'Designing', icon: <FaPaintBrush className="text-xl md:text-2xl" /> },
    { name: 'DevOps', icon: <FaTools className="text-xl md:text-2xl" /> },
    { name: 'SEO', icon: <RiSeoLine className="text-xl md:text-2xl" /> },
  ];

  return (
    <Container>
      {/* Intro Section */}
    <HeroSection>
      <HeroTexts>
        <AnimatePresence>
          {!selectedGrid && (
            <IntroSection
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Subtitle>FULL STACK DEVELOPER</Subtitle>
              <Title>I'm Patrick Kabanda</Title>
              
              {/*<Typewriter text="I'm Patrick – a creative full-stack developer." speed={80} />*/}
            </IntroSection>
          )}
        </AnimatePresence>

        {/* About Section */}
      </HeroTexts>
      <HeroImage>

      </HeroImage>
    </HeroSection>
      {/* Main Content */}
      <MainContent>
        <AnimatePresence>
          {selectedGrid ? (
            <>
              {/* Sidebar/Top Bar */}
              <Sidebar
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {grids
                  .filter((grid) => grid.name !== selectedGrid)
                  .map((grid) => (
                    <SidebarItem
                      key={grid.name}
                      onClick={() => handleClick(grid.name)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {grid.icon}
                      <span>{grid.name}</span>
                    </SidebarItem>
                  ))}
                <BackButton
                  onClick={handleBack}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaTh className="text-lg md:text-xl" />
                  <span>All</span>
                </BackButton>
              </Sidebar>

              {/* Main Content Area */}
              <ContentArea
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {selectedGrid === 'Backend' && <Backend />}
                {selectedGrid === 'Frontend' && <Frontend />}
                {selectedGrid === 'Designing' && <Designing />}
                {selectedGrid === 'DevOps' && <DevOps />}
              </ContentArea>
            </>
          ) : (
            <GridContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GridWrapper>
                {grids.map((grid) => (
                  <GridItem
                    key={grid.name}
                    onClick={() => handleClick(grid.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {grid.icon}
                    <span>{grid.name}</span>
                  </GridItem>
                ))}
              </GridWrapper>
            </GridContainer>
          )}
        </AnimatePresence>
      </MainContent>

      {/* Projects Section */}
      <AnimatePresence>
        {!selectedGrid && (
          <ProjectsSection
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Featured Projects</h2>
            <ProjectsGrid id="projects">
              {projects.map((project, index) => (
                <ProjectCard key={index}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="categories">Categories: {project.categories.join(', ')}</p>
                  {project.title && (
                    <ProjectLink
                      href={`/projects/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        View Project
                      </motion.button>
                    </ProjectLink>
                  )}
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ProjectsSection>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Grid;
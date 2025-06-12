// components/Grid.js
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, 
  FiServer, 
  FiPenTool, 
  FiGitBranch, 
  FiSearch, 
  FiSmartphone,
  FiHome,
} from 'react-icons/fi';
import Backend from '@/sections/Backend';
import Frontend from '@/sections/Frontend';
import Designing from '@/sections/Designing';
import DevOps from '@/sections/DevOps';
import { colors, typography, spacing, shadows } from '@/styles/constants';


// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.backgroundGradient};
  color: #e0e7ff;
  font-family: 'Inter', sans-serif;
  width: 100%;
`;

const HeroSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background: linear-gradient(180deg, ${colors.primary}, ${colors.secondary});
  backdrop-filter: blur(8px);
  z-index: 1;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const HeroImage = styled(motion.div)`
  background: url('/images/patrick_port_left.png') no-repeat center/cover;
  position: relative;
  overflow: hidden;
  width: 100%;
  object-fit: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0.3;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, #a5b4fc, #f0abfc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #c4b5fd;
  font-weight: 400;
  margin-bottom: 2rem;
`;

const Sidebar = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: rgba(17, 24, 39, 0.95);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 20;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
    position: sticky;
    top: 0;
  }
`;

const SidebarItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  color: #e0e7ff;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    color: #ffffff;
    box-shadow: 0 0 15px rgba(79, 70, 229, 0.5);
  }

  svg {
    font-size: 1.5rem;
  }
`;

const BackButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: #e0e7ff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;

  &:hover {
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    color: #ffffff;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const ContentArea = styled(motion.div)`
  flex: 1;
  padding: 3rem;
  margin-left: 280px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 2rem;
    margin-top: 4rem;
  }
`;

const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const GridItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, ${colors.primary}, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    
  }


  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: #e0e7ff;
    margin-top: 1rem;
  }

  svg {
    font-size: 2.5rem;
    color: #a5b4fc;
  }
`;

const ProjectsSection = styled(motion.section)`
  padding: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(17, 24, 39, 0.8);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #e0e7ff;
  }

  p {
    color: #c4b5fd;
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: linear-gradient(90deg, #4f46e5, #7c3aed);
    color: #ffffff;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

// Framer Motion Variants
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const sidebarVariants = {
  hidden: { x: -300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const gridItemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
      mass: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px #82816D',
    transition: { type: 'spring', stiffness: 300 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const projectCardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 15 },
  },
  hover: { scale: 1.03, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)' },
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
    { name: 'Backend', icon: <FiServer /> },
    { name: 'Frontend', icon: <FiCode /> },
    { name: 'Designing', icon: <FiPenTool /> },
    { name: 'DevOps', icon: <FiGitBranch /> },
    { name: 'SEO', icon: <FiSearch /> },
    { name: 'Mobile', icon: <FiSmartphone /> },
  ];

  const projects = [
    { title: 'Project 1', description: 'A modern web app', categories: 'Web, Backend', link: '#' },
    { title: 'Project 2', description: 'Creative UI design', categories: 'Frontend, Design', link: '#' },
    { title: 'Project 3', description: 'CI/CD pipeline', categories: 'DevOps', link: '#' },
  ];

  return (
    <Container>
      <HeroSection
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <HeroContent>
          <Title
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          >
            Patrick Kabanda
          </Title>
          <Subtitle
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full Stack Web Developer
          </Subtitle>

          <AnimatePresence>
            {selectedGrid ? (
              <>
                <Sidebar
                  variants={sidebarVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  <BackButton
                    onClick={handleBack}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiHome />
                    <span>Home</span>
                  </BackButton>
                  {grids
                    .filter((grid) => grid.name !== selectedGrid)
                    .map((grid) => (
                      <SidebarItem
                        key={grid.name}
                        onClick={() => handleClick(grid.name)}
                        whileHover="hover"
                        variants={gridItemVariants}
                      >
                        {grid.icon}
                        <span>{grid.name}</span>
                      </SidebarItem>
                    ))}
                </Sidebar>

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
                {grids.map((grid) => (
                  <GridItem
                    key={grid.name}
                    onClick={() => handleClick(grid.name)}
                    variants={gridItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {grid.icon}
                    <span>{grid.name}</span>
                  </GridItem>
                ))}
              </GridContainer>
            )}
          </AnimatePresence>
        </HeroContent>
        <HeroImage
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </HeroSection>

    </Container>
  );
};

export default Grid;
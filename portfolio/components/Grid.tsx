// components/Grid.js
// Note: Add 'use client'; at the top if using Next.js App Router
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiSidebar,
  FiCode,
  FiServer,
  FiGitBranch,
  FiSearch,
  FiSmartphone,
  FiHome,
} from 'react-icons/fi';
import Backend from '@/sections/Backend';
import Frontend from '@/sections/Frontend';
import ITSupport from '@/sections/ITSupport';
import DevOps from '@/sections/DevOps';
import Seo from '@/sections/Seo';
import { colors } from '@/styles/constants';

interface SidebarProps {
  $isSidebarOpen: boolean;
}

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${colors.background};
  color: #e0e7ff;
  font-family: 'Inter', sans-serif;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
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
  background: ${colors.glassBg};
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  color: #abfcf8;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  span {
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px #abfcf8;

  }


`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: ${colors.textTertiary};
  font-weight: 400;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 50%;
    height: 2px;
    background: ${colors.textQuaternary};
    top: 3rem;
    left: 0;
    transition: width 1s ease;
    animation: pulse 3s ease-in-out;
  }
    
  @keyframes pulse {
    0% {
      width: 0%;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 50%;
    }
  }

`;

const Sidebar = styled(motion.nav)<SidebarProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background: rgba(17, 24, 39, 0.95);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 20;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
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
    background: linear-gradient(90deg, #035354, #5a9491);
    color: #ffffff;
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
    background: linear-gradient(90deg, #035354, #5a9491);
    color: #ffffff;
  }

  svg {
    font-size: 1.5rem;
  }
`;

const SidebarIcon = styled.div<SidebarProps>`
  position: fixed;
  top: 1rem;
  left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '200px' : '1rem')};
  z-index: 1100;
  transition: left 0.3s ease;
`;

const ContentArea = styled(motion.div)<SidebarProps>`
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? ' 0px' : '0')};
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
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
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid ${colors.textQuaternary};
  color: #e0e7ff;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(to top, rgba(93, 217, 188, 1), rgba(171, 252, 248, 0.7));
    transition: height 0.9s ease-out;
    z-index: 0;
    box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.2);
  }

  &:hover::after {
    height: 90%;
    animation: ripple 5s infinite ease-in-out;
  }

  @keyframes ripple {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
      opacity: 0.8;
    }
    100% {
      transform: translateY(0);
    }
  }

  span::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    bottom: 10px;
    left: 50%;
    opacity: 0;
    transition: opacity 0.3s ease, transform 1s ease;
    z-index: 2;
  }

  &:hover span::before {
    opacity: 1;
    transform: translateY(-80px) translateX(-10px);
    transition: opacity 0.3s ease, transform 1.2s ease-out;
  }

  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: #e0e7ff;
    margin-top: 1rem;
    position: relative;
    z-index: 3;
  }

  svg {
    font-size: 2.5rem;
    color: #a5b4fc;
    position: relative;
    z-index: 3;
  }
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
    transition: { type: 'spring', stiffness: 300 },
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
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


// Grid Component
const Grid = () => {
  const [selectedGrid, setSelectedGrid] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleClick = (grid: string) => {
    setSelectedGrid(grid);
  };

  const handleBack = () => {
    setSelectedGrid(null);
  };

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const grids = [
    { name: 'Backend', icon: <FiServer /> },
    { name: 'Frontend', icon: <FiCode /> },
    { name: 'IT Support', icon: <FiSmartphone /> },
    { name: 'DevOps', icon: <FiGitBranch /> },
    { name: 'SEO', icon: <FiSearch /> },
  ];

  return (
    <Container>
      {selectedGrid ?(
      <SidebarIcon $isSidebarOpen={isSidebarOpen}>
        <motion.button
          onClick={handleSidebarToggle}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <FiSidebar size={32} color="black" />
        </motion.button>
      </SidebarIcon>
      ) : (
        <SidebarIcon $isSidebarOpen={isSidebarOpen}>
          <motion.button
            onClick={handleSidebarToggle}
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: 'none' }}
          >
            <FiSidebar size={32} color="black" />
          </motion.button>
        </SidebarIcon>
      )}
      <HeroSection initial="hidden" animate="visible" variants={heroVariants}>
        <HeroContent>
          <AnimatePresence>
            {selectedGrid ? (
              <>
                <Sidebar
                  $isSidebarOpen={isSidebarOpen}
                  variants={sidebarVariants}
                  initial="hidden"
                  animate={isSidebarOpen ? 'visible' : 'hidden'}
                  exit="hidden"
                >
                  Patrick Kabanda
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
                  $isSidebarOpen={isSidebarOpen}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {selectedGrid === 'Backend' && <Backend />}
                  {selectedGrid === 'Frontend' && <Frontend />}
                  {selectedGrid === 'IT Support' && <ITSupport />}
                  {selectedGrid === 'DevOps' && <DevOps />}
                  {selectedGrid === 'SEO' && <Seo />}
                </ContentArea>
              </>
            ) : (
              <>
                <Title
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                >
                  PATRICK <span>KABANDA</span> 
                </Title>
                <Subtitle
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  Full Stack Engineer
                </Subtitle>
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
              </>
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
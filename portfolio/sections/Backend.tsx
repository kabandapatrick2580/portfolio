import { motion } from 'framer-motion';
import { FaServer, FaDatabase } from 'react-icons/fa';
import styled from 'styled-components';
import { FaLaptopCode } from 'react-icons/fa';
import { BsDatabaseFillGear } from "react-icons/bs";
import { LuCloudCog } from "react-icons/lu";
import { SiCyberdefenders } from "react-icons/si";
import { SiFramework } from "react-icons/si";
import { GrTools } from "react-icons/gr";
import Projects from '@/pages/projects';
import { PiStudentBold } from "react-icons/pi";


// Styled Components
const Section = styled(motion.section)`
  padding: 10px 0;
`;

const Container = styled.div`
`;

const Heading = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  color: #1a2745;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ol`
  padding: 0;
  margin: 1rem;
  color: #374151; // gray-700
  font-size: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem;

    }
  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #1a2745; // navy-800
}
  `;

const Subheading = styled.p`
  margin-top: 1rem;
  color: #4b5563;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

const IconsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconLabel = styled.span`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
`;
const ProjectsSection = styled.div`
  margin-top: 2rem;
  text-align: center;
  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #1a2745; // navy-800
  }
  `;
   
const Project = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  `;

const ProjectBox = styled(motion.div)`
  background-color: #f8fafc; // gray-100
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
const ProjectTittle = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #1a2745; // navy-800
  margin-top: 0.5rem;
`;
const ProjectDescription = styled.p`
  font-size: 0.875rem;
  color: #4b5563; // gray-600
  text-align: center;
  margin-top: 0.5rem;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 768px) {
    max-width: 100%;
    white-space: normal;
  }
`;


const iconColor = "#334155"; // navy-600

const Backend = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeIn' },
    },
  };

  return (
    <Section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <Container>
        <Heading>Backend Expertise</Heading>
        <Subheading>
          I build scalable, secure backend systems with expertise in RESTful APIs, databases, and cloud deployment. My focus is on clean code and high-performance solutions.
        </Subheading>
        <List>
          <h3>Skills</h3>
          <li><FaLaptopCode /> <span>RESTful API Development</span></li>
          <li><BsDatabaseFillGear /> Database Design & Management(PostgreSQL, MongoDB)</li>
          <li><LuCloudCog />Cloud Deployment (DigitalOcean, Azure)</li>
          <li><SiCyberdefenders />Security Best Practices</li>
          <li><SiFramework />Frameworks: Django, Flask</li>
          <li><GrTools />Tool: Docker, Git</li>
        </List>

        <ProjectsSection>
          <h3>Projects</h3>
          <Project>
            <ProjectBox whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PiStudentBold />
              <ProjectTittle>Learnpipe</ProjectTittle>
              <ProjectDescription>
                A platform where students apply for training programs, and trainers can manage applications.
              </ProjectDescription>
            </ProjectBox>
          </Project>

        
        </ProjectsSection>
      </Container>
    </Section>
  );
};

export default Backend;
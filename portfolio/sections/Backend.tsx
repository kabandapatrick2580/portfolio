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
import { LiaGlobeSolid } from "react-icons/lia";
import { MdReadMore } from "react-icons/md";

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
  gap: 1rem;
  margin-top: 5px
`;

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  text-align: center;
  gap: 0.5rem;
  padding: 2px 5px;
  outline: 1px solid #e2e8f0;
  border-radius: 0.5rem;
    &:hover {
    background-color: #cbd5e1; // gray-300
  }
  transition: background-color 0.3s ease;
`;

const IconBoxFill = styled(IconBox)`
  background-color: #e2e8f0; // gray-200
  color: #1a2745; // navy-800
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #cbd5e1; // gray-300
  }
  transition: background-color 0.3s ease;
  `;

const IconLabel = styled.span`
  font-size: 0.5rem;
  color: #374151;
`;
const ProjectsSection = styled.div`
  margin-top: 2rem;
  text-align: center;
  h3 {
    font-size: 1rem;
    font-weight: bold;
    color: #1a2745;
  }
  `;
const Project = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  `;
const ProjectBox = styled(motion.div)`
  background-color: #f8fafc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  cursor: pointer;
  gap: 0.5rem;
`;
const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const Subtitle = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: #333;
  `;

const ProjectTittle = styled.h4`
  font-size: 12px;
  font-weight: bold;
  color: #1a2745; // navy-800
`;
const ProjectDescription = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: #4b5563;
  @media (max-width: 768px) {
    max-width: 100%;
    white-space: normal;
  }
`;

const ProjectIcon = styled.div`
  height: 100%;
  background-color: #e2e8f0; // gray-200
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
            <ProjectBox>
              <ProjectIcon>
                <PiStudentBold />
              </ProjectIcon>
              <ProjectDetails>
                <Subtitle>Full-stack</Subtitle>
                <ProjectTittle>Learnpipe</ProjectTittle>
                <ProjectDescription>
                  A platform where students apply for training programs, and trainers can manage applications.
                </ProjectDescription>
                <IconsRow>
                  <IconBox>
                    <LiaGlobeSolid />
                    <IconLabel>Web</IconLabel>
                  </IconBox>
                  <IconBoxFill>
                    <MdReadMore />
                    <IconLabel>Read More</IconLabel>
                  </IconBoxFill>
                </IconsRow>
              </ProjectDetails>
            </ProjectBox>
          </Project>
        </ProjectsSection>
      </Container>
    </Section>
  );
};

export default Backend;
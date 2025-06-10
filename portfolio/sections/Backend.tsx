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
import { ProjectBox, ProjectIcon, ProjectDetails, Subtitle, ProjectTittle, ProjectDescription, IconsRow, IconBox, IconBoxFill, IconLabel, ProjectsSection, Project } from '@/styles/Card.styled';




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
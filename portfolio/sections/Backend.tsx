import { motion } from 'framer-motion';
import { FaServer, FaDatabase } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const Section = styled(motion.section)`
  padding: 3rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a2745;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Subheading = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
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
          I specialize in building scalable backend systems using Flask, Node.js,
          and SQL databases, ensuring performance and reliability.
        </Subheading>
        <IconsRow>
          <IconBox whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
            <FaServer size={40} color={iconColor} />
            <IconLabel>Flask & Node.js</IconLabel>
          </IconBox>
          <IconBox whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}>
            <FaDatabase size={40} color={iconColor} />
            <IconLabel>SQL Databases</IconLabel>
          </IconBox>
        </IconsRow>
      </Container>
    </Section>
  );
};

export default Backend;
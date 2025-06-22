import { motion } from "framer-motion";
import { FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiFlask, SiPostgresql, SiMysql, SiMongodb, SiExpress } from "react-icons/si";
import { LiaDocker } from "react-icons/lia";
import {
  Section,
  Container,
  Title,
  Grid,
  Card,
  CardHeader,
  CardTitle,
  CardDesc,
  StyledIcon,
  Description,
  ButtonWrapper,
  Button,
} from "@/styles/StyledComponents";

const backendSkills = [
  {
    category: "Back-End Development",
    items: [
      {
        name: "Python",
        icon: <FaPython style={{ color: "#2563eb" }} />,
        description: "Developing robust back-end logic for web applications.",
      },
      {
        name: "Django",
        icon: <SiDjango style={{ color: "#16a34a" }} />,
        description: "Building secure and scalable web apps with Django ORM and MVT architecture.",
      },
      {
        name: "Flask",
        icon: <SiFlask style={{ color: "#1f2937" }} />,
        description: "Crafting lightweight APIs and microservices with Flask.",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql style={{ color: "#1e40af" }} />,
        description: "Designing and optimizing relational databases for performance.",
      },
      {
        name: "MySQL",
        icon: <SiMysql style={{ color: "#f97316" }} />,
        description: "Managing relational data with efficient queries and schemas.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb style={{ color: "#22c55e" }} />,
        description: "Working with NoSQL databases for flexible, scalable data storage.",
      },
            {
        name: "REST APIs",
        icon: <FaDatabase style={{ color: "#4b5563" }} />,
        description: "Designing and implementing secure, efficient APIs for front-end integration.",
      },
      {
        name: "SQL",
        icon: <FaDatabase style={{ color: "#3b82f6" }} />,
        description: "Writing complex queries for data manipulation and analysis.",
      },
      {
        name: "Docker",
        icon: <LiaDocker style={{ color: "dark-blue" }} />,
        description: "Containerizing applications for consistent deployment.",
      },
    ],
  },
];

const BackendSkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <Section>
      <Container>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Back-End Skills
        </Title>
        <Grid variants={containerVariants} initial="hidden" animate="visible">
          {backendSkills[0].items.map((skill, index) => (
          <Card key={index} variants={itemVariants}>
              <CardHeader>
                {skill.icon && <StyledIcon>{skill.icon}</StyledIcon>}
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardDesc>{skill.description}</CardDesc>
            </Card>
          ))}
        </Grid>
        <Description variants={itemVariants}>
          I specialize in building robust, scalable back-end systems using Python and Node.js
          frameworks, paired with relational and NoSQL databases. My projects showcase my ability to
          create efficient APIs and manage complex data, and I’m dedicated to deepening my back-end
          expertise.
        </Description>
        <ButtonWrapper variants={itemVariants}>
          <Button href="/projects" aria-label="View my back-end projects">
            See My Projects
          </Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default BackendSkillsSection;
import { motion } from "framer-motion";
import { SiDocker, SiDigitalocean, SiNginx, SiServerfault, SiWatchtower } from "react-icons/si";
import { FaLock } from "react-icons/fa";
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

const devOpsSkills = [
  {
    category: "DevOps & Deployment",
    items: [
      {
        name: "Docker",
        icon: <SiDocker style={{ color: "#0db7ed", fontSize: "1.25rem" }} />,
        description: "Containerizing applications for consistent development and deployment.",
      },
      {
        name: "Digital Ocean",
        icon: <SiDigitalocean style={{ color: "#0080ff", fontSize: "1.25rem" }} />,
        description: "Deploying and managing applications on Digital Ocean cloud infrastructure.",
      },
      {
        name: "Nginx",
        icon: <SiNginx style={{ color: "#009639", fontSize: "1.25rem" }} />,
        description: "Configuring web servers for high-performance hosting and load balancing.",
      },
      {
        name: "Hosting",
        icon: <SiWatchtower style={{ color: "#f97316", fontSize: "1.25rem" }} />,
        description: "Setting up and managing hosting environments for web applications.",
      },
      {
        name: "SSL Configurations",
        icon: <FaLock style={{ color: "#4b5563", fontSize: "1.25rem" }} />,
        description: "Implementing secure HTTPS connections with SSL/TLS certificates.",
      },
      {
        name: "Server Management",
        icon: <SiServerfault style={{ color: "#f97316", fontSize: "1.25rem" }} />,
        description: "Overseeing server health, performance, and security for optimal uptime.",
      },
    ],
  },
];

const DevOpsSkillsSection = () => {
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
          DevOps Skills
        </Title>
        <Grid variants={containerVariants} initial="hidden" animate="visible">
          {devOpsSkills[0].items.map((skill, index) => (
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
          I excel at streamlining deployment processes and ensuring secure, scalable infrastructure
          using modern DevOps tools. My experience with Docker, Digital Ocean, and Nginx enables me
          to deploy robust applications, and I’m committed to advancing my skills in cloud and server
          management.
        </Description>
        <ButtonWrapper variants={itemVariants}>
          <Button href="/projects" aria-label="View my DevOps projects">
            See My Projects
          </Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default DevOpsSkillsSection;
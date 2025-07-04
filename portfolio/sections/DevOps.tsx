import { motion } from "framer-motion";
import { SiDocker, SiDigitalocean, SiNginx, SiServerfault, SiWatchtower } from "react-icons/si";
import { FaLock } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { DiGithubFull } from "react-icons/di";
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
        icon: <SiDocker style={{ color: "#0db7ed" }} />,
        description: "Containerizing applications for consistent development and deployment.",
      },
      {
        name: "Digital Ocean",
        icon: <SiDigitalocean style={{ color: "#0080ff" }} />,
        description: "Deploying and managing applications on Digital Ocean cloud infrastructure.",
      },
      {
        name: "Nginx",
        icon: <SiNginx style={{ color: "#009639" }} />,
        description: "Configuring web servers for high-performance hosting and load balancing.",
      },
      {
        name: "Hosting",
        icon: <SiWatchtower style={{ color: "#f97316" }} />,
        description: "Setting up and managing hosting environments for web applications.",
      },
      {
        name: "SSL Configurations",
        icon: <FaLock style={{ color: "#4b5563" }} />,
        description: "Implementing secure HTTPS connections with SSL/TLS certificates.",
      },
      {
        name: "Server Management",
        icon: <SiServerfault style={{ color: "#f97316" }} />,
        description: "Overseeing server health, performance, and security for optimal uptime.",
      },
      {
        name: "Deployment Automation(Github Actions)",
        icon: <DiGithubFull style={{ color: "#f97316" }} />,
        description: "Automating deployment processes using GitHub Actions for continuous integration and delivery.",
      },
      {
        name: "Azure",
        icon: <VscAzure style={{ color: "#0078d4" }} />,
        description: "Utilizing Microsoft Azure for cloud services, including virtual machines and databases.",
      }
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
        <Description variants={itemVariants}>
          Of all the projects that I have worked on, I also participated in designing, deploying, and maintaining robust DevOps pipelines and cloud infrastructure. My experience spans containerization, automation, and secure deployments, ensuring reliable and scalable solutions for modern web applications.
        </Description>
        <ButtonWrapper variants={itemVariants}>
          <Button href="/projects" aria-label="View my DevOps projects">
            See My Projects
          </Button>
        </ButtonWrapper>
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

      </Container>
    </Section>
  );
};

export default DevOpsSkillsSection;
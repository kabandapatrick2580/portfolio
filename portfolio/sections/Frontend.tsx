import { motion } from "framer-motion";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiCss3, SiNextdotjs } from "react-icons/si";
import { DiResponsive } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
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
const FontSize = "5rem";
const frontendSkills = [
  {
    category: "Front-End & Mobile Development",
    items: [
      {
        name: "React",
        icon: <FaReact style={{ color: "#3b82f6", fontSize: FontSize }} />,
        description: "Building dynamic, responsive web UIs with hooks and state management.",
      },
      {
        name: "React Native",
        icon: <TbBrandReactNative style={{ color: "#3c82f6", fontSize: FontSize }} />,
        description: "Developing cross-platform mobile apps with native-like performance.",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare style={{ color: "#facc15", fontSize: FontSize }} />,
        description: "Core language for interactive web and mobile features.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript style={{ color: "#2563eb", fontSize: FontSize }} />,
        description: "Enhancing code reliability with type safety in React projects.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss style={{ color: "#14b8a6", fontSize: FontSize }} />,
        description: "Crafting modern, responsive designs efficiently.",
      },
      {
        name: "CSS3",
        icon: <SiCss3 style={{ color: "#7dd3fc", fontSize: FontSize }} />,
        description: "Styling web and mobile interfaces with animations and layouts.",
      },
      // Add more skills as needed
      {
        name: "Next.js",
        icon: <SiNextdotjs style={{ color: "black", fontSize: FontSize }} />,
        description: "Building server-rendered React applications for better performance and SEO.",
      },

      {
        name: "Responsive Design",
        icon: <DiResponsive style={{ color: "blue", fontSize: FontSize }} />,
        description: "Ensuring applications look great on all devices with flexible layouts.",
      },
    ],
  },
];

const Frontend = () => {
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
          Front-End Skills
        </Title>
        <Grid variants={containerVariants} initial="hidden" animate="visible">
          {frontendSkills[0].items.map((skill, index) => (
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
          With a passion for creating intuitive and engaging user interfaces, I leverage React and
          React Native to build responsive web and mobile applications. My projects demonstrate my
          growing expertise, and I’m committed to continuously advancing my front-end skills.
        </Description>
        <ButtonWrapper variants={itemVariants}>
          <Button href="/projects" aria-label="View my front-end projects">
            See My Projects
          </Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
};

export default Frontend;
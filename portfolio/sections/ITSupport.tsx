import { motion } from "framer-motion";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiCss3 } from "react-icons/si";
import { FcOnlineSupport } from "react-icons/fc";
import { RiAdminFill } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { MdInstallDesktop } from "react-icons/md";
import { TbRestore } from "react-icons/tb";
import { BiSolidNetworkChart } from "react-icons/bi";


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

const itSupportSkills = [
  {
    category: "IT Support & Troubleshooting",
    items: [
      {
        name: "Network Configuration",
        icon: <BiSolidNetworkChart style={{ color: "#3b82f6", fontSize: "5rem" }} />,
        description: "Setting up and managing network devices and protocols.",
      },
      {
        name: "System Administration",
        icon: <RiAdminFill style={{ color: "#facc15", fontSize: "5rem" }} />,
        description: "Maintaining and troubleshooting operating systems and software.",
      },
      {
        name: "Technical Support",
        icon: <FcOnlineSupport  style={{ color: "#2563eb", fontSize: "5rem" }} />,
        description: "Providing assistance with hardware and software issues.",
      },
      {
        name: "Hardware Repair",
        icon: <GiAutoRepair style={{ color: "#14b8a6", fontSize: "5rem" }} />,
        description: "Diagnosing and fixing physical components of computers.",
      },
      {
        name: "Software Installation",
        icon: <MdInstallDesktop style={{ color: "#7dd3fc", fontSize: "5rem" }} />,
        description: "Installing and configuring software applications.",
      },
      {
        name: "Data Recovery",
        icon: <TbRestore style={{ color: "#3b82f6", fontSize: "5rem" }} />,
        description: "Recovering lost or corrupted data from storage devices.",
      },
    ],
  },
];

const ITSupport = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <Section>
      <Container>
        <Title>IT Support & Troubleshooting</Title>
        <Description>
          Before I became a developer, I worked as an IT support specialist, where I honed my skills in troubleshooting and resolving technical issues. This experience has given me a strong foundation in understanding user needs and providing effective solutions.
          My background in IT support allows me to approach development with a user-centric mindset, ensuring that the applications I build are not only functional but also user-friendly and reliable.
        </Description>
        <Grid
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {itSupportSkills[0].items.map((skill, index) => (
            <Card key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              <CardHeader>
                {skill.icon && <StyledIcon>{skill.icon}</StyledIcon>}
                <CardTitle>{skill.name}</CardTitle>
              </CardHeader>
              <CardDesc>{skill.description}</CardDesc>
            </Card>
          ))}
        </Grid>

        <ButtonWrapper>
          <Button>Contact Me</Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
}
export default ITSupport;
import { FaSearch} from "react-icons/fa";
import { SiGooglesearchconsole, SiGoogleanalytics, SiPodcastindex, SiAmazoncloudwatch, SiFusionauth } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
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

const seoSkills = [
  {
    category: "Search Engine Optimization",
    items: [
      {
        name: "Keyword Research",
        icon: <FaSearch style={{ color: "#3b82f6" }} />,
        description: "Identifying high-impact keywords to drive organic traffic using tools like Ahrefs and SEMrush.",
      },
      {
        name: "On-Page SEO",
        icon: <SiPodcastindex style={{ color: "#facc15" }} />,
        description: "Optimizing content, meta tags, and site structure for better search rankings.",
      },
      {
        name: "Technical SEO",
        icon: <SiAmazoncloudwatch style={{ color: "#34d399" }} />,
        description: "Enhancing site performance, crawlability, and indexing with structured data and sitemaps.",
      },
      {
        name: "Link Building",
        icon: <SiFusionauth style={{ color: "#f97316" }} />,
        description: "Developing strategies to acquire high-quality backlinks for improved domain authority.",
      },
      {
        name: "Google Analytics",
        icon: <SiGoogleanalytics style={{ color: "#f97316" }} />,
        description: "Analyzing traffic and user behavior to optimize SEO performance.",
      },
      {
        name: "Google Search Console",
        icon: <SiGooglesearchconsole style={{ color: "#34a853" }} />,
        description: "Monitoring and resolving indexing issues to ensure search visibility.",
      },
      {
        name: "Semantic HTML",
        icon: <SiCss3 style={{ color: "#7dd3fc" }} />,
        description: "Writing clean, accessible HTML for better SEO and user experience.",
      },
    ],
  },
];

const SEOSkillsSection = () => {
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
          SEO Skills
        </Title>
                <Description variants={itemVariants}>
          With over two years of SEO expertise, I optimize websites to boost organic traffic and search rankings. My skills in keyword research, technical SEO, and analytics complement my full stack development, ensuring performant and discoverable web applications.
        </Description>
        <ButtonWrapper variants={itemVariants}>
          <Button href="/projects" aria-label="View my SEO projects">
            See My Projects
          </Button>
        </ButtonWrapper>
        <Grid variants={containerVariants} initial="hidden" animate="visible">
          {seoSkills[0].items.map((skill, index) => (
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

export default SEOSkillsSection;
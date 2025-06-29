// pages/projects/index.tsx
import { projects } from "@/data/ProjectsData";
import Link from "next/link";
import Head from "next/head";
import { ProjectBox, ProjectIcon, ProjectDetails, Subtitle, ProjectTittle, ProjectDescription, IconsRow, IconBox, IconBoxFill, IconLabel,IconLabel_2, ProjectsSection, Container } from '@/styles/Card.styled';
import { MdReadMore } from "react-icons/md";
import { LiaGlobeSolid } from "react-icons/lia";


export default function Projects() {
  return (
    <Container>
      <Head>
        <title>Projects | Patrick Kabanda</title>
        <meta name="description" content="Explore my portfolio of projects built with modern technologies." />
      </Head>
      <ProjectsSection>
          {projects.map((project) => (
            <ProjectBox
              key={project.id} // Use project.id instead of index
            >
              <ProjectIcon>
                <span>
                  {project.id}
                </span>
              </ProjectIcon>
              <ProjectDetails>
                  <Subtitle>
                    {project.categories.join(", ")}
                  </Subtitle>
                  <ProjectTittle>{project.title}</ProjectTittle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <IconsRow>
                      {project.url && (
                        <Link href={project.url} target="_blank" rel="noopener noreferrer">
                          <IconBox>
                            <LiaGlobeSolid />
                            <IconLabel>Web</IconLabel>
                          </IconBox>
                        </Link>
                      )}
                      {project.title && (
                        <Link href={`/projects/${project.id}`} passHref rel="noopener noreferrer">
                        <IconBoxFill>
                              <MdReadMore />
                            <IconLabel_2>Details</IconLabel_2>
                          
                        </IconBoxFill>
                        </Link>
                      )}
                  </IconsRow>
              </ProjectDetails>
            </ProjectBox>
          ))}
      </ProjectsSection>
    </Container>
  );
}
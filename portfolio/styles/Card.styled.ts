import styled from 'styled-components';
import { motion } from 'framer-motion';


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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    h3 {
        font-size: 1rem;
        font-weight: bold;
        color: #1a2745;
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr 1fr; // Two columns on medium screens
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr; // Stack on small screens
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


export {
  IconsRow,
  IconBox,
  IconBoxFill,
  IconLabel,
  ProjectsSection,
  Project,
  ProjectBox,
  ProjectDetails,
  Subtitle,
  ProjectTittle,
  ProjectDescription,
  ProjectIcon,
  iconColor
};
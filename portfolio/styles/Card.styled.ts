import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, typography} from '@/styles/constants';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: black;
  color: #e0e7ff;
  font-family: 'Inter', sans-serif;
  width: 100%;
`;
const IconsRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 5px
`;

const IconBox = styled(motion.div)`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  gap: 0.5rem;
  padding: 2px 5px;
  outline: 1px solid ${colors.textTertiary};
  color: ${colors.textTertiary};
  border-radius: 0.5rem;
    &:hover {
    background-color: #cbd5e1; // gray-300
  }
  transition: background-color 0.3s ease;
`;
export const ContactIcon = styled.div`
  color: ${colors.textTertiary};
  display: flex;
  gap: 1rem;
  `;
const IconBoxFill = styled(IconBox)`
  background-color: ${colors.textTertiary};
  outline: none;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: ${colors.textQuaternary};
    color: black;
  }
  transition: background-color 0.3s ease;
  `;

const IconLabel = styled.span`
  font-size: 0.5rem;
  color: ${colors.textTertiary};
`;

const IconLabel_2 = styled.span`
  font-size: 0.5rem;
  color: black;
`

const ProjectsSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    margin-top: 2rem;
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
  background-color: ${colors.glassBg}; 
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  cursor: pointer;
  gap: 0.5rem;
`;

export const FormContainer = styled(motion.div)`
  min-width: 600px;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${colors.textPrimary};
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizeBody};
  font-weight: 400;
  position: relative;
  padding: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;

}`
const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const Subtitle = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: ${colors.textTertiary};
  `;

const ProjectTittle = styled.h4`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.textTertiary}
`;
const ProjectDescription = styled.p`
  font-size: 8px;
  font-weight: 400;
  color: ${colors.textColor};
  @media (max-width: 768px) {
    max-width: 100%;
    white-space: normal;
  }
`;

const ProjectIcon = styled.div`
  height: 100%;
  background-color: ${colors.textTertiary}; // gray-200
  border-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  color: black;
`;


const iconColor = styled.span`
  color: #1a2745; // navy-800
  font-size: 1.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${colors.border};
  border-radius: 0.375rem;
  background-color: ${colors.glassBg};
  color: ${colors.textPrimary};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.textTertiary};
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${colors.border};
  border-radius: 0.375rem;
  background-color: ${colors.glassBg};
  color: ${colors.textPrimary};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${colors.textTertiary};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${colors.textTertiary};
  color: black;
  font-weight: bold;
  border: none;
  border-radius: 0.375rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  transition: scale 0.2s ease;
  &:hover {
    scale: 1.05;
  }
  
  &:disabled {
    background-color: #d1d5db; // gray-300
    cursor: not-allowed;
  }
`;
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
  iconColor,
  IconLabel_2
};

export const TwoColumns = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
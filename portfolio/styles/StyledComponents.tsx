import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "./constants";

// Extend DefaultTheme to include darkMode
declare module "styled-components" {
  export interface DefaultTheme {
    darkMode?: boolean;
  }
}

// Reusable styled components
export const Section = styled.section`
  padding-bottom: 4rem;
`;

export const Container = styled.div`
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const Title = styled(motion.h2)`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  text-align: left;
  margin-left: 2rem;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, #7acfbb, #abfcf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  ${({ theme }) => theme.darkMode && `color: #fff;`}
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled(motion.div)`
  background: ${colors.glassBg};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  width: 100%;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1),
      0 4px 6px -2px rgba(59, 130, 246, 0.05);
  }

  ${({ theme }) => theme.darkMode && `background: #1f2937;`}
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
    color: ${colors.textTertiary}!important;

  ${({ theme }) => theme.darkMode && `color: #fff;`}
`;

export const CardDesc = styled.p`
  color: #90a1a3;
  font-size: 0.875rem;

  ${({ theme }) => theme.darkMode && `color: #d1d5db;`}
`;

export const StyledIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 5rem;
`;

export const Description = styled(motion.p)`
  text-align: left;
  color: ${colors.textColor};
  max-width: 42rem;
  margin-left: 2rem;
  margin-bottom: 2rem;
  ${({ theme }) => theme.darkMode && `color: #d1d5db;`}
`;

export const ButtonWrapper = styled(motion.div)`
  text-align: left;
  margin: 1rem 2rem;

`;

export const Button = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #7acfbb, #abfcf8);
  color: #000000;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(90deg, #6ab8a0, #9df1e2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: #000000;
    font-weight: 600;
  }
`;
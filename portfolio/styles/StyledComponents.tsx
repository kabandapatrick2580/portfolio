import styled from "styled-components";
import { motion } from "framer-motion";
import { DefaultTheme } from "styled-components";

// Extend DefaultTheme to include darkMode
declare module "styled-components" {
  export interface DefaultTheme {
    darkMode?: boolean;
  }
}

// Reusable styled components
export const Section = styled.section`
  padding-top: 4rem;
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
`;

export const Title = styled(motion.h2)`
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 3rem;

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
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled(motion.div)`
  background: #fff;
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
  color: #1f2937;

  ${({ theme }) => theme.darkMode && `color: #fff;`}
`;

export const CardDesc = styled.p`
  color: #4b5563;
  font-size: 0.875rem;

  ${({ theme }) => theme.darkMode && `color: #d1d5db;`}
`;

export const StyledIcon = styled.span`
  margin-right: 0.75rem;
  font-size: 1.25rem;
`;

export const Description = styled(motion.p)`
  text-align: center;
  color: #4b5563;
  margin-top: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.darkMode && `color: #d1d5db;`}
`;

export const ButtonWrapper = styled(motion.div)`
  text-align: center;
  margin-top: 1rem;
`;

export const Button = styled.a`
  display: inline-block;
  background: #2563eb;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: #1d4ed8;
  }
`;
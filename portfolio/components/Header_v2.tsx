import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { colors, shadows } from '@/styles/constants';

interface SidebarProps {
  $isOpen: boolean;
}

// Styled Components
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
  margin-bottom: 2rem;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const HamburgerButton = styled.button<SidebarProps>`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  z-index: 1100;
  display: ${({ $isOpen }) => ($isOpen ? 'none' : 'block')};
  position: absolute;
  top: 10px;
  right: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-shadow: ${shadows.glowWhite};
    transition: opacity 0.3s ease-in-out;
    z-index: 2200;
  }

  &:hover::before {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    display: block;
    font-size: 28px;
    display: ${({ $isOpen }) => ($isOpen ? 'none' : 'block')};

  }
`;

const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background-color: ${colors.cardBg};
  transition: right 0.5s ease-in-out;
  z-index: 1000;
  padding: 20px;
  color: #fff;

  @media (max-width: 768px) {
    width: 200px;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 60px;

  li {
    margin: 20px 0;

    a { /* Target the <a> rendered by Link */
      color: #fff;
      text-decoration: none;
      font-size: 18px;

      &:hover {
        color: ${colors.textTertiary};
      }
    }
  }
`;

// Header Component
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <Logo></Logo>
        <HamburgerButton $isOpen={isOpen} onClick={toggleSidebar}>
          <FaBars />
        </HamburgerButton>
      </HeaderWrapper>
      <Sidebar $isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          <FaTimes />
        </CloseButton>
        <NavLinks>
          <li>
            <Link href="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about" onClick={toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleSidebar} target='_blank'>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
        </NavLinks>
      </Sidebar>
    </>
  );
};

export default Header;
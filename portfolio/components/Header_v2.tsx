import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { colors } from '@/styles/constants';

interface SidebarProps {
  isOpen: boolean;
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
  margin-bottom:2rem
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
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
`;

const Sidebar = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background-color: ${colors.glassBg};
  transition: right 0.5s ease-in-out;
  z-index: 1000;
  padding: 20px;
  color: #fff;
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
    a {
      color: #fff;
      text-decoration: none;
      font-size: 18px;
      &:hover {
        color: #00ff88;
      }
    }
  }
`;

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HeaderWrapper>
        <Logo></Logo>
        <HamburgerButton isOpen={isOpen} onClick={toggleSidebar}>
          <FaBars />
        </HamburgerButton>
      </HeaderWrapper>
      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          <FaTimes />
        </CloseButton>
        <NavLinks>
          <li><a href="/" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#about" onClick={toggleSidebar}>About</a></li>
          <li><a href="/projects" onClick={toggleSidebar}>Projects</a></li>
          <li><a href="#contact" onClick={toggleSidebar}>Contact</a></li>
        </NavLinks>
      </Sidebar>
    </>
  );
};

export default Header;
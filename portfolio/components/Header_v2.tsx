// components/Header.js
import styled from 'styled-components';
import Link from 'next/link';

// Styled components
const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  width: 100%;
  height: 80px;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack on mobile */
    height: auto;
    padding: 10px 0;
  }
`;

const LeftSection = styled.div`
  background-color: #062c2d;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;

  @media (max-width: 768px) {
    height: 60px;
    width: 100%;
  }
`;

const RightSection = styled.div`
  background-color:rgb(187, 208, 208);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 10px;
    width: 100%;
  }
`;

const LogoPlaceholder = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 8px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically */
    align-items: center;
    gap: 10px;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #062c2d;
      
    }
  }

  @media (max-width: 768px) {
    a {
      font-size: 18px; /* Larger text for mobile */
    }
  }
`;

// Header component
const Header_v2 = () => {
  return (
    <HeaderContainer>
      <LeftSection>
        <LogoPlaceholder />
      </LeftSection>
      <RightSection>
        <NavList>
          <NavItem>
            <Link href="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link href="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link href="/services">Services</Link>
          </NavItem>
          <NavItem>
            <Link href="/contact">Contact</Link>
          </NavItem>
        </NavList>
      </RightSection>
    </HeaderContainer>
  );
};

export default Header_v2;
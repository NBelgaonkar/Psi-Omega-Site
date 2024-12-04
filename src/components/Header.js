import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import crestImage from '../Images/Psi-Omega-Crest.png';

const HeaderContainer = styled.header`
  background-color: ${({ isHomePage }) =>
    isHomePage ? 'rgba(15, 14, 61, 0.8)' : '#0F0E3D'}; /* Transparent for homepage, solid for others */
  position: ${({ isHomePage }) => (isHomePage ? 'sticky' : 'fixed')}; /* Sticky for homepage, fixed for others */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 20px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: ${({ isHomePage }) => (isHomePage ? 'blur(5px)' : 'none')}; /* Blur effect for homepage */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const PageContentOffset = styled.div`
  margin-top: ${({ isHomePage }) => (isHomePage ? '0' : '100px')}; /* Add space below header for non-homepage */
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
`;

const CrestImage = styled.img`
  height: 80px;
  margin-right: 15px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 0 15px;
  color: white;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #d4af37;
  }
`;

const NavLinkStyled = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #d4af37;
  }
`;

const Header = ({ children }) => {
  const location = useLocation();

  // Check if the current route is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <>
      <HeaderContainer isHomePage={isHomePage}>
        {/* Crest Logo Link */}
        <Logo to="/">
          <CrestImage src={crestImage} alt="DKE Crest" />
        </Logo>

        {/* Navigation Links */}
        <Nav>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/about">About Us</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/calendar">Calendar</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/alumni">Alumni</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/contact">Contact Us</NavLinkStyled>
          </NavItem>
        </Nav>
      </HeaderContainer>

      {/* Offset content to avoid overlap for non-homepage */}
      <PageContentOffset isHomePage={isHomePage}>{children}</PageContentOffset>
    </>
  );
};

export default Header;

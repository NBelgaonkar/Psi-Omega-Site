import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #231942;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  max-width: 1200px;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  margin-left: -320px;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: -320px;
`;

const NavItem = styled.li`
  margin-right: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  &.active {
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <LogoWrapper>
          <Logo to="/"></Logo>
        </LogoWrapper>
        <NavMenu>
          <NavItem>
            <NavLinkStyled to="/" exact activeClassName="active">
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/about" activeClassName="active">
              About Us
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/FAQ" activeClassName="active">
              FAQ
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/history" activeClassName="active">
              History
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/Calender" activeClassName="active">
              Calender
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/DkesDiner" activeClassName="active">
              DKES Diner
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/roster" activeClassName="active">
              Meet the Eboard
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/order" activeClassName="active">
              Pancake Order
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/whyDKE" activeClassName="active">
              Why choose DKE?
            </NavLinkStyled>
          </NavItem>
          
        </NavMenu>
<<<<<<< HEAD
        <SocialIcons>
          <IconLink href="https://www.instagram.com/dke_rpi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </IconLink>
          <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </IconLink>
          <IconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </IconLink>
        </SocialIcons>
=======
>>>>>>> parent of e2c356c (header icons)
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`;

const NavItem = styled.li`
  margin-right: 15px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 5px;
  font-size: 0.9rem;
  &.active {
    font-weight: bold;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
`;

const IconLink = styled.a`
  color: #fff;
  margin-left: 10px;
  font-size: 1.2rem;
  text-decoration: none;

  &:hover {
    color: #d4af37;
  }
`;

const Header = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <NavMenu>
          <NavItem>
            <NavLinkStyled to="/" exact>Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/about">About Us</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/FAQ">FAQ</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/history">History</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/calendar">Calendar</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/DkesDiner">DKES Diner</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/roster">Meet the Eboard</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/order">Pancake Order</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/whyDKE">Why choose DKE?</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/newhouse">New House</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/rush">Rush & Recruitment</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/philanthropy">Philanthropy</NavLinkStyled>
          </NavItem>
        </NavMenu>
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
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;
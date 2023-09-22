import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #231942;
  color: #fff;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
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
  margin-right: 20px;
`;


const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
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
          <Logo to="/">DKE</Logo>
        </LogoWrapper>
        <NavMenu>
          <NavItem>
            <NavLinkStyled to="/" exact activeClassName="active">
              Home
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/about" activeClassName="active">
              About
            </NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/projects" activeClassName="active">
              Projects
            </NavLinkStyled>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;

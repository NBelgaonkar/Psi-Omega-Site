import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  background-color: #333;
  color: #fff;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
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
        <Logo to="/">RPI CogSci</Logo>
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

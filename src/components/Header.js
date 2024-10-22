import React, { useState } from 'react';
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
  align-items: center;
  padding: 20px 50px;
  max-width: 1600px;
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
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto; /* Pushes the menu items to the far right */
`;

const NavItem = styled.li`
  position: relative;
  margin-left: 20px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 10px;

  &.active {
    font-weight: bold;
  }

  &:hover {
    color: #d4af37;
  }
`;

/* Dropdown components */
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #d4af37;
  }

  &:after {
    content: ' ▼'; /* Adds the dropdown arrow */
    font-size: 0.6em;
  }
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #231942;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownItemLink = styled(Link)`
  display: block;
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    background-color: #555;
  }
`;

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <DropdownToggle href="#" onClick={(e) => e.preventDefault()}>
        {label}
      </DropdownToggle>
      <DropdownMenu isOpen={isOpen}>
        {items.map((item, index) => (
          <DropdownItemLink to={item.to} key={index}>
            {item.label}
          </DropdownItemLink>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

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
            <Dropdown
              label="About Us"
              items={[
                { to: '/history', label: 'History' },
                { to: '/roster', label: 'Meet the Eboard' },
                { to: '/FAQ', label: 'FAQ' },
                { to: '/philo', label: 'Philanthropy' }
              ]}
            />
          </NavItem>
          <NavItem>
            <Dropdown
              label="Events"
              items={[
                { to: '/calendar', label: 'Calendar' },
                { to: '/DkesDiner', label: "DKE's Diner" },
                { to: '/order', label: 'Pancake Order' },
              ]}
            />
          </NavItem>
          <NavItem>
            <Dropdown
              label="Alumni"
              items={[
                { to: '/news', label: 'News' },
                { to: '/whyDKE', label: 'Why choose DKE?' },
              ]}
            />
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;

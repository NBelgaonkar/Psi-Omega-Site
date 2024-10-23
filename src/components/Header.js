import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Wrapper for the whole navigation bar
const NavWrapper = styled.nav`
  background-color: #231942;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

// Container to organize items in the nav bar
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 50px;
  max-width: 1600px;
  margin: 0 auto;
`;

// Wrapper for the logo section
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Style for the logo, clickable link to home
const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

// List for holding the nav menu items
const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto; /* Moves the menu to the right */
`;

// Each item in the navigation bar
const NavItem = styled.li`
  position: relative;
  margin-left: 20px;
`;

// Style for each clickable nav link
const NavLinkStyled = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 10px;

  &.active {
    font-weight: bold; /* Makes the active link bold */
  }

  &:hover {
    color: #d4af37; /* Changes color on hover */
  }
`;

// Wrapper for dropdown menus
const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Style for the dropdown toggle button
const DropdownToggle = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  &:hover {
    color: #d4af37; /* Hover effect */
  }

  &:after {
    content: ' ▼'; /* Adds arrow to show dropdown */
    font-size: 0.6em;
  }
`;

// Styles for the dropdown menu
const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')}; /* Toggle visibility */
  position: absolute;
  background-color: #231942;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

// Style for each item in the dropdown
const DropdownItemLink = styled(Link)`
  display: block;
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;

  &:hover {
    background-color: #555; /* Change background color on hover */
  }
`;

// Component for handling dropdown functionality
const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false); // Toggle state for dropdown

  return (
    <DropdownContainer
      onMouseEnter={() => setIsOpen(true)} // Open on hover
      onMouseLeave={() => setIsOpen(false)} // Close when mouse leaves
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

// The main Header component
const Header = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <LogoWrapper>
          <Logo to="/">DKE</Logo> {/* Clicking logo goes to home */}
        </LogoWrapper>
        <NavMenu>
          {/* 1. About Us section with dropdown */}
          <NavItem>
            <Dropdown
              label="About Us"
              items={[
                { to: '/officers', label: 'Officers' },
                { to: '/brotherhood', label: 'Brotherhood' },
                { to: '/philanthropy', label: 'Philanthropy' },
                { to: '/local-history', label: 'Local History' },
                { to: '/chapter-house', label: 'Chapter House' },
              ]}
            />
          </NavItem>

          {/* 2. Events section with dropdown */}
          <NavItem>
            <Dropdown
              label="Events"
              items={[
                { to: '/rush-calendar', label: 'Rush Calendar' },
                { to: '/upcoming-events', label: 'Upcoming Events' },
              ]}
            />
          </NavItem>

          {/* 3. Alumni section with dropdown */}
          <NavItem>
            <Dropdown
              label="Alumni"
              items={[
                { to: '/psi-omega', label: 'Psi Omega Alumni Association' },
                { to: '/alumni-events', label: 'Alumni Events' },
                { to: '/get-involved', label: 'How to Get Involved' },
              ]}
            />
          </NavItem>

          {/* 4. Contact Us section with dropdown */}
          <NavItem>
            <Dropdown
              label="Contact Us"
              items={[
                { to: '/eboard-inquiry', label: 'Eboard Inquiry' },
                { to: '/donations', label: 'Donations' },
              ]}
            />
          </NavItem>

          {/* 5. FAQ link, no dropdown */}
          <NavItem>
            <NavLinkStyled to="/FAQ" exact activeClassName="active">
              FAQ
            </NavLinkStyled>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;

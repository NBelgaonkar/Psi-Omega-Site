import React, {  } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import crestImage from '../Images/Psi-Omega-Crest.png'; // Update this path to the crest image

const HeaderContainer = styled.header`
  background-color: #221F73; // Dark blue color for the header
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
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
  height: 50px; // Adjust the size as needed
  margin-right: 10px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
  margin: 0 15px;
  color: white;
  font-size: 18px;

  &:hover > ul {
    display: block;
  }
`;

// Styled link component for the header
const NavLinkStyled = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    color: #d4af37; // Optional: change color on hover
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  background-color: #221F73;
  list-style: none;
  padding:0;
  margin: 0;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1500
`;

const DropdownItem = styled.li`
  padding: 8px 20px;
  white-space: nowrap;

  &:hover {
    background-color: #333;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

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
                { to: '/roster', label: 'Officers' },
                { to: '/brotherhood', label: 'Brotherhood' },
                { to: '/philo', label: 'Philanthropy' },
                { to: '/history', label: 'Local History' },
                { to: '/chapter', label: 'Chapter House' },


              ]}
            />
          </NavItem>

          {/* 2. Events section with dropdown */}
          <NavItem>
            <Dropdown
              label="Events"
              items={[
                { to: '/news', label: 'Updates' },
                { to: '/calendar', label: 'Rush Calendar' },
                // { to: '/upcoming-events', label: 'Upcoming Events' },
                { to: '/DkesDiner', label: 'Dekes Diner' },
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
                { to: '/contactus', label: 'Contact Info' },
                { to: '/donations', label: 'Donations' },
              ]}
            />
          </NavItem>

          {/* 5. FAQ link, no dropdown */}
          <NavItem>
            <NavLinkStyled to="/faq" exact activeClassName="active">
              FAQ
            </NavLinkStyled>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </NavWrapper>
    <HeaderContainer>
      {/* Crest Logo Link to Home */}
      <Logo to="/">
        <CrestImage src={crestImage} alt="DKE Crest" />
      </Logo>

      {/* Navigation Links */}
      <Nav>
        <NavItem>
          About Us
          <DropdownMenu>
            <DropdownItem>
              <Link to="/about/officers">Officers</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/about/brotherhood">Brotherhood</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/about/philanthropy">Philanthropy</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/about/history">History</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/about/house">Chapter House</Link>
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
        
        <NavItem>
          Calendar
          <DropdownMenu>
            <DropdownItem>
              <Link to="/calendar/rush">Rush Calendar</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/calendar/upcoming">Upcoming</Link>
            </DropdownItem>
          </DropdownMenu>
        </NavItem>

        <NavItem>
          Alumni
          <DropdownMenu>
            <DropdownItem>
              <Link to="/alumni/POAA">Psi Omega Alumni Association</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/alumni/events">Recent Events</Link>
            </DropdownItem>
            <DropdownItem>
              <Link to="/alumni/get-involved">Get Involved</Link>
            </DropdownItem>
          </DropdownMenu>
        </NavItem>

        <NavItem>
          <NavLinkStyled to="/faq">FAQs</NavLinkStyled>
        </NavItem>
        
        <NavItem>
          <NavLinkStyled to="/contact">Contact Us</NavLinkStyled>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

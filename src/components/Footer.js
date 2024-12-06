import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa"; // Import required icons
import crestImage from "../Images/Psi-Omega-Crest.png"; // Path to crest logo

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #002d72; /* Blue background */
  color: #ffc72c; /* Gold text */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 0; /* Scalable padding */
  border-top: 1px solid #ccc;
  width: 100%;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive grid layout */
  gap: 1.5rem; /* Use rem for consistent spacing */
  width: 100%; /* Full width */
  max-width: 1200px; /* Limit the width for large screens */
  padding: 0 2%; /* Use percentages for scalable padding */
  margin: 0 auto; /* Center content */
`;

const Section = styled.div`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: flex-start;
  text-align: left;

  &:first-child {
    justify-self: start; /* Align the left section to the start */
  }

  &:last-child {
    justify-self: end; /* Align the right section to the end */
    text-align: right; /* Ensure text is aligned properly */
  }

  img {
    width: 8rem; /* Use rem for consistent scaling */
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem; /* Scalable font size */
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0.5rem 0; /* Use rem for scalable spacing */
      font-size: 1rem;
    }

    a {
      text-decoration: none;
      color: #ffc72c;
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem; /* Scalable font size */
    margin-top: 1.5rem;
    margin-bottom: 0;
    color: #ffc72c;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Use rem for consistent spacing */
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: #002d72;
    background-color: #ffc72c;
    width: 2.5rem; /* Scalable width and height */
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ffd700;
      color: #002d72;
    }

    .icon {
      font-size: 1.25rem; /* Scalable icon size */
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 0.875rem; /* Scalable font size */
  margin-top: 1.5rem;
  color: #ffc72c;
`;

/* Media queries for smaller screens */
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Left Section */}
        <Section>
          <img src={crestImage} alt="Crest Logo" />
          <p>DELTA KAPPA EPSILON PSI OMEGA AT RPI</p>
          <p>
            1599 Tibbits Avenue<br />
            Troy, New York 12180
          </p>
        </Section>

        {/* Center Section - More Info */}
        <Section>
          <h3>More Info</h3>
          <ul>
            <li>
              <a href="/about/brotherhood">Brotherhood Info</a>
            </li>
            <li>
              <a href="/calendar/upcoming">Upcoming Events</a>
            </li>
            <li>
              <a href="/about/history">Chapter History</a>
            </li>
          </ul>
        </Section>

        {/* Center Section - How to Join */}
        <Section>
          <h3>How To Join</h3>
          <ul>
            <li>
              <a href="/calendar/rush">Rush Calendar</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </Section>

        {/* Right Section - Connect With Us */}
        <Section>
          <h3>Connect With Us</h3>
          <SocialIcons>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok className="icon" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="icon" />
            </a>
          </SocialIcons>
          <p>
            <a href="/privacy-policy" style={{ color: "#ffc72c" }}>
              Privacy Policy &gt;
            </a>
          </p>
        </Section>
      </FooterContent>

      <FooterBottom>
        © 2024 Delta Kappa Epsilon Psi Omega | Site Map | Privacy Policy
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

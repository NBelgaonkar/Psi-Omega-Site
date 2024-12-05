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
  padding: 40px 0;
  border-top: 1px solid #ccc;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between; /* Spread left and right sections to edges */
  align-items: flex-start;
  width: 100%; /* Full width to allow edge alignment */
  max-width: 1200px;
  padding: 0 20px; /* Small padding for slight spacing from page edges */
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: flex-start; /* Align elements to the left */
  text-align: left;

  &:first-child {
    text-align: left;
    margin-left: -180px; /* Move left section closer to the page edge */
  
  }

  &:last-child {
    text-align: left; /* Align content to the left */
    margin-right: -350px; /* Move right section closer to the page edge */
  }

  h3 {
    font-size: 20px;
    margin-bottom: 30px; /* Increase spacing below the header */
    text-transform: uppercase;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 10px 0;
      font-size: 18px;
    }

    a {
      text-decoration: none;
      color: #ffc72c;
    }
  }

  img {
    width: 120px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    margin-top: 30px; /* Increase spacing above Privacy Policy */
    margin-bottom: 0;
    color: #ffc72c;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to form rows */
  gap: 10px; /* Adjust space between icons */
  margin-bottom: 30px; /* Add more space below the icons */

  a {
    text-decoration: none;
    color: #002d72; /* Blue icon color (inside gold background) */
    background-color: #ffc72c; /* Gold circle background */
    width: 45px; /* Icon container size */
    height: 45px; /* Match width for circular size */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%; /* Make the icons circular */
    transition: all 0.3s ease;

    &:hover {
      background-color: #ffd700; /* Brighter gold on hover */
      color: #002d72; /* Ensure the blue remains the same */
    }

    .icon {
      font-size: 22px; /* Icon size */
    }
  }
`;




const FooterBottom = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  color: #ffc72c;
`;

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
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/events">Upcoming Events</a>
            </li>
            <li>
              <a href="/resources">Chapter Resources</a>
            </li>
          </ul>
        </Section>

        {/* Center Section - How to Join */}
        <Section>
          <h3>How To Join</h3>
          <ul>
            <li>
              <a href="/rush-info">Rush Information</a>
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

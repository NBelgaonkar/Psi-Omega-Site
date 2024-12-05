import React from "react";
import styled from "styled-components";
import crestImage from "../Images/Psi-Omega-Crest.png"; // Path to crest logo

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: white;
  color: black;
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
  text-align: center;

  &:first-child {
    text-align: left;
    margin-left: -170px; /* Move left section closer to the page edge */
  }

  &:last-child {
    text-align: right;
    margin-right: -170px; /* Move right section closer to the page edge */
  }

  h3 {
    font-size: 20px;
    margin-bottom: 15px;
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
      color: black;
    }
  }

  img {
    width: 120px;
    margin-bottom: 15px;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 20px;
  color: gray;
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

        {/* Right Section */}
        <Section>
          <h3>Brothers Only</h3>
          <ul>
            <li>
              <a href="/login">Member Login</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </Section>
      </FooterContent>

      <FooterBottom>
        © 2024 Delta Kappa Epsilon Psi Omega | Site Map | Privacy Policy
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

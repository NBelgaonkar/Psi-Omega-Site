import React from "react";
import styled from "styled-components";
import crestImage from "../Images/Psi-Omega-Crest.png"; // Path to crest logo

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: white; /* Footer background */
  color: black; /* Text color */
  display: flex;
  justify-content: space-between; /* Space out the sections */
  align-items: flex-start; /* Align items at the top for larger content */
  padding: 40px 60px; /* Increase padding for spacing */
  flex-wrap: wrap; /* Ensure responsiveness */
  border-top: 1px solid #ccc; /* Optional: subtle border for separation */
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;

  img {
    width: 120px; /* Larger logo size */
    margin-bottom: 20px; /* Space between the logo and text */
  }

  p {
    margin: 0;
    font-size: 16px; /* Larger text size for address */
  }
`;

const CenterSection = styled.div`
  flex: 2;
  text-align: center;

  h3 {
    font-size: 18px; /* Larger heading text */
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 8px 0; /* More spacing between items */
      font-size: 16px; /* Larger text size for list items */
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  text-align: center;

  h3 {
    font-size: 18px; /* Larger heading text */
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 8px 0; /* More spacing between items */
      font-size: 16px; /* Larger text size for list items */
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 14px; /* Slightly larger text */
  margin-top: 30px;
  width: 100%;
  color: gray;
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        {/* Left Section with logo and address */}
        <LeftSection>
          <img src={crestImage} alt="Crest Logo" />
          <p>DELTA KAPPA EPSILON PSI OMEGA AT RPI</p>
          <p>
            1599 Tibbits Avenue<br />
            Troy, New York 12180<br />
          </p>
        </LeftSection>

        {/* Center Section with links */}
        <CenterSection>
          <h3>More Information</h3>
          <ul>
            <li>
              <a href="/parents" style={{ textDecoration: "none", color: "black" }}>
                For Parents
              </a>
            </li>
            <li>
              <a
                href="/campus-professionals"
                style={{ textDecoration: "none", color: "black" }}
              >
                For Campus Professionals
              </a>
            </li>
          </ul>
          <h3>Helpful Links</h3>
          <ul>
            <li>
              <a href="/events" style={{ textDecoration: "none", color: "black" }}>
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="/resources" style={{ textDecoration: "none", color: "black" }}>
                Chapter Resources
              </a>
            </li>
          </ul>
        </CenterSection>

        {/* Right Section with "Brothers Only" */}
        <RightSection>
          <h3>Brothers Only</h3>
          <ul>
            <li>
              <a href="/login" style={{ textDecoration: "none", color: "black" }}>
                Member Login
              </a>
            </li>
            <li>
              <a href="/contact" style={{ textDecoration: "none", color: "black" }}>
                Contact Us
              </a>
            </li>
          </ul>
        </RightSection>
      </FooterContainer>

      {/* Bottom Section */}
      <FooterBottom>
        © 2024 Delta Kappa Epsilon Psi Omega | Site Map | Privacy Policy
      </FooterBottom>
    </>
  );
};

export default Footer;

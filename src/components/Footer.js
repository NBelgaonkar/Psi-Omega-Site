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
  padding: 50px 80px; /* Increase padding for spacing */
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
    width: 140px; /* Larger logo size */
    margin-bottom: 20px; /* Space between the logo and text */
  }

  p {
    margin: 5px 0;
    font-size: 18px; /* Larger text size for address */
  }
`;

const CenterSection = styled.div`
  flex: 3;
  display: flex; /* Arrange "More Info" and "How to Join" horizontally */
  justify-content: flex-start; /* Align sections closer to the left */
  gap: 200px; /* Reduce space between sections */
  text-align: left;

  .list-section {
    flex: 1;
    padding: 0 10px;
  }

  h3 {
    font-size: 20px; /* Larger heading text */
    margin-bottom: 15px;
    text-transform: uppercase;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 10px 0; /* Spacing between items */
      font-size: 18px; /* Larger text size for list items */
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  text-align: center;

  h3 {
    font-size: 20px; /* Larger heading text */
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 10px 0; /* More spacing between items */
      font-size: 18px; /* Larger text size */
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  font-size: 16px; /* Slightly larger bottom text */
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

        {/* Center Section with two horizontally spaced sections */}
        <CenterSection>
          {/* More Info Section */}
          <div className="list-section">
            <h3>More Info</h3>
            <ul>
              <li>
                <a href="/about" style={{ textDecoration: "none", color: "black" }}>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Upcoming Events
                </a>
              </li>
              <li>
                <a
                  href="/resources"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Chapter Resources
                </a>
              </li>
            </ul>
          </div>

          {/* How to Join Section */}
          <div className="list-section">
            <h3>How To Join</h3>
            <ul>
              <li>
                <a
                  href="/rush-info"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Rush Information
                </a>
              </li>
              <li>
                <a href="/faq" style={{ textDecoration: "none", color: "black" }}>
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
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

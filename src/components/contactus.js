import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import crest from '../Images/Psi-Omega-Crest.png';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaLink } from 'react-icons/fa';

// Global Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center; /* Ensures all content within is centered */
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 28px;
  margin: 10px 0;
`;

const Link = styled.a`
  color: #0047AB;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center; /* Center-aligns the icon and text horizontally */
  align-items: center;
  margin-bottom: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

const ContactSection = styled.div`
  margin-bottom: 15px; /* Spacing between sections */
`;

const Address = styled.div`
  font-size: 18px;
  line-height: 1.6;
  display: flex;
  justify-content: center; /* Center-aligns the icon and text */
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
const CrestImage = styled.img`
  width: 200px;
  margin-top: 20px;
`;
// Page Component
const ContactPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Contact Us</Title>

        {/* General Inquiries Section */}
        <ContactSection>
          <Subtitle>General Inquiries</Subtitle>
          <Link href="mailto:rpidekes@gmail.com">
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            rpidekes@gmail.com
          </Link>
        </ContactSection>

        {/* Alumni Section */}
        <ContactSection>
          <Subtitle>Alumni</Subtitle>
          <Link href="mailto:alumni.dkepsiomega@gmail.com">
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            alumni.dkepsiomega@gmail.com
          </Link>
        </ContactSection>

        {/* Marketing Section */}
        <ContactSection>
          <Subtitle>Marketing and Sponsorships</Subtitle>
          <Link href="mailto:marketing.dkepsiomega@gmail.com">
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            marketing.dkepsiomega@gmail.com
          </Link>
        </ContactSection>

        {/* Social Media Section */}
        <ContactSection>
          <Subtitle>Follow Us</Subtitle>
          <Link href="https://www.instagram.com/dke_rpi/" target="_blank">
            <IconWrapper>
              <FaInstagram />
            </IconWrapper>
            @dke_rpi
          </Link>
          <Link href="https://linktr.ee/dke_rpi" target="_blank">
            <IconWrapper>
              <FaLink />
            </IconWrapper>
            Linktree
          </Link>
        </ContactSection>

        {/* Address Section */}
        <ContactSection>
          <Subtitle>Our Address</Subtitle>
          <Address>
            <FaMapMarkerAlt />
            1599 Tibbits Ave, Troy NY 12180
          </Address>
        </ContactSection>
        <CrestImage src={crest} alt="DKE Crest" />
      </Container>
    </>
  );
};

export default ContactPage;

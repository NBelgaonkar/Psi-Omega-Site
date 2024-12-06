import React from 'react';
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaLink } from 'react-icons/fa';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Address = styled.div`
  font-size: 18px;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  svg {
    margin-right: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 20px;
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

const GridItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #0047AB;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

// Page Component
const ContactPage = () => {
  const contactItems = [
    {
      title: 'General Inquiries',
      link: 'mailto:rpidekes@gmail.com',
      text: 'rpidekes@gmail.com',
      icon: <FaEnvelope />,
    },
    {
      title: 'Alumni',
      link: 'mailto:alumni.dkepsiomega@gmail.com',
      text: 'alumni.dkepsiomega@gmail.com',
      icon: <FaEnvelope />,
    },
    {
      title: 'Marketing and Sponsorships',
      link: 'mailto:marketing.dkepsiomega@gmail.com',
      text: 'marketing.dkepsiomega@gmail.com',
      icon: <FaEnvelope />,
    },
    {
      title: 'Follow Us',
      links: [
        { href: 'https://www.instagram.com/dke_rpi/', text: '@dke_rpi', icon: <FaInstagram /> },
        { href: 'https://linktr.ee/dke_rpi', text: 'Linktree', icon: <FaLink /> },
      ],
    },
  ];

  return (
    <>
      <Container>
        <Title>Contact Us</Title>

        {/* Our Address Section */}
        <Address>
          <FaMapMarkerAlt />
          1599 Tibbits Ave, Troy NY 12180
        </Address>

        {/* Contact Information Grid */}
        <Grid>
          {contactItems.map((item, index) => (
            <GridItem key={index}>
              <Subtitle>{item.title}</Subtitle>
              {item.link && (
                <Link href={item.link}>
                  <IconWrapper>{item.icon}</IconWrapper>
                  {item.text}
                </Link>
              )}
              {item.links &&
                item.links.map((subLink, subIndex) => (
                  <Link key={subIndex} href={subLink.href}>
                    <IconWrapper>{subLink.icon}</IconWrapper>
                    {subLink.text}
                  </Link>
                ))}
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ContactPage;

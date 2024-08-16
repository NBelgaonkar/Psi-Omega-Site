// src/components/Philanthropy.js

import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 100px auto 0;
  padding: 20px;
`;

const Title = styled.h1`
  color: #231942;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  color: #5e548e;
`;

const Initiative = styled.div`
  margin-bottom: 30px;
`;

const DonateButton = styled.a`
  display: inline-block;
  background-color: #231942;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 10px;
`;

const Philanthropy = () => {
  return (
    <PageContainer>
      <Title>Our Philanthropic Efforts</Title>
      
      <Section>
        <SubTitle>Current Initiatives</SubTitle>
        <Initiative>
          <h3>Local Food Bank Drive</h3>
          <p>We're collecting non-perishable food items for our local food bank. Our goal is to donate 1000 lbs of food by the end of the semester.</p>
          <DonateButton href="#donate">Donate Now</DonateButton>
        </Initiative>
        <Initiative>
          <h3>Annual Charity Run</h3>
          <p>Join us for our annual 5K run to raise funds for children's literacy. Last year, we raised over $5000 for local schools.</p>
          <DonateButton href="#register">Register for the Run</DonateButton>
        </Initiative>
      </Section>

      <Section>
        <SubTitle>Past Achievements</SubTitle>
        <ul>
          <li>Raised $10,000 for cancer research in 2023</li>
          <li>Volunteered 500+ hours at local animal shelters in 2022</li>
          <li>Built 3 homes with Habitat for Humanity in 2021</li>
        </ul>
      </Section>

      <Section>
        <SubTitle>Get Involved</SubTitle>
        <p>Interested in joining our philanthropic efforts? Contact our Philanthropy Chair at philanthropy@dke.edu</p>
      </Section>
    </PageContainer>
  );
};

export default Philanthropy;
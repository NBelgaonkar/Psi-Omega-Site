import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import crest from '../Images/Psi-Omega-Crest.png'; // Import the crest image

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  background-color: #f7f2f3;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;
  text-align: left;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;
const CrestImage = styled.img`
  width: 200px;
  margin-top: 20px;
`;
const HealthAndSafety = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Health and Safety Policies</Title>

        <Section>
          <SubTitle>Delta Kappa Epsilon (FIPG) Risk Management Policies</SubTitle>
          <Paragraph>
            <strong>Alcohol and Drugs:</strong>
            <ul>
              <li>
                The possession, sale, use, or consumption of alcoholic beverages must comply with all
                applicable laws and must follow either the BYOB or Third-Party Vendor Guidelines.
              </li>
              <li>
                No chapter funds may be used to purchase alcohol. Common sources of alcohol, such as
                kegs, are prohibited.
              </li>
              <li>
                Open parties, where alcohol is present and guests are not invited, are prohibited.
              </li>
              <li>No member may provide alcohol to minors.</li>
              <li>The use or possession of illegal drugs is strictly prohibited.</li>
              <li>Drinking games of any kind are prohibited.</li>
            </ul>
          </Paragraph>
        </Section>

        <Section>
          <SubTitle>Hazing</SubTitle>
          <Paragraph>
            Hazing is defined as any action or situation intentionally created to cause mental or physical
            discomfort, embarrassment, harassment, or ridicule. It includes activities such as paddling,
            excessive fatigue, public stunts, and activities inconsistent with academic achievement or
            fraternal laws.
          </Paragraph>
        </Section>

        <Section>
          <SubTitle>Sexual Abuse and Harassment</SubTitle>
          <Paragraph>
            The fraternity does not tolerate any form of sexist or sexually abusive behavior, whether
            physical, mental, or emotional. This includes actions that demean individuals or employ
            strippers or similar performers at fraternity events.
          </Paragraph>
        </Section>

        <Section>
          <SubTitle>Fire, Health, and Safety</SubTitle>
          <Paragraph>
            All chapter houses must comply with local fire and health codes. Firearms, explosives, and
            candles (except for controlled circumstances) are prohibited within chapter houses. Emergency
            numbers and evacuation routes must be posted in accessible locations.
          </Paragraph>
        </Section>
        <CrestImage src={crest} alt="DKE Crest" />

      </Container>
    </>
  );
};

export default HealthAndSafety;

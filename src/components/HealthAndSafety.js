import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Section = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  width: 100%;
  max-width: 800px;
`;

const Paragraph = styled.div`
  font-size: 18px;
  line-height: 1.8;
  text-align: left;

  div {
    margin-bottom: 10px;
  }
`;

const HealthAndSafety = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Health and Safety Policies</Title>

        <Subtitle>Alcohol and Drugs</Subtitle>
        <Section>
          <Paragraph>
            <div>
              The possession, sale, use, or consumption of alcoholic beverages must comply with all
              applicable laws and must follow either the BYOB or Third-Party Vendor Guidelines.
            </div>
            <div>
              No chapter funds may be used to purchase alcohol. Common sources of alcohol, such as kegs, are prohibited.
            </div>
            <div>
              Open parties, where alcohol is present and guests are not invited, are prohibited.
            </div>
            <div>No member may provide alcohol to minors.</div>
            <div>The use or possession of illegal drugs is strictly prohibited.</div>
            <div>Drinking games of any kind are prohibited.</div>
          </Paragraph>
        </Section>

        <Subtitle>Hazing</Subtitle>
        <Section>
          <Paragraph>
            Hazing is defined as any action or situation intentionally created to cause mental or physical
            discomfort, embarrassment, harassment, or ridicule. It includes activities such as paddling,
            excessive fatigue, public stunts, and activities inconsistent with academic achievement or
            fraternal laws.
          </Paragraph>
        </Section>

        <Subtitle>Sexual Abuse and Harassment</Subtitle>
        <Section>
          <Paragraph>
            The fraternity does not tolerate any form of sexist or sexually abusive behavior, whether
            physical, mental, or emotional. This includes actions that demean individuals or employ
            strippers or similar performers at fraternity events.
          </Paragraph>
        </Section>

        <Subtitle>Fire, Health, and Safety</Subtitle>
        <Section>
          <Paragraph>
            All chapter houses must comply with local fire and health codes. Firearms, explosives, and
            candles (except for controlled circumstances) are prohibited within chapter houses. Emergency
            numbers and evacuation routes must be posted in accessible locations.
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default HealthAndSafety;

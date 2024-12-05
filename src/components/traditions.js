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
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
`;

const Poem = styled.div`
  margin-bottom: 30px;
`;

const PoemTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const PoemContent = styled.pre`
  font-size: 18px;
  line-height: 1.6;
  white-space: pre-wrap;
  text-align: left;
`;

const TraditionsAndSymbols = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Traditions & Symbols</Title>
        <Paragraph>
          Discover the rich traditions and symbols that define Psi Omega. These cherished elements
          reflect our fraternity’s values, history, and the bonds that unite our brotherhood.
        </Paragraph>

        {/* Poems Section */}
        <Section>
          <SectionTitle>Fraternity Poems</SectionTitle>

          <Poem>
            <PoemTitle>Son of a DKE</PoemTitle>
            <PoemContent>
              "He was born in the twilight of the year,
              Of a century's ebb and flow.
              Heir to the glory of DKE's past,
              And the strength of its future glow."
            </PoemContent>
          </Poem>

          <Poem>
            <PoemTitle>Vive la DKE</PoemTitle>
            <PoemContent>
              "Here's to the brothers of DKE,
              Long may they live in fame.
              Here's to the hearts that are ever true,
              And the strength of Delta Kappa's name.
              Vive la, vive la, vive la DKE!"
            </PoemContent>
          </Poem>

          <Poem>
            <PoemTitle>Phi Marching Song</PoemTitle>
            <PoemContent>
              "March on, march on, ye sons of Phi,
              The strength of youth is ours.
              With the bonds of brotherhood we stride,
              Beneath the DKE towers."
            </PoemContent>
          </Poem>
        </Section>
      </Container>
    </>
  );
};

export default TraditionsAndSymbols;

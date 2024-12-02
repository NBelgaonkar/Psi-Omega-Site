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

const SymbolList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

const SymbolItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SymbolTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SymbolContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
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

        <SymbolList>
          <SymbolItem>
            <SymbolTitle>The Psi Omega Crest</SymbolTitle>
            <SymbolContent>
              The Psi Omega crest embodies the fraternity’s heritage, featuring symbols that represent honor,
              loyalty, and brotherhood. It is proudly displayed on official documents, banners, and regalia.
            </SymbolContent>
          </SymbolItem>

          <SymbolItem>
            <SymbolTitle>Ψυχομαχέομεν Ὡρασιν - Our Motto</SymbolTitle>
            <SymbolContent>
              Translated as "Forever Striving," this Greek phrase reflects the enduring commitment of Psi Omega members
              to excellence, resilience, and personal growth. It serves as an inspiration for all brothers.
            </SymbolContent>
          </SymbolItem>

          <SymbolItem>
            <SymbolTitle>Brotherhood Handshake</SymbolTitle>
            <SymbolContent>
              A secret handshake passed down through generations, symbolizing the trust and unity of our fraternity.
              This tradition strengthens the bond between members.
            </SymbolContent>
          </SymbolItem>

          <SymbolItem>
            <SymbolTitle>Founders’ Day</SymbolTitle>
            <SymbolContent>
              Each year, we gather to celebrate the founding of Psi Omega, honoring the vision and dedication of
              our founding brothers. It is a time of reflection and renewal of our commitment to fraternity values.
            </SymbolContent>
          </SymbolItem>

          <SymbolItem>
            <SymbolTitle>Song of Psi Omega</SymbolTitle>
            <SymbolContent>
              Our fraternity song is a heartfelt anthem sung at key ceremonies and events, uniting members
              in a shared expression of pride and camaraderie.
            </SymbolContent>
          </SymbolItem>

          <SymbolItem>
            <SymbolTitle>The Psi Omega Pin</SymbolTitle>
            <SymbolContent>
              Worn by all initiated members, the Psi Omega pin is a symbol of dedication and pride in our
              fraternity. It serves as a reminder of the values and responsibilities we uphold.
            </SymbolContent>
          </SymbolItem>
        </SymbolList>
      </Container>
    </>
  );
};

export default TraditionsAndSymbols;

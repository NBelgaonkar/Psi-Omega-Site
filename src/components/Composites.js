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
  margin-bottom: 40px;
  text-align: center;
`;

const YearList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const YearItem = styled.li`
  font-size: 24px;
  margin-bottom: 20px;

  a {
    color: #2C3E50;
    text-decoration: underline;
    font-weight: bold;

    &:hover {
      color: #1ABC9C;
    }
  }
`;

const composites = [
  { year: 1978, url: 'https://example.com/composite1978.jpg' },
  { year: 1979, url: 'https://example.com/composite1979.jpg' },
  { year: 1980, url: 'https://example.com/composite1980.jpg' },
  { year: 1981, url: 'https://example.com/composite1981.jpg' },
  // Add more years and URLs as needed
];

const CompositesPage = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Composites</Title>
        <Paragraph>
          Various alumni have gotten together to add composites from 1978 to 2014 on the website. Please click the year below to access the composite.
        </Paragraph>
        <YearList>
          {composites.map((composite) => (
            <YearItem key={composite.year}>
              <a href={composite.url} target="_blank" rel="noopener noreferrer">
                {composite.year}
              </a>
            </YearItem>
          ))}
        </YearList>
      </Container>
    </>
  );
};

export default CompositesPage;

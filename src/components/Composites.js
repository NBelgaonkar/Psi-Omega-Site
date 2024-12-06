import React from 'react';
import styled from 'styled-components';

// Container styles
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

// Header title styles
const HeaderTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  color: #2C3E50;
`;

// Description paragraph styles
const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  color: #7F8C8D;
  margin-bottom: 40px;
`;

// Year list container styles
const YearList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// Individual year link styles
const YearLink = styled.a`
  font-size: 24px;
  font-weight: bold;
  color: #34495E;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: #2980B9;
  }
`;

// Composites data
const composites = [
  { year: 1978, url: 'https://example.com/composite-1978.jpg' },
  { year: 1979, url: 'https://example.com/composite-1979.jpg' },
  { year: 1980, url: 'https://example.com/composite-1980.jpg' },
  { year: 1981, url: 'https://example.com/composite-1981.jpg' },
  // Add more years as needed
];

// CompositesPage component
const CompositesPage = () => {
  return (
    <>

      {/* Main container */}
      <PageContainer>
        {/* Header title */}
        <HeaderTitle>Composites</HeaderTitle>

        {/* Description */}
        <Description>
          Various alumni have gotten together to add composites from 1978 to 2014 on the website. 
          Please click the year below to access the composite.
        </Description>

        {/* List of year links */}
        <YearList>
          {composites.map((composite) => (
            <YearLink key={composite.year} href={composite.url} target="_blank" rel="noopener noreferrer">
              {composite.year}
            </YearLink>
          ))}
        </YearList>
      </PageContainer>
    </>
  );
};

export default CompositesPage;

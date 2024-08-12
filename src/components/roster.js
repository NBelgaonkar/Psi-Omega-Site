import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding-top: 60px;
  padding: 50px;
  margin-top: 60px;
`;

const RosterSection = styled.div`
  text-align: left;
  max-width: 1200px; /* Adjusted to accommodate images */
  margin-top: 30px;
  color: black;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #ccc;
`;

const MemberName = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const MemberCaption = styled.p`
  font-size: 14px;
  color: #666;
`;

class RosterPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <RosterSection>
            <h1>Roster</h1>
            <ImageGrid>
              {Array(25).fill().map((_, index) => (
                <MemberContainer key={index}>
                  <MemberImage src={`https://via.placeholder.com/150`} alt={`Member ${index + 1}`} />
                  <MemberName>Member {index + 1}</MemberName>
                  <MemberCaption>Name: Example</MemberCaption>
                  <MemberCaption>Major: Undeclared</MemberCaption>
                  <MemberCaption>Year: Senior</MemberCaption>
                  <MemberCaption>Hometown: Troy, NY</MemberCaption>
                </MemberContainer>
              ))}
            </ImageGrid>
          </RosterSection>
        </Container>
      </>
    );
  }
}

export default RosterPage;

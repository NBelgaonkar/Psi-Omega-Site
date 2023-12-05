import React from 'react';
import styled from 'styled-components';

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
  max-width: 800px;
  margin-top: 30px;
  color: black;
`;

const MemberContainer = styled.div`
  margin-bottom: 20px;
`;

class RosterPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <RosterSection>
            <h1>Roster</h1>
            {Array(25).fill().map((_, index) => (
              <MemberContainer key={index}>
                <h3>Member {index + 1}</h3>
                <p>
                  <strong>Name:</strong> Example 
                </p>
                <p>
                  <strong>Major:</strong> Undeclared
                </p>
                <p>
                  <strong>Year:</strong> Senior
                </p>
                <p>
                  <strong>Hometown:</strong> Troy, NY
                </p>
              </MemberContainer>
            ))}
          </RosterSection>
        </Container>
      </>
    );
  }
}

export default RosterPage;

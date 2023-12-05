import React from 'react';
import styled from 'styled-components';
import background from '../Images/pic.png';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  background-position: center top;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding-top: 60px;
  padding: 50px;
  margin-top: 60px;
`;

const RushSection = styled.div`
  text-align: left;
  max-width: 460px;
  margin-top: 150px;
  margin-bottom: 300px;
  color: black;
  p {
    font-size: 24px;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 30px;
  }
`;

const RushInfo = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.6;
`;

class RushDKEPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <RushSection>
            <h1>Rush DKE</h1>
            <RushInfo>
              <strong>What does it mean to rush DKE:</strong> Rushing DKE means you are interested in becoming a member of our brotherhood. To do this, attend events we host at the beginning of the semester to familiarize yourself with the brothers and what we do.
            </RushInfo>
            <RushInfo>
              <strong>Questions?</strong> Contact our recruitment chair.
            </RushInfo>
            <RushInfo>
              <strong>DKE Rush Calendar:</strong> Available at the start of the fall and spring semesters.
            </RushInfo>
          </RushSection>
        </Container>
      </>
    );
  }
}

export default RushDKEPage;

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

const eventsSection = styled.div`
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

const eventsInfo = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 1.6;
`;

class eventsPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <eventsSection>
            <h1>What we've been up to:</h1>
            <eventsInfo>
              <strong>Intermural Soccer Games </strong>Come watch or participate in our IM soccer league!
            </eventsInfo>
            <eventsInfo>
              <strong>Movie Night </strong> Come hang out with us and enjoy some popcorn on friday nights!
            </eventsInfo>
            <eventsInfo>
              <strong>Laser Tag </strong> Hit the arcade with DKE and play some laser tag once a month!
            </eventsInfo>
            <eventsInfo>
              <strong>Mac and Milkshakes </strong> Enjoy some macaroni and cheese and homemade milkshakes during exam week!
            </eventsInfo>
          </eventsSection>
        </Container>
      </>
    );
  }
}

export default eventsPage;
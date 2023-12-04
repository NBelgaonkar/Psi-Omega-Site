import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import background from '../Images/pic.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  min-height: 100vh;
  padding-top: 60px;
`;

const HeaderImage = styled.img`
  width: 100%;
  max-height: 820px; /* Adjust the height as needed */
  object-fit: contain; /* Use "contain" to fit the full image within the container */
  margin-bottom: 120px; /* Adjust as needed */
`;

const TextSection = styled.div`
  text-align: center;
  max-width: 800px;
  margin-top: 20px; /* Adjust as needed */
  margin-bottom: 100px; /* Adjust as needed */
  padding: 20px;
  color: black;
  line-height: 2; /* Double spacing */
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 20px;
`;

const EventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 50px; /* Adjust as needed */
  margin-bottom: 20px; /* Adjust as needed */
`;

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 15px;
  width: 300px;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 75%;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const EventTitle = styled.h2`
  font-size: 1.5em;
  color: black;
`;

const EventDescription = styled.p`
  color: black;
`;

class HomePage extends React.Component {
  state = {
    events: [
      {
        title: 'Event 1',
        imageUrl: `https://source.unsplash.com/random?event&sig=1`,
        description: 'Description 1',
      },
      {
        title: 'Event 2',
        imageUrl: `https://source.unsplash.com/random?event&sig=2`,
        description: 'Description 2',
      },
      {
        title: 'Event 3',
        imageUrl: `https://source.unsplash.com/random?event&sig=3`,
        description: 'Description 3',
      },
    ],
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <HeaderImage src={background} alt="Header Image" />
          <TextSection>
            <Title>Welcome to Delta Kappa Epsilon at RPI</Title>
            <p>The Psi Omega Chapter of Delta Kappa Epsilon (DKE) is a fraternity at Rensselaer Polytechnic Institute (RPI) committed to fostering brotherhood, leadership, and community involvement.</p>
            <p>As brothers, we strive to personify the three qualities of a DKE: the gentleman, the scholar, and the jolly good fellow. From our frequent charity events to our many gatherings throughout the semester, our aim remains the same: to foster friendships among young men as they work to achieve their goals at one of the most prestigious institutions in the world.</p>
            <p>We are dedicated to upholding the values and traditions of DKE while creating a welcoming and supportive community for our members. Join us in our journey to make a positive impact on campus and in the lives of our brothers.</p>
          </TextSection>
          <Content>
            <h1>Our Initiatives</h1>
            <EventContainer>
              {this.state.events.map((event, index) => (
                <EventCard key={index}>
                  <ImageContainer>
                    <Image src={event.imageUrl} alt={event.title} />
                  </ImageContainer>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                </EventCard>
              ))}
            </EventContainer>
          </Content>
        </Container>
      </>
    );
  }
}

export default HomePage;

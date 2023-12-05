import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import background from '../Images/pic.png';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&style=italic&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
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
  margin-top: 20px;
  margin-bottom: 100px;
  padding: 20px;
  color: black;
  line-height: 2;
  font-family: 'Roboto', sans-serif; /* Use Roboto font */
  font-weight: 100; /* Thin weight */
  font-style: italic; /* Italic style */
  
`;

const Title = styled.h1`
  font-size: 40px; /* Increase the font size for the title */
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 20px; /* Increase the font size for the paragraphs */
  color: black;
  margin-bottom: 20px;
  color: #71797E;
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
  padding: 1px;
  border-radius: 15px;
  width: 400px;
  margin: 3
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
  color: #71797E;
`;

class HomePage extends React.Component {
  state = {
    events: [
      {
        title: 'Gentleman',
        imageUrl: `https://source.unsplash.com/random?event&sig=1`,
        description: 'DKE cultivates a culture of respect, chivalry, and courtesy among its members. The fraternity encourages its members to exemplify the qualities of a true gentleman in their interactions with others, promoting politeness, integrity, and a commitment to treating everyone with dignity.',
      },
      {
        title: 'Scholars',
        imageUrl: `https://source.unsplash.com/random?event&sig=2`,
        description: 'DKE places a strong emphasis on academic excellence and intellectual growth. The fraternity supports its members in their pursuit of knowledge, encouraging them to excel academically and to engage in lifelong learning. Academic achievement is a fundamental component of the DKE experience.',
      },
      {
        title: 'Jolly Good Fellows',
        imageUrl: `https://source.unsplash.com/random?event&sig=3`,
        description: 'DKE embraces the spirit of camaraderie and brotherhood. Members of DKE create bonds that last a lifetime, fostering a sense of belonging, support, and friendship. The fraternity values the happiness and well-being of its members and aims to create a warm and inclusive community where all can thrive and enjoy each others company.',
      },
    ],
  };

  render() {
    return (
      <>
       
        <Container>
          <HeaderImage src={background} alt="Header Image" />
          <TextSection>
          <Title>Welcome to Delta Kappa Epsilon at RPI</Title>
          <Paragraph>The Psi Omega Chapter of Delta Kappa Epsilon (DKE) is a fraternity at Rensselaer Polytechnic Institute (RPI) committed to fostering brotherhood, leadership, and community involvement.</Paragraph>
          <Paragraph>As brothers, we strive to personify the three qualities of a DKE: the gentleman, the scholar, and the jolly good fellow. From our frequent charity events to our many gatherings throughout the semester, our aim remains the same: to foster friendships among young men as they work to achieve their goals at one of the most techinical institutions in the world.</Paragraph>
          <Paragraph>We are dedicated to upholding the values and traditions of DKE while creating a welcoming and supportive community for our members. Join us in our journey to make a positive impact on campus and in the lives of our brothers.</Paragraph>
        </TextSection>
          <Content>
            <Title>The Three Pilars</Title>
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

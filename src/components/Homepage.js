// Importing React and styled-components for component styling
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Importing background image for styling
import background from '../Images/pic.png';

// Global styles, including font import and body styling
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

// Styled button component for 'Read More' functionality
const ReadMoreButton = styled.button`
  border: none;
  background-color: white;
  color: black;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  margin-left: 140px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

// Main container styling, including background image and layout
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

// Content container styling, primarily for layout
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 20px;
`;

// Text section styling, including typography and margins
const TextSection = styled.div`
  text-align: left;
  max-width: 460px;
  margin-top: 250px;
  margin-bottom: 400px;
  margin-right: 1200px;
  color: black;
  p {
    font-size: 24px; 
  }
  h1 {
    font-size: 36px; 
    margin-bottom: 30px;
  }
`;

// Container for event cards, with responsive layout
const EventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 240px;
`;

// Individual event card styling
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

// Image container styling within each event card
const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 75%;
`;

// Image styling for event images
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

// Title styling for event cards
const Title = styled.h2`
  font-size: 1.5em;
  color: black;
`;

// Description styling for event cards
const Description = styled.p`
  color: black;
`;

// HomePage component, representing the main page of the site
class HomePage extends React.Component {
  // State containing event data
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

  // Render method for the component
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <Content>
            <TextSection>
              <h1>Welcome to the Psi Omega Chapter of DKE at RPI</h1>
              <p>The Psi Omega Chapter of Delta Kappa Epsilon (DKE) is a fraternity at Rensselaer Polytechnic Institute (RPI) committed to fostering brotherhood, leadership, and community involvement.</p>
              <ReadMoreButton onClick={() => {
                  // Placeholder for navigation or action on button click
              }}>
                Learn More
              </ReadMoreButton>
            </TextSection>

            <h1>Our Initiatives</h1>
            <EventContainer>
              {this.state.events.map((event, index) => (
                <EventCard key={index}>
                  <ImageContainer>
                    <Image src={event.imageUrl} alt={event.title} />
                  </ImageContainer>
                  <Title>{event.title}</Title>
                  <Description>{event.description}</Description>
                </EventCard>
              ))}
            </EventContainer>
          </Content>
        </Container>
      </>
    );
  }
}

// Exporting HomePage for use in other parts of the application
export default HomePage;

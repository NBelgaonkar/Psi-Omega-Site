import React from 'react';
import styled from 'styled-components';
import background from '../Images/pic.png';

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
  background-attachment: fixed;
  color: white;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 100vh;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 20px;
`;

const TextSection = styled.div`
  text-align: left;
  max-width: 460px;
  margin-top: 250px;
  margin-bottom: 400px;
  margin-right: 1200px;
  color: 'gray';
  p {
    font-size: 24px; 
  };
  h1 {
    font-size: 36px; 
    margin-bottom: 30px;
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
  margin-bottom: 240px;
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
  object-fit: contain;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5em;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

class EventsPage extends React.Component {
    state = {
        events: [
            {
                title: 'Event 1',
                imageUrl: `https://source.unsplash.com/random?news&sig=1`,
                description: 'Description 1',
            },
            {
                title: 'Event 2',
                imageUrl: `https://source.unsplash.com/random?news&sig=2`,
                description: 'Description 2',
            },
            {
                title: 'Event 3',
                imageUrl: `https://source.unsplash.com/random?news&sig=3`,
                description: 'Description 3',
            },
        ],
    };
    render() {
        return (
            <Container>
                <Content>
                    <TextSection>
                        <h1>Welcome to the Psi Omega Chapter of DKE at RPI</h1>
                        <p>The Psi Omega Chapter of Delta Kappa Epsilon (DKE) is a fraternity at Rensselaer Polytechnic Institute (RPI) committed to fostering brotherhood, leadership, and community involvement.</p>
                        
                        <ReadMoreButton onClick={() => {
                            // Navigate to 'About Us' page or some other action
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
        );
    }
}
export default EventsPage;

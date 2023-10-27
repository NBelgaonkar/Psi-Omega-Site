import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6; // Updated primary color
  padding: 50px;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  width: 100%;
`;

const AnnouncementSection = styled.div`
  margin-top: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  width: 80%;
  text-align: left;
`;

const EventSection = styled.div`
  margin-top: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  width: 80%;
  text-align: left;
`;

class Homepage extends React.Component {
  

  render() {
    return (
      <Container>
        <h1>Welcome to DKE</h1>
        <p>
          Discover the rich history, traditions, and activities of the Psi Omega Chapter of Delta Kappa Epsilon. Stay informed and connected with our community.
        </p>

        <AnnouncementSection>
          <h2>Announcements</h2>
          <p>
            Stay tuned for the latest updates and important announcements from our chapter.
            {/* You can dynamically fetch and display announcements here */}
          </p>
        </AnnouncementSection>

        <EventSection>
          <h2>Upcoming Events</h2>
          <p>
            Don't miss out on our upcoming events and gatherings. Mark your calendars!
            {/* You can dynamically fetch and display upcoming events here */}
          </p>
        </EventSection>
      </Container>
    );
  }
}

export default Homepage;

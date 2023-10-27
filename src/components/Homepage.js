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

const Section = styled.div`
  margin-top: 20px;
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

        <Section>
          <h2>Announcements</h2>
          <p>
            Stay tuned for the latest updates and important announcements from our chapter.
            {/* You can dynamically fetch and display announcements here */}
          </p>
        </Section>

        <Section>
          <h2>Upcoming Events</h2>
          <p>
            Don't miss out on our upcoming events and gatherings. Mark your calendars!
            {/* You can dynamically fetch and display upcoming events here */}
          </p>
        </Section>

        <Section>
          <h2>Chapter Information</h2>
          <p>
            Learn about the Psi Omega Chapter of Delta Kappa Epsilon. Discover our location, the history of our chapter, and the notable awards and achievements we've garnered over the years.
            {/* You can dynamically fetch and display detailed chapter information here */}
          </p>
        </Section>

        <Section>
          <h2>Fraternity History</h2>
          <p>
            Dive deep into the history and traditions of the Delta Kappa Epsilon fraternity. Understand our legacy both at the chapter level and within the national organization.
            {/* You can dynamically fetch and display the fraternity's history here */}
          </p>
        </Section>

      </Container>
    );
  }
}

export default Homepage;

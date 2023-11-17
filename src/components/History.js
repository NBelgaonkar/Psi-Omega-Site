import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const Section = styled.section`
  max-width: 800px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #123456; // Replace with your color scheme
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #333333; // Replace with your color scheme
`;

class OurHistory extends React.Component {
  render() {
    return (
      <Container>
        <Section>
          <Title>National History of Delta Kappa Epsilon</Title>
          <Paragraph>
            Delta Kappa Epsilon (DKE) was founded on June 22, 1844, at Yale College in New Haven, Connecticut. The fraternity was established by 15 sophomores who were discontent with the existing fraternity system on campus. They aimed to create an organization that was more democratic and less elitist than the existing fraternities.
          </Paragraph>
          <Paragraph>
            DKE quickly distinguished itself for its emphasis on brotherhood, leadership, and a balance of social and intellectual activities. Its motto, "Kerothen Philoi Aei" (Friends from the Heart, Forever), encapsulates the fraternity's values of camaraderie and lifelong friendship.
          </Paragraph>
          <Paragraph>
            Over the years, DKE expanded rapidly across American colleges, establishing itself as one of the most prominent and respected fraternities in the nation. It has produced a remarkable list of distinguished alumni, including several U.S. Presidents, business leaders, and other influential figures.
          </Paragraph>
          <Paragraph>
            Today, Delta Kappa Epsilon continues to thrive, fostering a culture of excellence, leadership, and service, staying true to the vision of its founding members.
          </Paragraph>
        </Section>

        {/* Additional sections can be added here */}

      </Container>
    );
  }
}

export default OurHistory;

// Import React and styled-components 
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Import Google Fonts and set global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  body {
    font-family: 'Open Sans', sans-serif; // Use 'Open Sans' font
    background-color: #f0f0f0; // Light gray background for the entire page
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Define styles for the main page container
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333; // Use a darker shade for better contrast
  min-height: 100vh;
  padding: 50px 20px;
  background-color: #f0f0f0;
`;

// Styling for sections containing event information
const EventSection = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Style for section titles within the event sections
const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #444;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

// Styled paragraphs for individual event details
const EventText = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  line-height: 1.6;
`;

// React functional component for rendering an event section
const EventSectionComponent = ({ title, details }) => (
  <EventSection>
    <SectionTitle>{title}</SectionTitle>
    {details.map((detail, index) => (
      <EventText key={index}>{detail}</EventText>
    ))}
  </EventSection>
);

// React functional component for rendering the Upcoming Events page
const UpcomingEvents = () => {
  const eventData = [
    {
      title: "Annual Brotherhood Formal",
      details: [
        "Date: December 15th, 2024",
        "Location: The Grand Hotel, City Center",
        "Details: Join us for an evening of celebration at the Psi Omega Annual Brotherhood Formal. The night will include dinner, dancing, and awards. This is a formal event, and all active members and alumni are invited.",
      ],
    },
    {
      title: "Alumni Networking Gala",
      details: [
        "Date: March 25th, 2024",
        "Location: Psi Omega Chapter House",
        "Details: Our Alumni Networking Gala is an opportunity for current brothers to connect with successful alumni. This event will include panel discussions, networking sessions, and dinner. Business attire is required.",
      ],
    },
    {
      title: "Community Service Day",
      details: [
        "Date: April 12th, 2024",
        "Location: Local Community Center",
        "Details: Join us for a day of giving back to the community. Brothers will be volunteering at the local community center, helping with food distribution and mentoring local youth. Wear comfortable clothes and Psi Omega gear!",
      ],
    },
    {
      title: "Psi Omega Charity Golf Tournament",
      details: [
        "Date: June 20th, 2024",
        "Location: Oakwood Country Club",
        "Details: The Psi Omega Charity Golf Tournament is an annual event to raise funds for our local and national philanthropic causes. Alumni, active members, and guests are welcome to join. Registration includes green fees, lunch, and a banquet dinner.",
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <h1>Upcoming Events</h1>
        {eventData.map((section, index) => (
          <EventSectionComponent
            key={index}
            title={section.title}
            details={section.details}
          />
        ))}
      </PageContainer>
    </>
  );
};

export default UpcomingEvents;

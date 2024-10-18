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

// Styling for sections containing alumni information
const AlumniSection = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Style for section titles within the alumni sections
const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #444;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

// Styled paragraphs for individual alumni details
const AlumniEvent = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  line-height: 1.6;
`;

// React functional component for rendering an alumni section
const AlumniSectionComponent = ({ title, details }) => (
  <AlumniSection>
    <SectionTitle>{title}</SectionTitle>
    {details.map((detail, index) => (
      <AlumniEvent key={index}>{detail}</AlumniEvent>
    ))}
  </AlumniSection>
);

// React functional component for rendering the alumni page
const Alumni = () => {
  const alumniData = [
    {
      title: "Notable Alumni",
      details: [
        "Martin T. Davis: Represented the U.S. in lacrosse at the 1948 London Olympics, showcasing his athletic and leadership skills.",
        "Paul K. Trahan: Served in the U.S. Navy's Office of Information, demonstrating Psi Omega's commitment to public service.",
        "Thomas L. Martin Jr.: Former President of Illinois Institute of Technology, highlighting academic and professional success.",
      ],
    },
    {
      title: "Alumni Network and Events",
      details: [
        "Annual Homecoming: Our alumni gather every year to reconnect with brothers and support the current chapter.",
        "Alumni Dinner 2024: Join us for a night of celebration and reflection on March 25th, 2024.",
        "Mentorship Program: Alumni offer guidance and career support to current brothers, ensuring lifelong connections.",
      ],
    },
    {
      title: "Alumni Contributions",
      details: [
        "Psi Omega Building Fund: Alumni have donated over $500,000 to support chapter renovations and new projects.",
        "Scholarships: Alumni contributions fund annual scholarships for academic excellence and leadership.",
        "Community Outreach: Alumni continue to play a key role in our chapter's philanthropy, contributing to local and national causes.",
      ],
    },
    {
      title: "Stay Connected",
      details: [
        "Alumni Newsletter: Sign up for our quarterly newsletter to stay updated on chapter news and alumni activities.",
        "Alumni Database: Keep your contact information up to date so we can inform you about upcoming events and reunions.",
        "Join the Psi Omega Alumni LinkedIn Group to expand your professional network with fellow brothers.",
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <h1>Psi Omega Alumni</h1>
        {alumniData.map((section, index) => (
          <AlumniSectionComponent
            key={index}
            title={section.title}
            details={section.details}
          />
        ))}
      </PageContainer>
    </>
  );
};

export default Alumni;

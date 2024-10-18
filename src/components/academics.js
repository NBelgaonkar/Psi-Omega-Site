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

// Styling for sections containing academic information
const AcademicSection = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Style for section titles within the academic sections
const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #444;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

// Styled paragraphs for individual academic information
const AcademicText = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  line-height: 1.6;
`;

// React functional component for rendering an academic section
const AcademicSectionComponent = ({ title, details }) => (
  <AcademicSection>
    <SectionTitle>{title}</SectionTitle>
    {details.map((detail, index) => (
      <AcademicText key={index}>{detail}</AcademicText>
    ))}
  </AcademicSection>
);

// React functional component for rendering the Academics page
const Academics = () => {
  const academicData = [
    {
      title: "Scholarship Opportunities",
      details: [
        "Psi Omega offers annual scholarships to members who demonstrate academic excellence and leadership within the fraternity.",
        "Members are encouraged to apply for the 'Psi Omega Academic Scholarship,' which awards up to $2,500 based on GPA, extracurricular involvement, and community service.",
        "Alumni-funded scholarships are also available for brothers pursuing graduate degrees or specific fields of study.",
      ],
    },
    {
      title: "Study Hours and Academic Support",
      details: [
        "Mandatory study hours are implemented for all new members, ensuring they prioritize their academic performance.",
        "Brothers can attend weekly group study sessions, held in the chapter house, where members collaborate and support each other's academic goals.",
        "Upperclassmen offer tutoring services in key subjects, providing extra assistance to brothers in need of academic help.",
      ],
    },
    {
      title: "Networking and Career Development",
      details: [
        "Psi Omega boasts a strong alumni network, with brothers excelling in various industries including engineering, finance, healthcare, and technology.",
        "Alumni-hosted workshops and networking events are regularly held to provide guidance and mentorship to current members.",
        "Members have access to career-building resources such as resume reviews, mock interviews, and job placement services through the fraternity's LinkedIn group and mentorship program.",
      ],
    },
    {
      title: "Academic Recognition and Incentives",
      details: [
        "Brothers who achieve a GPA of 3.5 or higher are recognized each semester with academic awards and featured in the chapter newsletter.",
        "The 'Psi Omega Scholar Award' is given to the brother with the highest GPA each year, further motivating academic excellence.",
        "Academic incentives include reduced chapter dues for those maintaining exemplary academic records, encouraging members to focus on their studies while balancing fraternity life.",
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <h1>Psi Omega Academics</h1>
        {academicData.map((section, index) => (
          <AcademicSectionComponent
            key={index}
            title={section.title}
            details={section.details}
          />
        ))}
      </PageContainer>
    </>
  );
};

export default Academics;

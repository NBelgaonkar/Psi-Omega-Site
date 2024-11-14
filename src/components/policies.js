// Import React and styled-components 
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
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

// Styling for sections containing policy information
const PolicySection = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Style for section titles within the policy sections
const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #444;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

// Styled paragraphs for individual policies
const PolicyText = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  line-height: 1.6;
`;

// React functional component for rendering a policy section
const PolicySectionComponent = ({ title, details }) => (
  <PolicySection>
    <SectionTitle>{title}</SectionTitle>
    {details.map((detail, index) => (
      <PolicyText key={index}>{detail}</PolicyText>
    ))}
  </PolicySection>
);

// React functional component for rendering the policies page
const Policies = () => {
  const policyData = [
    {
      title: "Anti-Hazing Policy",
      details: [
        "Psi Omega strictly prohibits hazing in any form, in compliance with national and local regulations.",
        "All members and pledges must adhere to a zero-tolerance hazing policy, ensuring the safety and respect of all individuals.",
        "Any violations will result in immediate disciplinary action and potential legal consequences.",
      ],
    },
    {
      title: "Alcohol and Drug Policy",
      details: [
        "All chapter events must comply with state and federal laws regarding alcohol consumption and drug use.",
        "No illegal substances are allowed at any Psi Omega event, and the chapter promotes responsible behavior regarding alcohol consumption.",
        "Alcoholic beverages are only permitted at events where it is legally allowed, and non-alcoholic options must always be available.",
      ],
    },
    {
      title: "Code of Conduct",
      details: [
        "Members are expected to uphold the highest standards of integrity, respect, and accountability.",
        "Harassment, discrimination, or any form of unethical behavior will not be tolerated, and violations will result in disciplinary action.",
        "The chapter encourages a culture of inclusivity, ensuring that all members feel safe and respected.",
      ],
    },
    {
      title: "Academic Standards",
      details: [
        "Psi Omega values academic excellence, and all members must maintain a minimum GPA to remain in good standing.",
        "The chapter offers academic support programs and mentorship to help brothers succeed academically.",
        "Failure to meet academic requirements may result in probation or suspension of membership privileges.",
      ],
    },
    {
      title: "Financial Obligations",
      details: [
        "All members are responsible for paying dues and other chapter fees on time.",
        "Financial transparency is key, and the chapter treasurer will provide regular updates on the chapter's financial status.",
        "Members facing financial hardship may apply for special consideration or payment plans to remain in good standing.",
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <h1>Psi Omega Policies</h1>
        {policyData.map((section, index) => (
          <PolicySectionComponent
            key={index}
            title={section.title}
            details={section.details}
          />
        ))}
      </PageContainer>
    </>
  );
};

export default Policies;

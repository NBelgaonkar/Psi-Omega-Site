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

// Styling for sections containing historical information
const HistorySection = styled.section`
  width: 100%;
  max-width: 700px;
  margin: 30px 0;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Style for section titles within the history sections
const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: #444;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
`;

// Styled paragraphs for individual historical events
const HistoryEvent = styled.p`
  margin: 0 0 10px 0;
  color: #666;
  line-height: 1.6;
`;

// React functional component for rendering a history section
const HistorySectionComponent = ({ title, events }) => (
  <HistorySection>
    <SectionTitle>{title}</SectionTitle>
    {events.map((event, index) => (
      <HistoryEvent key={index}>{event}</HistoryEvent>
    ))}
  </HistorySection>
);

// React functional component for rendering the history page
const History = () => {
  const historyData = [
    {
      title: "Foundational Era and Early Impact",
      events: [
        "1867: The chartering of Psi Omega at RPI marks a significant establishment in the institute’s fraternity culture.",
        "Late 19th Century: The chapter actively contributes to campus life and begins building its legacy with members excelling in both academic and extracurricular activities.",
      ],
    },
    {
      title: "Early 20th Century Expansion",
      events: [
        "1878: Seijiro Hirai, later a key figure in Japan’s railway system, is initiated, reflecting the chapter’s global influence.",
        "Early 1900s: The chapter sees growth in membership and influence, with members participating in key campus events and leadership roles.",
      ],
    },
    {
      title: "Mid-Century Achievements and Recognition",
      events: [
        "1948: Martin T. Davis, representing the U.S. in lacrosse at the London Olympics, highlights the chapter's sporting excellence.",
        "1955: Paul K. Trahan’s role in the U.S. Navy's Office of Information underscores the chapter’s contributions to national service.",
        "1974: Thomas L. Martin Jr. becomes President of the Illinois Institute of Technology, exemplifying the professional success of Psi Omega alumni.",
      ],
    },
    {
      title: "Revival and Modernization",
      events: [
        "1990s: The chapter begins planning for a revival, focusing on reconnecting alumni and rejuvenating its presence on campus.",
        "2014-2015: A concerted effort by alumni leads to the re-founding of the chapter, emphasizing its historical significance and future potential.",
        "April 4, 2015: The initiation of the 'Re-Founders' marks a new era, blending tradition with modern fraternity values.",
      ],
    },
    {
      title: "Recent Developments and Continued Excellence",
      events: [
        "2011: Samuel Heffner Jr. completes his term as a trustee at RPI, having played a vital role in the institute’s governance.",
        "2015-2018: The chapter undergoes a period of growth, adapting its activities and recruitment strategies to align with contemporary fraternity ideals.",
      ],
    },
    {
      title: "Engagement and Community Involvement",
      events: [
        "Throughout its history, Psi Omega has been actively involved in community service and philanthropic efforts, supporting various local and national causes.",
        "The chapter has consistently fostered a culture of academic excellence and leadership, contributing significantly to the intellectual and social life at RPI.",
      ],
    },
    {
      title: "Legacy and Future Outlook",
      events: [
        "The Psi Omega chapter of Delta Kappa Epsilon at RPI stands as a testament to enduring brotherhood, academic excellence, and leadership. Its members have left an indelible mark on the institute and beyond, shaping industries, academia, and public service.",
        "The chapter’s adaptability and commitment to its core values promise a continued legacy of influence and achievement in the years to come.",
      ],
    },
  ];

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <h1>Psi Omega History</h1>
        {historyData.map((section, index) => (
          <HistorySectionComponent
            key={index}
            title={section.title}
            events={section.events}
          />
        ))}
      </PageContainer>
    </>
  );
};

export default History;

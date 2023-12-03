import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Import Google Fonts and set global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  body {
    font-family: 'Open Sans', sans-serif; // Use 'Open Sans' font
    background-color: #f0f0f0; // Light gray background for the entire page
  }
`;

// Define styles for the main page container
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding: 50px;
`;

// Styling for sections containing historical information
const HistorySection = styled.section`
  text-align: left;
  max-width: 600px;
  margin: 30px 0;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

// Style for section titles within the history sections
const SectionTitle = styled.strong`
  display: block;
  margin-bottom: 10px;
  font-size: 1.2em;
  color: black;
`;

// Styled paragraphs for individual historical events
const HistoryEvent = styled.p`
  margin: 0 0 10px 0;
  color: black;
`;

// React functional component for rendering the history page
const History = () => {
    return (
        <>
            <GlobalStyle />
            <PageContainer>
                <h1>Psi Omega History</h1>

                {/* Section for foundational era and early impact */}
                <HistorySection>
                    <SectionTitle>Foundational Era and Early Impact</SectionTitle>
                    <HistoryEvent>1867: The chartering of Psi Omega at RPI marks a significant establishment in the institute’s fraternity culture.</HistoryEvent>
                    <HistoryEvent>Late 19th Century: The chapter actively contributes to campus life and begins building its legacy with members excelling in both academic and extracurricular activities.</HistoryEvent>
                </HistorySection>

                {/* Section for early 20th century expansion */}
                <HistorySection>
                    <SectionTitle>Early 20th Century Expansion</SectionTitle>
                    <HistoryEvent>1878: Seijiro Hirai, later a key figure in Japan’s railway system, is initiated, reflecting the chapter’s global influence.</HistoryEvent>
                    <HistoryEvent>Early 1900s: The chapter sees growth in membership and influence, with members participating in key campus events and leadership roles.</HistoryEvent>
                </HistorySection>

                {/* Section for mid-century achievements and recognition */}
                <HistorySection>
                    <SectionTitle>Mid-Century Achievements and Recognition</SectionTitle>
                    <HistoryEvent>1948: Martin T. Davis, representing the U.S. in lacrosse at the London Olympics, highlights the chapter's sporting excellence.</HistoryEvent>
                    <HistoryEvent>1955: Paul K. Trahan’s role in the U.S. Navy's Office of Information underscores the chapter’s contributions to national service.</HistoryEvent>
                    <HistoryEvent>1974: Thomas L. Martin Jr. becomes President of the Illinois Institute of Technology, exemplifying the professional success of Psi Omega alumni.</HistoryEvent>
                </HistorySection>

                {/* Section for revival and modernization */}
                <HistorySection>
                    <SectionTitle>Revival and Modernization</SectionTitle>
                    <HistoryEvent>1990s: The chapter begins planning for a revival, focusing on reconnecting alumni and rejuvenating its presence on campus.</HistoryEvent>
                    <HistoryEvent>2014-2015: A concerted effort by alumni leads to the re-founding of the chapter, emphasizing its historical significance and future potential.</HistoryEvent>
                    <HistoryEvent>April 4, 2015: The initiation of the "Re-Founders" marks a new era, blending tradition with modern fraternity values.</HistoryEvent>
                </HistorySection>

                {/* Section detailing recent developments and community involvement */}
                <HistorySection>
                    <SectionTitle>Recent Developments and Continued Excellence</SectionTitle>
                    <HistoryEvent>2011: Samuel Heffner Jr. completes his term as a trustee at RPI, having played a vital role in the institute’s governance.</HistoryEvent>
                    <HistoryEvent>2015-2018: The chapter undergoes a period of growth, adapting its activities and recruitment strategies to align with contemporary fraternity ideals.</HistoryEvent>
                </HistorySection>

                {/* Section for engagement and community involvement */}
                <HistorySection>
                    <SectionTitle>Engagement and Community Involvement</SectionTitle>
                    <HistoryEvent>Throughout its history, Psi Omega has been actively involved in community service and philanthropic efforts, supporting various local and national causes.</HistoryEvent>
                    <HistoryEvent>The chapter has consistently fostered a culture of academic excellence and leadership, contributing significantly to the intellectual and social life at RPI.</HistoryEvent>
                </HistorySection>

                {/* Section about the legacy and future outlook */}
                <HistorySection>
                    <SectionTitle>Legacy and Future Outlook</SectionTitle>
                    <HistoryEvent>The Psi Omega chapter of Delta Kappa Epsilon at RPI stands as a testament to enduring brotherhood, academic excellence, and leadership. Its members have left an indelible mark on the institute and beyond, shaping industries, academia, and public service. The chapter’s adaptability and commitment to its core values promise a continued legacy of influence and achievement in the years to come.</HistoryEvent>
                </HistorySection>
            </PageContainer>
        </>
    );
};

export default History;

import React from 'react';
import styled from 'styled-components';

// Styled component for the page container
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Styled component for the history text
const HistoryText = styled.p`
  text-align: left;
  max-width: 600px;
`;

// History component for Psi Omega
const History = () => {
    return (
        <PageContainer>
            <h1>Psi Omega History</h1>
            <HistoryText>
                <strong>Foundational Era and Early Impact</strong><br />
                1867: The chartering of Psi Omega at RPI marks a significant establishment in the institute’s fraternity culture.<br />
                Late 19th Century: The chapter actively contributes to campus life and begins building its legacy with members excelling in both academic and extracurricular activities.<br />
                <strong>Early 20th Century Expansion</strong><br />
                1878: Seijiro Hirai, later a key figure in Japan’s railway system, is initiated, reflecting the chapter’s global influence.<br />
                Early 1900s: The chapter sees growth in membership and influence, with members participating in key campus events and leadership roles.<br />
                <strong>Mid-Century Achievements and Recognition</strong><br />
                1948: Martin T. Davis, representing the U.S. in lacrosse at the London Olympics, highlights the chapter's sporting excellence.<br />
                1955: Paul K. Trahan’s role in the U.S. Navy's Office of Information underscores the chapter’s contributions to national service.<br />
                1974: Thomas L. Martin Jr. becomes President of the Illinois Institute of Technology, exemplifying the professional success of Psi Omega alumni.<br />
                <strong>Revival and Modernization</strong><br />
                1990s: The chapter begins planning for a revival, focusing on reconnecting alumni and rejuvenating its presence on campus.<br />
                2014-2015: A concerted effort by alumni leads to the re-founding of the chapter, emphasizing its historical significance and future potential.<br />
                April 4, 2015: The initiation of the "Re-Founders" marks a new era, blending tradition with modern fraternity values.<br />
                <strong>Recent Developments and Continued Excellence</strong><br />
                2011: Samuel Heffner Jr. completes his term as a trustee at RPI, having played a vital role in the institute’s governance.<br />
                2015-2018: The chapter undergoes a period of growth, adapting its activities and recruitment strategies to align with contemporary fraternity ideals.<br />
                <strong>Engagement and Community Involvement</strong><br />
                Throughout its history, Psi Omega has been actively involved in community service and philanthropic efforts, supporting various local and national causes.<br />
                The chapter has consistently fostered a culture of academic excellence and leadership, contributing significantly to the intellectual and social life at RPI.<br />
                <strong>Legacy and Future Outlook</strong><br />
                The Psi Omega chapter of Delta Kappa Epsilon at RPI stands as a testament to enduring brotherhood, academic excellence, and leadership. Its members have left an indelible mark on the institute and beyond, shaping industries, academia, and public service. The chapter’s adaptability and commitment to its core values promise a continued legacy of influence and achievement in the years to come.<br />
            </HistoryText>
        </PageContainer>
    );
};

export default History;

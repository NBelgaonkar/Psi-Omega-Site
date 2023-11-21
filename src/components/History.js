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
                <strong>Revival and Modernization</strong><br />
                1990s: The chapter begins planning for a revival, focusing on reconnecting alumni and rejuvenating its presence on campus.<br />
                2014-2015: A concerted effort by alumni leads to the re-founding of the chapter, emphasizing its historical significance and future potential.<br />
                April 4, 2015: The initiation of the "Re-Founders" marks a new era, blending tradition with modern fraternity values.<br />
                <strong>Recent Developments and Continued Excellence</strong><br />
                2011: Samuel Heffner Jr. completes his term as a trustee at RPI, having played a vital role in the institute’s governance.<br />
                2015-2018: The chapter undergoes a period of growth, adapting its activities and recruitment strategies to align with contemporary fraternity ideals.<br />
            </HistoryText>
        </PageContainer>
    );
};

export default History;

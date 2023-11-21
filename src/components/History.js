import React from 'react';
import styled from 'styled-components';

// Styled component for the page container
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// History component for Psi Omega
const History = () => {
    return (
        <PageContainer>
            <h1>Psi Omega History</h1>
            // Add the history of Psi Omega here
        </PageContainer>
    );
};

export default History;

import React from 'react';
import styled from 'styled-components';

// Styled component using arrow function
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Implicit return in functional component
const ProjectsPage = () => (
  <PageContainer>
    <h1>Projects Page</h1>
  </PageContainer>
);

export default ProjectsPage;
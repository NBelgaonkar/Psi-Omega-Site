import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f6f6f6; // Updated primary color
  padding: 50px;
  font-family: Arial, sans-serif;
  flex-grow: 1;
  min-height: 0;
  overflow: auto;
  width: 100%;
`;


class Homepage extends React.Component {
  

  render() {
    return (
      <Container>
        <h1>Welcome to DKE</h1>
        
      </Container>
    );
  }
}

export default Homepage;

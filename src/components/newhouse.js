import React from 'react';
import styled from 'styled-components';

import newhouse from '../Images/newhouse.jpg';


const NewHouseContainer = styled.div`
  max-width: 800px;
  margin: 100px auto 0;
  padding: 20px;
  text-align: center;
`;

const HouseImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
`;

const NewHouse = () => {
  return (
    <NewHouseContainer>
      <h1>Our New House</h1>
      <HouseImage  src={newhouse} alt="../Images/newhouse.jpg" />
      <Description>
        {/* Add your paragraph explaining the new house here */}
        This is what our new house looks like it is located on 1599 Tibbits Ave. Our old house was located at 901
        peoples ave so make sure for all events we have to come to 1599 Tibbits Ave. We will host philanthropy 
        events and more here.
      </Description>
    </NewHouseContainer>
  );
};

export default NewHouse;
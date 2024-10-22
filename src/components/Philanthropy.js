import React from 'react';
import styled from 'styled-components';
//import oakwoodLogo from '../Images/oakwood_community_center.png'; // Example logo path
//import specialOlympicsLogo from '../Images/special_olympics_logo.png'; // Example logo path

const PhilanthropyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f7f2f3;
`;

const Title = styled.h1`
  font-size: 36px;
  color: black;
  margin-bottom: 50px;
`;

const PhilanthropyRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;
`;

const PhilanthropyItem = styled.div`
  width: 45%;
  margin-bottom: 40px;
  text-align: left;
`;

const Logo = styled.img`
  max-width: 200px;
  margin-bottom: 20px;
`;

const PhilanthropyDescription = styled.p`
  font-size: 18px;
  color: black;
  line-height: 1.6;
`;

const PhilanthropyLink = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Philanthropy = () => {
  return (
    <PhilanthropyContainer>
      <Title>Philanthropy</Title>

      <PhilanthropyRow>
        {/* Oakwood Community Center Section */}
        <PhilanthropyItem>
          <PhilanthropyDescription>
            Every weekend, DKE Brothers volunteer to assist the Oakwood Community Center’s Weekly Food Pantry.
            Learn more about their mission here:{' '}
            {/* <PhilanthropyLink href="https://www.oakwoodcommunitycenter.org/food-pantry" target="_blank"> */}
              https://www.oakwoodcommunitycenter.org/food-pantry
            {/* </PhilanthropyLink>  */}
          </PhilanthropyDescription>
          {/* <Logo src={oakwoodLogo} alt="Oakwood Community Center Logo" /> */}
        </PhilanthropyItem>

        {/* Special Olympics Section */}
        <PhilanthropyItem>
          <PhilanthropyDescription>
            Once per semester, DKE runs a pancake delivery event we call DKE’s Diner to support the Special Olympics.
            Learn more about their organization here:{' '}
            {/* <PhilanthropyLink href="https://www.specialolympics.org/" target="_blank"> */}
              {/* https://www.specialolympics.org/ */}
            {/* </PhilanthropyLink> */}
          </PhilanthropyDescription>
          {/* <Logo src={specialOlympicsLogo} alt="Special Olympics Logo" /> */}
        </PhilanthropyItem>
      </PhilanthropyRow>
    </PhilanthropyContainer>
  );
};

export default Philanthropy;

import React from 'react';
import styled from 'styled-components';
import oakwoodLogo from '../Images/oakwood.png';
import specialOlympicsLogo from '../Images/specialOlympics.png';


const PhilanthropyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: black;
  margin-bottom: 50px;
  text-align: center;
`;

const PhilanthropyRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px; /* Space between boxes */
  max-width: 1000px;
  width: 100%;
`;

const PhilanthropyItem = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: calc(50% - 10px); /* Two equal-sized columns */
`;

const Logo = styled.img`
  max-width: 150px;
  height: auto;
  margin-bottom: 20px;
  min-height: 100px;
  padding: 10px;
`;

const PhilanthropyDescription = styled.p`
  font-size: 18px;
  color: black;
  line-height: 1.6;
  margin-bottom: 10px;
`;

const PhilanthropyLink = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
  width: 100%;
  max-width: 1000px;
`;

const EventImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Philanthropy = () => {
  return (
    <>
      <PhilanthropyContainer>
        <Title>Philanthropy</Title>

        <PhilanthropyRow>
          {/* Oakwood Community Center Section */}
          <PhilanthropyItem>
            <Logo src={oakwoodLogo} alt="Oakwood Community Center Logo" />
            <PhilanthropyDescription>
              Every weekend, DKE Brothers volunteer to assist the Oakwood Community Center’s Weekly Food Pantry. Learn
              more about their mission here:{' '}
              <PhilanthropyLink
                href="https://www.oakwoodcommunitycenter.org/food-pantry"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oakwood Community Center Food Pantry
              </PhilanthropyLink>
            </PhilanthropyDescription>
          </PhilanthropyItem>

          {/* Special Olympics Section */}
          <PhilanthropyItem>
            <Logo src={specialOlympicsLogo} alt="Special Olympics Logo" />
            <PhilanthropyDescription>
              Once per semester, DKE runs a pancake delivery event we call DKE’s Diner to support the Special Olympics.
              Learn more about their organization here:{' '}
              <PhilanthropyLink
                href="https://www.specialolympics.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Special Olympics
              </PhilanthropyLink>
            </PhilanthropyDescription>
          </PhilanthropyItem>
        </PhilanthropyRow>

        {/* Image Grid for Event Photos */}
        <ImageGrid>
          <EventImage src="https://via.placeholder.com/200" alt="Event 1" />
          <EventImage src="https://via.placeholder.com/200" alt="Event 2" />
          <EventImage src="https://via.placeholder.com/200" alt="Event 3" />
          <EventImage src="https://via.placeholder.com/200" alt="Event 4" />
        </ImageGrid>
      </PhilanthropyContainer>
    </>
  );
};

export default Philanthropy;

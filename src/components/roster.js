import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Ben from '../Images/BenF24.jpg';
import Alex from '../Images/AlexF24.jpg';
import Gavin from '../Images/GavinF24.jpg';
import Jacob from '../Images/JacobF24.jpg';
import David from '../Images/David2F24.jpg'
import Joe from '../Images/JoeF24.jpg'
import Shastoo from '../Images/ShastooF24.jpg'
import Jake from '../Images/JakeF24.jpg'
import Ian from '../Images/IanF24.jpg'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding-top: 60px;
  padding: 50px;
  margin-top: 60px;
`;

const RosterSection = styled.div`
  text-align: left;
  max-width: 1200px;
  margin-top: 30px;
  color: black;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 columns per row */
  gap: 30px;
`;

const MemberImage = styled.img`
  width: 200px;  /* Larger image size */
  height: 200px;
  object-fit: cover;
  border-radius: 0%; /* Square borders */
  border: 2px solid #ccc;
`;

const MemberName = styled.h3`
  margin-top: 10px;
  margin-bottom: 5px;
`;

const MemberCaption = styled.p`
  font-size: 14px;
  color: #666;
`;

const eboard = [
  {
    name: "President",
    major: "Computer Science",
    year: "Senior",
    hometown: "New York, NY",
    imageUrl: Ben
  },
  {
    name: "Vice President",
    major: "Biology",
    year: "Junior",
    hometown: "Los Angeles, CA",
    imageUrl: Joe
  },
  {
    name: "Treasurer",
    major: "Engineering",
    year: "Sophomore",
    hometown: "Chicago, IL",
    imageUrl: David
  },
  {
    name: "Social Chair",
    major: "Mathematics",
    year: "Freshman",
    hometown: "Houston, TX",
    imageUrl: Shastoo
  },
  {
    name: "Health and Safety Chair",
    major: "Physics",
    year: "Senior",
    hometown: "Miami, FL",
    imageUrl: Jake
  },
  {
    name: "Philanthropy Chair",
    major: "Chemistry",
    year: "Junior",
    hometown: "Seattle, WA",
    imageUrl: Ian
  },
  {
    name: "Marketing Chair",
    major: "Economics",
    year: "Sophomore",
    hometown: "Boston, MA",
    imageUrl: Gavin
  },
  {
    name: "Recruitment Chair",
    major: "Art",
    year: "Freshman",
    hometown: "San Francisco, CA",
    imageUrl: Jacob
  },
  {
    name: "Alumni Relations Chair",
    major: "Art",
    year: "Freshman",
    hometown: "San Francisco, CA",
    imageUrl: Alex
  }
];

class RosterPage extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Container>
          <RosterSection>
            <h1>Meet the Eboard</h1>
            <ImageGrid>
              {eboard.map((member, index) => (
                <MemberContainer key={index}>
                  <MemberImage src={member.imageUrl} alt={member.name} />
                  <MemberName>{member.name}</MemberName>
                  <MemberCaption>Major: {member.major}</MemberCaption>
                  <MemberCaption>Year: {member.year}</MemberCaption>
                  <MemberCaption>Hometown: {member.hometown}</MemberCaption>
                </MemberContainer>
              ))}
            </ImageGrid>
          </RosterSection>
        </Container>
      </>
    );
  }
}

export default RosterPage;

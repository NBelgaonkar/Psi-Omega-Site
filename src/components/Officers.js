import React from 'react';
import styled from 'styled-components';
import Alex from '../Images/AlexF24.jpg';
import Ben from '../Images/BenF24.jpg';
import David from '../Images/David2F24.jpg';
import Gavin from '../Images/GavinF24.jpg';
import Ian from '../Images/IanF24.jpg';
import Jake from '../Images/JakeF24.jpg';
import Jacob from '../Images/JacobF24.jpg';
import Joe from '../Images/JoeF24.jpg';
import Shastoo from '../Images/ShastooF24.jpg';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding: 50px;
`;

const Section = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-top: 50px;
  color: black;
`;

const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  text-align: center;
`;

const PositionTitle = styled.h3`
  margin-top: 10px;
  margin-bottom: 0px;
`;

const MemberName = styled.p`
  font-size: 18px;
  color: #666;
  margin: 5px 0;
`;

const MemberCaption = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border: 2px solid #ccc;
`;

const eboard = [
  {
    position: "President",
    name: "Benjamin Rodgers",
    major: "Computer Science",
    year: "'26",
    hometown: "Souderton, PA",
    imageUrl: Ben
  },
  {
    position: "Vice President",
    name: "Joseph Kirschner",
    major: "Mechanical Engineering",
    year: "'26",
    hometown: "Kingston, NY",
    imageUrl: Joe
  },
  {
    position: "Treasurer",
    name: "David Smith",
    major: "Business Analytics / Computer Science",
    year: "'26",
    hometown: "Newton, MA",
    imageUrl: David
  },
  {
    position: "Social Chair",
    name: "Shastraveer Thapa",
    major: "Engineering",
    year: "'27",
    hometown: "Nepal",
    imageUrl: Shastoo
  },
  {
    position: "Health and Safety Chair",
    name: "Jake Mandel",
    major: "Information Technology and Web Science",
    year: "'26",
    hometown: "State Hill, NY",
    imageUrl: Jake
  },
  {
    position: "Philanthropy Chair",
    name: "Ian Lewis",
    major: "Math and Computer Science",
    year: "'26",
    hometown: "Pleasant Valley, NY",
    imageUrl: Ian
  },
  {
    position: "Marketing Chair",
    name: "Gavin MacKenzie",
    major: "Aeronautical / Mechanical Engineering",
    year: "'25",
    hometown: "Kirkland, WA",
    imageUrl: Gavin
  },
  {
    position: "Recruitment Chair",
    name: "Jacob Edwards",
    major: "Computer Science / Business Analytics",
    year: "'25",
    hometown: "Fairfax Station, VA",
    imageUrl: Jacob
  },
  {
    position: "Alumni Relations Chair",
    name: "Alexander Orr",
    major: "Computer Science",
    year: "'24",
    hometown: "Danbury, CT",
    imageUrl: Alex
  },
];

const officerBoard = [
  {
    position: "Brotherhood Chair",
    name: "Nikhil Belgaonkar",
    major: "Computer Science / Economics",
    year: "'26",
    hometown: "Lexington, MA"
  },
  {
    position: "House Manager",
    name: "Theodore Olinkiewicz",
    major: "Biomedical Engineering",
    year: "'25",
    hometown: "Shelter Island, NY"
  },
  {
    position: "Secretary",
    name: "Shastraveer Thapa",
    major: "Engineering",
    year: "'27",
    hometown: "Nepal"
  },
  {
    position: "Academic Chair",
    name: "Alexander Orr",
    major: "Computer Science",
    year: "'24",
    hometown: "Danbury, CT"
  },
  {
    position: "IFC Delegate",
    name: "Ian Lewis",
    major: "Math and Computer Science",
    year: "'26",
    hometown: "Pleasant Valley, NY"
  },
  {
    position: "Live-in-Advisor",
    name: "Theodore Olinkiewicz",
    major: "Biomedical Engineering",
    year: "'25",
    hometown: "Shelter Island, NY"
  },
  {
    position: "Associate Member Educator",
    name: "Unfilled Position",
    major: "",
    year: "",
    hometown: ""
  },
  {
    position: "Sergeant at Arms",
    name: "Unfilled Position",
    major: "",
    year: "",
    hometown: ""
  },
  {
    position: "DEIB Representative",
    name: "Joseph Kirschner",
    major: "Mechanical Engineering",
    year: "'26",
    hometown: "Kingston, NY"
  },
];

const MemberList = ({ title, members, showImages }) => (
  <Section>
    <h1>{title}</h1>
    {showImages ? (
      <ImageGrid>
        {members.map((member, index) => (
          <MemberContainer key={index}>
            {member.imageUrl && <MemberImage src={member.imageUrl} alt={member.position} />}
            <PositionTitle>{member.position}</PositionTitle>
            <MemberName>{member.name} {member.year}</MemberName>
            <MemberCaption>Major: {member.major}</MemberCaption>
            <MemberCaption>Hometown: {member.hometown}</MemberCaption>
          </MemberContainer>
        ))}
      </ImageGrid>
    ) : (
      <ImageGrid>
      {members.map((member, index) => (
        <MemberContainer key={index}>
          <PositionTitle>{member.position}</PositionTitle>
          <MemberName>{member.name} {member.year}</MemberName>
          <MemberCaption>Major: {member.major}</MemberCaption>
          <MemberCaption>Hometown: {member.hometown}</MemberCaption>
        </MemberContainer>
        
      ))}
      </ImageGrid>
    )}
  </Section>
);

class OfficerPage extends React.Component {
  render() {
    return (
      <>
        <Container>
          <MemberList title="Meet the Executive Board" members={eboard} showImages={true} />
          <MemberList title="Meet the Officer Board" members={officerBoard} showImages={false} />

        </Container>
      </>
    );
  }
}

export default OfficerPage;

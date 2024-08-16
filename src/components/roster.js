import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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

const MemberSubCaption = styled.p`
  font-size: 18px; /* Larger than MemberCaption, smaller than MemberName */
  color: #444;
  margin: 5px 0;
`;

const MemberCaption = styled.p`
  font-size: 14px;
  color: #666;
`;

const eboard = [
  {
    name: "Ben Rodgers",
    major: "Computer Science",
    year: "'26",
    hometown: "Penn",
    imageUrl: "https://via.placeholder.com",
    subCaption: "President"
  },
  {
    name: "Joe Kirschner",
    major: "Mech E",
    year: "Junior",
    hometown: "NY",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Vice President"
  },
  {
    name: "David Smith",
    major: "CS",
    year: "Junior",
    hometown: "???",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Treasurer"
  },
  {
    name: "Nikhil Belgaonkar",
    major: "CS",
    year: "Junior",
    hometown: "MA",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Social Chair"
  },
  {
    name: "Jake Mandel",
    major: "Cs",
    year: "Junior",
    hometown: "NY",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Health and Safety Chair"
  },
  {
    name: "Ian Lewis",
    major: "CS",
    year: "Junior",
    hometown: "NY",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Philanthropy Chair"
  },
  {
    name: "Gavin M",
    major: "Aero",
    year: "Senior",
    hometown: "Washington",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Marketing Chair"
  },
  {
    name: "Jacob Edwards",
    major: "CS",
    year: "Senior",
    hometown: "VA",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Recruitment Chair"
  },
  {
    name: "THo",
    major: "Bio",
    year: "Senior",
    hometown: "NY",
    imageUrl: "https://via.placeholder.com",
    subCaption: "Alumni Relations Chair"
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
                  <MemberSubCaption>{member.subCaption}</MemberSubCaption>
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

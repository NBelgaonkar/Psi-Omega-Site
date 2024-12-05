import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import crest from '../Images/Psi-Omega-Crest.png';
import defaultProfileImage from '../Images/blank-profile-picture.png';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-top: 50px;
  color: black;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
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
const CrestImage = styled.img`
  width: 200px;
  margin-top: 20px;
`;
const poaa_board = [
  {
    position: "President",
    name: "Unknown",
    year: "'26",
    imageUrl: defaultProfileImage
  },
  {
    position: "Vice President",
    name: "Unknown",
    year: "'26",
    imageUrl: defaultProfileImage
  },
  {
    position: "Treasurer",
    name: "Unknown",
    year: "'26",
    imageUrl: defaultProfileImage
  },
  {
    position: "Board Member",
    name: "Unknown",
    year: "'27",
    imageUrl: defaultProfileImage
  },
  {
    position: "Board Member",
    name: "Unknown",
    year: "'26",
    imageUrl: defaultProfileImage
  },
  {
    position: "Board Member",
    name: "Unknown",
    year: "'26",
    imageUrl: defaultProfileImage
  },
  {
    position: "Board Member",
    name: "Unknown",
    year: "'25",
    imageUrl: defaultProfileImage
  },
  {
    position: "Board Member",
    name: "Unknown",
    year: "'25",
    imageUrl: defaultProfileImage
  },
  {
    position: "Board Member",
    name: "Unknown",
    year: "'24",
    imageUrl: defaultProfileImage
  },
];

const MemberList = ({ title, members }) => (
  <Section>
    <h1>{title}</h1>
    <ImageGrid>
      {members.map((member, index) => (
        <MemberContainer key={index}>
          {member.imageUrl && <MemberImage src={member.imageUrl} alt={member.position} />}
          <PositionTitle>{member.position}</PositionTitle>
          <MemberName>{member.name} {member.year}</MemberName>
        </MemberContainer>
      ))}
    </ImageGrid>
    
  </Section>
);
const POAA = () => {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Psi Omega Alumni Association</Title>
        <Paragraph>
          The Psi Omega Alumni Association (POAA) is dedicated to fostering lifelong connections between alumni and the
          active chapter, supporting professional development, and preserving the rich legacy of Psi Omega. With a
          network of accomplished and dedicated members, POAA provides resources, mentorship, and opportunities to
          ensure the continued success of our brotherhood.
        </Paragraph>

        <MemberList title="Meet the POAA Board" members={poaa_board} />
        <CrestImage src={crest} alt="DKE Crest" />
      </Container>
    </>
  );
};

export default POAA;




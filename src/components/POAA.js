import React from 'react';
import styled from 'styled-components';
import poaaData from '../content/POAAboard.json';



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


const MemberList = ({ title, data }) => (
  <Section>
    <h1>{title}</h1>
    <ImageGrid>
      {data.members.map((member, index) => (
        <MemberContainer key={index}>
          {member.imageUrl && <MemberImage src={require("../Images/" + data.imagesPath + member.imageUrl)} alt={member.position} />}
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
      <Container>
        <Title>Psi Omega Alumni Association</Title>
        <Paragraph>
          The Psi Omega Alumni Association (POAA) is dedicated to fostering lifelong connections between alumni and the
          active chapter, supporting professional development, and preserving the rich legacy of Psi Omega. With a
          network of accomplished and dedicated members, POAA provides resources, mentorship, and opportunities to
          ensure the continued success of our brotherhood.
        </Paragraph>

        <MemberList title="Meet the POAA Board" data={poaaData} />
      </Container>
    </>
  );
};

export default POAA;




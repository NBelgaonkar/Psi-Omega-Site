import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import eboardData from '../content/F24/Eboard.json';
import oboardData from '../content/F24/Oboard.json';

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

const MemberList = ({ title, data }) => (
  <Section>
    <h1>{title}</h1>
    {data.showImages ? (
      <ImageGrid>
        {data.members.map((member, index) => (
          <MemberContainer key={index}>
            {member.imageUrl && <MemberImage src={require("../Images/" + data.imagesPath + member.imageUrl)} alt={member.position} />}
            <PositionTitle>{member.position}</PositionTitle>
            <MemberName>{member.name} {member.year}</MemberName>
            <MemberCaption>Major: {member.major}</MemberCaption>
            <MemberCaption>Hometown: {member.hometown}</MemberCaption>
          </MemberContainer>
        ))}
      </ImageGrid>
    ) : (
      <ImageGrid>
      {data.members.map((member, index) => (
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
      <Container>
        <MemberList title="Meet the Executive Board" data={eboardData} />
        <MemberList title="Meet the Officer Board" data={oboardData} />
      </Container>
    );
  }
}

export default OfficerPage;

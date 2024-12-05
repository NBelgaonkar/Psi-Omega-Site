import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import deltaAward from '../Images/deltaaward.png';

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
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  background-color: #f7f2f3;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;
  text-align: center; /* Changed text alignment to center */
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: center; /* Changed text alignment to center */
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const AwardImage = styled.img`
  max-width: 400px;
  height: auto;
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #fff;
`;

const Awards = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Awards</Title>

        <ImageSection>
          <SubTitle>Delta Award Picture</SubTitle>
          <Paragraph>Below is the Delta Award picture:</Paragraph>
          <AwardImage src={deltaAward} alt="Delta Award" />
        </ImageSection>

        <Section>
          <SubTitle>The Delta Award</SubTitle>
          <Paragraph>
            The Delta Award of Delta Kappa Epsilon (DKE) is presented annually to the chapter that demonstrates the most dramatic improvement in operations during the academic year. This prestigious award recognizes a chapter's holistic growth and its ability to embody the values, mission, and spirit of DKE.
          </Paragraph>
          <Paragraph>
            Judges evaluate chapters based on a variety of criteria, including academic performance, recruiting and new member education, alumni relations, community service, leadership on campus, and effective communication with International. Attendance at conventions and overall contributions to the DKE community are also considered. The Delta Award celebrates chapters that set an example for others by showcasing excellence in all aspects of fraternity life.
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default Awards;

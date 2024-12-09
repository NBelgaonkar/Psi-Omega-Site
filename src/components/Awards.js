import React from 'react';
import deltaAward from '../Images/deltaaward.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px; /* Limits width for better readability */
  margin: 10px 0;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
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
      <Container>
        <Title>Delta Kappa Epsilon Awards</Title>

        <ImageSection>
          <AwardImage src={deltaAward} alt="Delta Award" />
        </ImageSection>

        <Section>
          <SubTitle>The Delta Award</SubTitle>
          <Paragraph>
            The Delta Award of Delta Kappa Epsilon (DKE) is presented annually to the chapter that demonstrates the most
            dramatic improvement in operations during the academic year. This prestigious award recognizes a chapter's
            holistic growth and its ability to embody the values, mission, and spirit of DKE.
          </Paragraph>
          <Paragraph>
            Judges evaluate chapters based on a variety of criteria, including academic performance, recruiting and new
            member education, alumni relations, community service, leadership on campus, and effective communication
            with International. Attendance at conventions and overall contributions to the DKE community are also
            considered. The Delta Award celebrates chapters that set an example for others by showcasing excellence in
            all aspects of fraternity life.
          </Paragraph>
          <SubTitle>Our Winning Formula</SubTitle>
          <Paragraph>
          Psi Omega was awarded the Delta Award for demonstrating remarkable resilience and growth over the past year. 
          Despite facing significant financial challenges, our chapter nearly tripled its membership, strengthened alumni
          relations, and revitalized its operations, including rewriting our Constitution and enhancing our philanthropic 
          efforts.
          </Paragraph>
          <Paragraph>
          Psi Omega also made impressive strides in campus presence, academic achievement, and community service,
          raising over $1,500 for charity and dedicating record-setting hours to philanthropic initiatives. These efforts
          showcase Psi Omega’s commitment to brotherhood, leadership, and excellence.
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default Awards;

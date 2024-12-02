import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

const AchievementList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

const AchievementItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AchievementTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const AchievementDate = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;

const AchievementContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const ChapterAchievements = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Chapter Achievements</Title>
        <Paragraph>
          Celebrate the milestones and accomplishments of Psi Omega. From academic excellence to community
          service, these achievements reflect the dedication and hard work of our brothers past and present.
        </Paragraph>

        <AchievementList>
          <AchievementItem>
            <AchievementTitle>Delta Award for Most Improved Chapter</AchievementTitle>
            <AchievementDate>Spring 2023</AchievementDate>
            <AchievementContent>
              Psi Omega was honored with the Delta Award for Most Improved Chapter by DKE International,
              recognizing our efforts in revitalizing the chapter and growing our membership.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Community Service Excellence Award</AchievementTitle>
            <AchievementDate>Fall 2022</AchievementDate>
            <AchievementContent>
              Our chapter received this award for outstanding contributions to local community projects,
              including park cleanups and charity fundraisers.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Top Academic Performance</AchievementTitle>
            <AchievementDate>Spring 2021</AchievementDate>
            <AchievementContent>
              Psi Omega achieved the highest GPA among fraternities at RPI, reflecting our commitment to academic success.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>10th Anniversary Celebration</AchievementTitle>
            <AchievementDate>Upcoming - April 2025</AchievementDate>
            <AchievementContent>
              Psi Omega is preparing for its 10th Anniversary Gala, a milestone event celebrating a decade of brotherhood,
              achievements, and memories.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Rechartering as Psi Omega Chapter</AchievementTitle>
            <AchievementDate>Spring 2023</AchievementDate>
            <AchievementContent>
              After 58 years, Psi Omega officially regained its chapter status, marking a historic moment in our fraternity’s legacy.
            </AchievementContent>
          </AchievementItem>
        </AchievementList>
      </Container>
    </>
  );
};

export default ChapterAchievements;

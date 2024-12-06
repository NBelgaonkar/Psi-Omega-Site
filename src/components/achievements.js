import React from 'react';

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
              recognizing our efforts in revitalizing the chapter and growing our membership. This milestone
              reflects the dedication of our brothers and alumni who worked tirelessly to rebuild and strengthen
              the chapter.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Community Service Excellence Award</AchievementTitle>
            <AchievementDate>Fall 2022</AchievementDate>
            <AchievementContent>
              Our chapter received this award for outstanding contributions to local community projects,
              including park cleanups and charity fundraisers. We partnered with local organizations to make
              a meaningful impact, demonstrating the values of service and brotherhood.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Top Academic Performance</AchievementTitle>
            <AchievementDate>Spring 2021</AchievementDate>
            <AchievementContent>
              Psi Omega achieved the highest GPA among fraternities at RPI, reflecting our commitment to academic success.
              Our dedicated study programs and peer tutoring sessions played a significant role in achieving this milestone.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>10th Anniversary Celebration</AchievementTitle>
            <AchievementDate>Upcoming - April 2025</AchievementDate>
            <AchievementContent>
              Psi Omega is preparing for its 10th Anniversary Gala, a milestone event celebrating a decade of brotherhood,
              achievements, and memories. The event will feature keynote speeches, a formal dinner, and opportunities
              to reconnect with alumni and current members.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Rechartering as Psi Omega Chapter</AchievementTitle>
            <AchievementDate>Spring 2023</AchievementDate>
            <AchievementContent>
              After 58 years, Psi Omega officially regained its chapter status, marking a historic moment in our fraternity’s legacy.
              This achievement symbolizes the resilience and dedication of our members and alumni who worked tirelessly
              to rebuild the chapter.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Philanthropy Partnership Expansion</AchievementTitle>
            <AchievementDate>Fall 2020</AchievementDate>
            <AchievementContent>
              Psi Omega expanded its philanthropic efforts by partnering with local charities and national organizations.
              These initiatives included fundraising events, food drives, and volunteer activities, showcasing our commitment
              to giving back to the community.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Brotherhood Retreat</AchievementTitle>
            <AchievementDate>Summer 2019</AchievementDate>
            <AchievementContent>
              Our annual retreat brought brothers together for a weekend of team-building, reflection, and goal setting.
              This event strengthened bonds and provided a platform for planning future chapter initiatives.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Leadership Development Series</AchievementTitle>
            <AchievementDate>Spring 2018</AchievementDate>
            <AchievementContent>
              Psi Omega introduced a leadership series aimed at developing skills in communication, project management,
              and team dynamics. Alumni and guest speakers hosted workshops, equipping members with tools for personal
              and professional growth.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Historic Preservation Award</AchievementTitle>
            <AchievementDate>Fall 2017</AchievementDate>
            <AchievementContent>
              Psi Omega received recognition for preserving and restoring historic artifacts and documents related to our chapter’s
              legacy. This project ensured that future generations can learn from and appreciate our rich history.
            </AchievementContent>
          </AchievementItem>

          <AchievementItem>
            <AchievementTitle>Interfraternity Council Collaboration Award</AchievementTitle>
            <AchievementDate>Spring 2016</AchievementDate>
            <AchievementContent>
              This award highlighted our efforts in fostering unity and collaboration among RPI’s fraternities and sororities.
              Psi Omega hosted interfraternity events that promoted inclusivity and mutual respect within the Greek community.
            </AchievementContent>
          </AchievementItem>
        </AchievementList>
      </Container>
    </>
  );
};

export default ChapterAchievements;

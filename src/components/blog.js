import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
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

const BlogList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const BlogItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
`;

const BlogDate = styled.p`
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
`;

const BlogContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: #0047AB;
`;

const BlogNews = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Blog & News</Title>
        <Paragraph>
          Stay updated with the latest news, stories, and updates from the Psi Omega fraternity. This page is your
          go-to source for fraternity announcements, member achievements, and community highlights. Explore the insights and stories
          that showcase the impact of Psi Omega.
        </Paragraph>

        <BlogList>
          <BlogItem>
            <BlogTitle>Welcome to the Psi Omega Blog</BlogTitle>
            <BlogDate>Posted on November 1, 2024</BlogDate>
            <BlogContent>
              We’re excited to launch our new blog! Here, you’ll find regular updates on our fraternity’s activities,
              events, and accomplishments. Stay tuned for more stories and news from Psi Omega. If you have suggestions for topics,
              please reach out to our communications team.
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Alumni Weekend Recap</BlogTitle>
            <BlogDate>Posted on September 30, 2024</BlogDate>
            <BlogContent>
              This year’s Alumni Weekend was a huge success! From the lunch gathering to the evening hangout,
              alumni and active members had a fantastic time reconnecting and sharing memories. Highlights included a keynote speech
              by <HighlightedText>John Doe</HighlightedText>, an alumni panel discussion, and a surprise musical performance by the Rusty Pipes.
              Thank you to everyone who attended!
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Psi Omega 10th Anniversary Gala Announcement</BlogTitle>
            <BlogDate>Posted on August 15, 2024</BlogDate>
            <BlogContent>
              Mark your calendars! Psi Omega will celebrate its 10th anniversary in April 2025 with a gala event.
              This will be a night to remember, featuring keynote speeches, dinner, and entertainment. Don’t miss out!
              Tickets will be available starting January 1, 2025. Reach out to our events coordinator for more details.
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Community Service Initiative</BlogTitle>
            <BlogDate>Posted on July 10, 2024</BlogDate>
            <BlogContent>
              Our fraternity recently participated in a local community service project, helping to clean up
              parks and support local families in need. Volunteers contributed over 100 hours of service,
              showcasing Psi Omega’s dedication to giving back. Stay tuned for our next service initiative coming this fall!
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Brother Spotlight: Achievements in Academia</BlogTitle>
            <BlogDate>Posted on June 5, 2024</BlogDate>
            <BlogContent>
              Congratulations to Brother <HighlightedText>James Smith</HighlightedText> for receiving the prestigious Dean’s Award for Excellence in Engineering!
              James has also been invited to present his research at the upcoming International Engineering Symposium.
              Psi Omega is incredibly proud of his achievements!
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Leadership Workshop Recap</BlogTitle>
            <BlogDate>Posted on May 20, 2024</BlogDate>
            <BlogContent>
              In partnership with the Rensselaer Center for Open Source, Psi Omega hosted a leadership workshop focused
              on effective communication and project management. The workshop featured guest speaker <HighlightedText>Emily Johnson</HighlightedText>,
              a renowned leadership coach, and included interactive sessions to enhance leadership skills.
            </BlogContent>
          </BlogItem>
        </BlogList>
      </Container>
    </>
  );
};

export default BlogNews;

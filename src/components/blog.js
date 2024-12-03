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

const BlogNews = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Blog & News</Title>
        <Paragraph>
          Stay updated with the latest news, stories, and updates from the Psi Omega fraternity. This page is your
          go-to source for fraternity announcements, member achievements, and community highlights.
        </Paragraph>

        <BlogList>
          <BlogItem>
            <BlogTitle>Welcome to the Psi Omega Blog</BlogTitle>
            <BlogDate>Posted on November 1, 2024</BlogDate>
            <BlogContent>
              We’re excited to launch our new blog! Here, you’ll find regular updates on our fraternity’s activities,
              events, and accomplishments. Stay tuned for more stories and news from Psi Omega.
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Alumni Weekend Recap</BlogTitle>
            <BlogDate>Posted on September 30, 2024</BlogDate>
            <BlogContent>
              This year’s Alumni Weekend was a huge success! From the lunch gathering to the evening hangout,
              alumni and active members had a fantastic time reconnecting and sharing memories. Thank you to
              everyone who attended!
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Psi Omega 10th Anniversary Gala Announcement</BlogTitle>
            <BlogDate>Posted on August 15, 2024</BlogDate>
            <BlogContent>
              Mark your calendars! Psi Omega will celebrate its 10th anniversary in April 2025 with a gala event.
              This will be a night to remember, featuring keynote speeches, dinner, and entertainment. Don’t miss out!
            </BlogContent>
          </BlogItem>

          <BlogItem>
            <BlogTitle>Community Service Initiative</BlogTitle>
            <BlogDate>Posted on July 10, 2024</BlogDate>
            <BlogContent>
              Our fraternity recently participated in a local community service project, helping to clean up
              parks and support local families in need. Thank you to all the brothers who volunteered their time!
            </BlogContent>
          </BlogItem>
        </BlogList>
      </Container>
    </>
  );
};

export default BlogNews;

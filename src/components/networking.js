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

const NetworkingList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const NetworkingItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h2`
  font-size: 28px;
  margin: 30px 0 20px;
  text-align: center;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #0047AB;
`;

const CareerNetworking = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>
          Career Networking
        </Title>

        <Paragraph>
          The Psi Omega Career Networking page is designed to connect alumni and active members with
          valuable career resources, mentorship opportunities, and professional growth. Whether you're
          looking for your next opportunity or willing to lend a hand to a brother, this platform ensures
          our network stays strong and supportive.
        </Paragraph>

        <SubTitle>Core Resources</SubTitle>

        <NetworkingList>
          <NetworkingItem>
            <strong>Job Board:</strong>
            Stay updated with job opportunities shared by alumni and active members.
            Post or browse openings in various industries. These postings are regularly updated
            and cover a wide range of fields to ensure inclusivity for all members.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Mentorship Program:</strong>
            Connect with experienced alumni for guidance on career paths, professional development,
            and industry insights. Alumni mentors offer personalized advice and provide a network of
            contacts to help boost your career prospects.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Internship Opportunities:</strong>
            Find internships offered by alumni or companies connected to Psi Omega members. These
            internships are an excellent way to gain hands-on experience and build valuable skills.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Resume Reviews:</strong>
            Get your resume reviewed by experienced professionals within the Psi Omega network.
            A polished resume can make a significant difference in landing your dream job or internship.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Workshops & Webinars:</strong>
            Participate in events hosted by alumni, including resume building, interview preparation,
            and industry trends. These workshops are tailored to equip members with practical skills
            and insights.
          </NetworkingItem>

          <NetworkingItem>
            <strong>LinkedIn Group:</strong>
            Join our exclusive Psi Omega LinkedIn group to stay connected and expand your professional network.
            This group is a hub for sharing resources, job openings, and professional experiences.
          </NetworkingItem>
        </NetworkingList>

        <SubTitle>Additional Features</SubTitle>

        <NetworkingList>
          <NetworkingItem>
            <strong>Peer Networking:</strong>
            Collaborate with brothers who are currently active in your field of interest. Share insights,
            discuss industry trends, and form study or project groups.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Career Spotlights:</strong>
            Learn from the experiences of successful alumni through detailed spotlights that highlight
            their journeys, challenges, and advice for aspiring professionals.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Career Development Library:</strong>
            Access a repository of articles, eBooks, and videos on professional growth, leadership,
            and industry-specific skills curated by Psi Omega members and alumni.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Guest Speaker Series:</strong>
            Participate in live Q&A sessions with distinguished professionals, providing direct
            access to their expertise and real-world experience.
          </NetworkingItem>
        </NetworkingList>

        <SubTitle>Exclusive Opportunities</SubTitle>

        <Paragraph>
          As a member of Psi Omega, you have access to <Highlight>exclusive opportunities</Highlight> not available elsewhere:
        </Paragraph>

        <NetworkingList>
          <NetworkingItem>
            <strong>Specialized Certifications:</strong>
            Enroll in certification programs offered through alumni partnerships, providing valuable
            credentials to enhance your resume and professional profile.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Global Alumni Network:</strong>
            Connect with Psi Omega alumni from around the world, expanding your reach beyond local or national boundaries.
          </NetworkingItem>

          <NetworkingItem>
            <strong>Private Job Listings:</strong>
            Gain access to job listings shared exclusively within the Psi Omega network, ensuring
            opportunities are targeted and tailored for our members.
          </NetworkingItem>
        </NetworkingList>
      </Container>
    </>
  );
};

export default CareerNetworking;

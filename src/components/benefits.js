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

const BenefitList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const BenefitItem = styled.li`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BenefitTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: left;
`;

const BenefitContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const SectionDivider = styled.hr`
  width: 80%;
  border: 1px solid #ccc;
  margin: 30px 0;
`;

const TestimonialSection = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 1000px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestimonialTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
`;

const TestimonialContent = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  color: #0047AB;
`;

const MembershipBenefits = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Membership Benefits</Title>
        <Paragraph>
          Joining Psi Omega offers a wide array of benefits that extend beyond your college years. From professional
          development to lifelong friendships, membership in Psi Omega is an investment in your personal and professional growth.
        </Paragraph>

        <SectionDivider />

        <BenefitList>
          <BenefitItem>
            <BenefitTitle>Leadership Development</BenefitTitle>
            <BenefitContent>
              Psi Omega provides numerous opportunities to develop leadership skills, including officer roles, committee
              chair positions, and access to leadership workshops and conferences. Gain practical experience in
              leading and managing teams, preparing you for real-world challenges.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Professional Networking</BenefitTitle>
            <BenefitContent>
              Build a robust professional network through connections with alumni, career fairs, and mentorship programs.
              Psi Omega’s network spans across various industries, offering members unique career opportunities and guidance.
              Our exclusive LinkedIn group and alumni database make it easy to connect with industry leaders.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Academic Support</BenefitTitle>
            <BenefitContent>
              Benefit from shared study resources, peer tutoring, and academic mentorship to excel in your coursework.
              Our fraternity emphasizes the importance of academic excellence and provides the tools to succeed, including
              GPA recognition awards and study hall sessions.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Philanthropy and Community Service</BenefitTitle>
            <BenefitContent>
              Make a positive impact by participating in community service projects and philanthropic initiatives.
              Psi Omega members contribute to meaningful causes, developing a sense of responsibility and empathy.
              Annual events like <HighlightedText>Charity Runs</HighlightedText> and <HighlightedText>Park Cleanups</HighlightedText> showcase our commitment to giving back.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Brotherhood and Lifelong Friendships</BenefitTitle>
            <BenefitContent>
              Experience a strong sense of camaraderie and belonging. Psi Omega fosters an environment of mutual
              respect, support, and friendship that lasts well beyond graduation. Regular social events and
              retreats strengthen these lifelong bonds.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Social Events and Networking</BenefitTitle>
            <BenefitContent>
              Enjoy a variety of social events, including formal banquets, mixers, and alumni gatherings. These
              events help build connections and create unforgettable memories with your brothers. Don’t miss the
              annual <HighlightedText>Psi Omega Formal Gala</HighlightedText>!
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Alumni Engagement</BenefitTitle>
            <BenefitContent>
              Stay connected with a vast network of alumni who are eager to support and mentor current members.
              Alumni involvement enhances the fraternity experience and opens doors to career opportunities. Alumni
              weekends provide a platform to reconnect and share experiences.
            </BenefitContent>
          </BenefitItem>

          <BenefitItem>
            <BenefitTitle>Personal Growth</BenefitTitle>
            <BenefitContent>
              Psi Omega encourages members to step out of their comfort zones, take on challenges, and grow as
              individuals. Build confidence, resilience, and skills that will serve you for a lifetime.
              Participate in self-development workshops to unlock your potential.
            </BenefitContent>
          </BenefitItem>
        </BenefitList>

        <SectionDivider />

        <TestimonialSection>
          <TestimonialTitle>What Our Members Say</TestimonialTitle>
          <TestimonialContent>
            "Joining Psi Omega was the best decision of my college career. The leadership skills I gained, the
            lifelong friendships I made, and the professional connections I formed have been invaluable. Psi Omega
            truly is a brotherhood for life." – <HighlightedText>John Doe, Class of 2023</HighlightedText>
          </TestimonialContent>
          <TestimonialContent>
            "Psi Omega’s focus on community service and personal growth has shaped me into a more confident and
            well-rounded individual. I’m proud to be part of such an amazing organization." – <HighlightedText>Jane Smith, Class of 2022</HighlightedText>
          </TestimonialContent>
        </TestimonialSection>
      </Container>
    </>
  );
};

export default MembershipBenefits;

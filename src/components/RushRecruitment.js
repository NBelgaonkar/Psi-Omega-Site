// src/components/RushRecruitment.js

import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 100px auto 0;
  padding: 20px;
`;

const Title = styled.h1`
  color: #231942;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SubTitle = styled.h2`
  color: #5e548e;
`;

const EventList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const EventItem = styled.li`
  margin-bottom: 20px;
`;

const InterestForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #231942;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RushRecruitment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <PageContainer>
      <Title>Rush & Recruitment</Title>
      
      <Section>
        <SubTitle>Upcoming Rush Events</SubTitle>
        <EventList>
          <EventItem>
            <h3>Open House</h3>
            <p>Date: September 15, 2024</p>
            <p>Time: 7:00 PM - 9:00 PM</p>
            <p>Location: DKE House</p>
          </EventItem>
          <EventItem>
            <h3>BBQ & Games</h3>
            <p>Date: September 17, 2024</p>
            <p>Time: 5:00 PM - 8:00 PM</p>
            <p>Location: Campus Quad</p>
          </EventItem>
          {/* Add more events as needed */}
        </EventList>
      </Section>

      <Section>
        <SubTitle>Express Your Interest</SubTitle>
        <InterestForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email" required />
          <Input type="tel" placeholder="Phone Number" />
          <Input type="text" placeholder="Major" />
          <Input type="text" placeholder="Year" />
          <SubmitButton type="submit">Submit</SubmitButton>
        </InterestForm>
      </Section>
    </PageContainer>
  );
};

export default RushRecruitment;
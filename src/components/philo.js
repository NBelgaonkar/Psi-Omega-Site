// Philo.js
import React from 'react';
import styled from 'styled-components';

const PhiloWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  color: #231942;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  line-height: 1.6;
  color: #333;
`;

const List = styled.ul`
  margin-bottom: 15px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Philo = () => {
  return (
    <PhiloWrapper>
      <Heading>DKE Philanthropy</Heading>
      <Paragraph>
        At Delta Kappa Epsilon (DKE), philanthropy and community service are
        central to our mission. We believe in giving back to our community and
        making a positive impact through various initiatives. Here are some of
        the ways we contribute:
      </Paragraph>
      <List>
        <ListItem>
          <strong>Tutoring Programs:</strong> DKE members volunteer their time
          to provide tutoring and academic support to local students, helping
          them achieve their educational goals.
        </ListItem>
        <ListItem>
          <strong>Food Pantry Support:</strong> We actively participate in
          supporting local food pantries by organizing food drives and
          volunteering to distribute food to those in need.
        </ListItem>
        <ListItem>
          <strong>Community Clean-Ups:</strong> Our fraternity regularly
          organizes community clean-up events to help maintain and beautify our
          local environment.
        </ListItem>
        <ListItem>
          <strong>Charity Fundraisers:</strong> We host various events
          throughout the year to raise funds for charitable organizations and
          causes we care about.
        </ListItem>
        <ListItem>
          <strong>Mentorship Programs:</strong> DKE offers mentorship
          opportunities for young individuals, providing guidance and support in
          their personal and professional development.
        </ListItem>
      </List>
      <Paragraph>
        Through these efforts, DKE aims to foster a spirit of generosity and
        service, empowering our members to make meaningful contributions to
        society.
      </Paragraph>
    </PhiloWrapper>
  );
};

export default Philo;

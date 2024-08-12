// WhyRushDKE.js
import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
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

const WhyRushDKE = () => {
  return (
    <InfoWrapper>
      <Heading>Why Rush DKE?</Heading>
      <Paragraph>
        Joining Delta Kappa Epsilon (DKE) at RPI offers a unique opportunity to
        become part of a brotherhood that emphasizes leadership, community, and
        personal development. Here are some reasons why you might consider
        rushing DKE:
      </Paragraph>
      <List>
        <ListItem>
          <strong>Brotherhood:</strong> Experience a lifelong bond with members
          who support each other both during and after college.
        </ListItem>
        <ListItem>
          <strong>Leadership Opportunities:</strong> DKE provides numerous
          opportunities to develop leadership skills through various roles and
          responsibilities within the fraternity.
        </ListItem>
        <ListItem>
          <strong>Community Service:</strong> Participate in community service
          projects and make a positive impact both on-campus and off-campus.
        </ListItem>
        <ListItem>
          <strong>Academic Support:</strong> Benefit from a network of brothers
          who can offer guidance and support in your academic pursuits.
        </ListItem>
        <ListItem>
          <strong>Social Events:</strong> Enjoy social gatherings, events, and
          mixers that help build friendships and create lasting memories.
        </ListItem>
      </List>
      <Paragraph>
        DKE is committed to fostering an inclusive environment that encourages
        personal growth and development. If you're looking for a place to grow,
        make lifelong friends, and make a difference, consider rushing DKE.
      </Paragraph>
    </InfoWrapper>
  );
};

export default WhyRushDKE;

// Alumni.js
import React from 'react';
import styled from 'styled-components';

const AlumniWrapper = styled.div`
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

const Alumni = () => {
  return (
    <AlumniWrapper>
      <Heading>Famous DKE Alumni</Heading>
      <Paragraph>
        Delta Kappa Epsilon (DKE) has a rich history of notable alumni who have
        made significant contributions in various fields. Here are some of the
        most famous DKE alumni:
      </Paragraph>
      <List>
        <ListItem>
          <strong>George H. W. Bush:</strong> 41st President of the United
          States.
        </ListItem>
        <ListItem>
          <strong>George W. Bush:</strong> 43rd President of the United States.
        </ListItem>
        <ListItem>
          <strong>Theodore Roosevelt:</strong> 26th President of the United
          States and Nobel Peace Prize recipient.
        </ListItem>
        <ListItem>
          <strong>Gerald Ford:</strong> 38th President of the United States.
        </ListItem>
        <ListItem>
          <strong>Joe Paterno:</strong> Legendary college football coach at Penn
          State.
        </ListItem>
        <ListItem>
          <strong>Alan Bean:</strong> Apollo 12 astronaut and the fourth person
          to walk on the moon.
        </ListItem>
        <ListItem>
          <strong>William Randolph Hearst:</strong> Influential newspaper
          publisher and media mogul.
        </ListItem>
        <ListItem>
          <strong>J.P. Morgan:</strong> Renowned financier and banker who played
          a key role in the development of modern American finance.
        </ListItem>
      </List>
      <Paragraph>
        These alumni exemplify the leadership and achievement that DKE
        encourages in its members. Joining DKE means becoming part of a legacy
        of excellence and success.
      </Paragraph>
    </AlumniWrapper>
  );
};

export default Alumni;

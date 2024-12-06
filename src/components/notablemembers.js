import React from 'react';
import styled from 'styled-components';
import placeholderImage from '../Images/placeholder.png'; // Replace with actual images

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
`;

const SectionTitle = styled.h2`
  color: #221F73;
  margin-bottom: 20px;
  text-align: center;
`;

const MemberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const MemberCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
  max-width: 200px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const MemberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const MemberName = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 10px 0 5px;
`;

const MemberTitle = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

const MemberDescription = styled.p`
  font-size: 12px;
  color: #777;
`;

const NotableMembers = () => {
  const presidents = [
    { name: 'Rutherford B. Hayes', title: '19th President of the United States', image: placeholderImage },
    { name: 'Theodore Roosevelt', title: '26th President of the United States', image: placeholderImage },
    { name: 'Franklin D. Roosevelt', title: '32nd President of the United States', image: placeholderImage },
    { name: 'Gerald Ford', title: '38th President of the United States', image: placeholderImage },
    { name: 'George H. W. Bush', title: '41st President of the United States', image: placeholderImage },
    { name: 'George W. Bush', title: '43rd President of the United States', image: placeholderImage },
  ];

  const vicePresidents = [
    { name: 'Dan Quayle', title: '44th Vice President of the United States', image: placeholderImage },
    { name: 'Theodore Roosevelt', title: '25th Vice President of the United States', image: placeholderImage },
    { name: 'Gerald Ford', title: '40th Vice President of the United States', image: placeholderImage },
    { name: 'George H. W. Bush', title: '43rd Vice President of the United States', image: placeholderImage },
  ];

  const notableMembers = [
    { name: 'Joe Paterno', title: 'Football Coach', image: placeholderImage },
    { name: 'Herb Kelleher', title: 'Founder of Southwest Airlines', image: placeholderImage },
    { name: 'J.P. Morgan, Jr.', title: 'Financier and Philanthropist', image: placeholderImage },
    { name: 'William Randolph Hearst', title: 'Publishing Magnate', image: placeholderImage },
    { name: 'Cole Porter', title: 'Composer and Songwriter', image: placeholderImage },
    { name: 'Brett Kavanaugh', title: 'Associate Justice of the Supreme Court', image: placeholderImage },
    { name: 'Ron DeSantis', title: 'Governor of Florida', image: placeholderImage },
    { name: 'Bradley Palmer', title: 'Lawyer and Industrialist', image: placeholderImage },
    { name: 'Henry Cabot Lodge', title: 'Senator and Diplomat', image: placeholderImage },
    { name: 'Dick Clark', title: 'Television Host and Producer', image: placeholderImage },
    { name: 'Tom Landry', title: 'NFL Coach', image: placeholderImage },
    { name: 'Alan Bean', title: 'Astronaut', image: placeholderImage },
  ];

  const renderMembers = (members) => {
    return members.map((member, index) => (
      <MemberCard key={index}>
        <MemberImage src={member.image} alt={member.name} />
        <MemberName>{member.name}</MemberName>
        <MemberTitle>{member.title}</MemberTitle>
        {member.description && <MemberDescription>{member.description}</MemberDescription>}
      </MemberCard>
    ));
  };

  return (
    <PageContainer>
      <SectionTitle>United States Presidents</SectionTitle>
      <MemberGrid>{renderMembers(presidents)}</MemberGrid>

      <SectionTitle>Vice Presidents</SectionTitle>
      <MemberGrid>{renderMembers(vicePresidents)}</MemberGrid>

      <SectionTitle>Other Notable Members</SectionTitle>
      <MemberGrid>{renderMembers(notableMembers)}</MemberGrid>
    </PageContainer>
  );
};

export default NotableMembers;

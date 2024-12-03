// Importing React, useState and styled-components
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import crest from '../Images/Psi-Omega-Crest.png'; // Import the crest image


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:wght@400;700&display=swap');

  body {
    font-family: 'Literata', serif;
    background-color: #F5F5F5;
    margin: 0;
    padding: 0;
  }
`;

// FAQ Page main container styling
const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  min-height: 100vh;
  padding: 20px;
  background-color: #ffffff;
`;


// FAQ Section styling
const FAQSection = styled.section`
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Styled components for the dropdown
const Question = styled.h3`
  margin: 0;
  padding: 15px 20px;
  font-size: 1.2rem;
  background-color: #f7f7f7;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0f7fa;
  }
`;

const Answer = styled.p`
  margin: 0;
  padding: 20px;
  font-size: 1rem;
  line-height: 1.5;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  background-color: #fafafa;
`;
const CrestImage = styled.img`
  width: 200px;
  margin-top: 20px;
`;
// Individual FAQ Item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Question onClick={toggle}>{question}</Question>
      <Answer isOpen={isOpen}>
        {Array.isArray(answer)
          ? answer.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))
          : <p dangerouslySetInnerHTML={{ __html: answer }} />}
      </Answer>
    </div>
  );
};



// FAQ component
const FAQ = () => {
  const faqData = [
    {
      question: "What is a fraternity?",
      answer:
        "A fraternity is a group of individuals that share more than an identity or university. They bind themselves with life-long friendships through common goals, values, and history.",
    },
    {
      question: "How is the Delta Kappa Epsilon fraternity different?",
      answer: [
        "Delta Kappa Epsilon is truly a life-long allegiance. The ties that bind us together go beyond graduation, state or national boundaries, political or philosophical lines, or even war. That love that comes from the combination of stout hearts and kindred interests is extraordinary; it lasts while life lasts.",
        "Additionally, Delta Kappa Epsilon is an elite fraternity. As a fraternity with a footprint at relatively few universities, the ties of brotherhood extend to a vast number of entrepreneurs, politicians, and great men. Dekes were some of the first to step on the moon and to reach the North Pole. More U.S. Presidents are Dekes than any other fraternity can claim. Thousands of Dekes gave their lives in service of their nation in every great war since the Civil War. Dekes led neurosurgery development, Olympic-winning teams, and many household names like J.P Morgan, Boeing, Kraft Foods, and Coca-Cola to name a few.", 
        "Dekes are few, but they are great."
      ]
    },
    {
      question: "What are DKE's goals as a fraternity?",
      answer:
        "The goals of Delta Kappa Epsilon, as outlined in its \"Objects,\" focus on fostering a well-rounded intellectual and social development. These include encouraging academic and cultural excellence, promoting honorable friendships and active citizenship, and cultivating a spirit of tolerance and respect for others' rights and perspectives. Additionally, the fraternity values maintaining dignity, self-respect, and moral integrity in all situations, while uniting individuals with shared interests and strong character to achieve meaningful rewards."
    },
    {
      question: "Does DKE have membership criteria?",
      answer: [
        "Yes. Internationally, all Dekes are required to hold good academic standing, be men of high moral character, be considerate of the rights and views of others, be courteous, gentlemanly, self-respecting, and hold an appreciation of the objects and principles of Delta Kappa Epsilon.",
        "Locally at RPI, our chapter has the additional requirements of maintaining a minimum of a 2.5 GPA (academic assistance is provided to all members with a GPA below 3.0), contributing 8-15 hours of philanthropy to their community each semester, attending weekly business meetings on the weekends, and cultivating our fraternity culture."
      ]
    },
    {
      question:
        "Does DKE favor or discriminate against any physical or cultural characteristic when selecting new members?",
      answer:
        "Besides maintaining our status as a male-only fraternity, we strictly prohibit and discourage any level of discrimination. Article V, Section II of our Constitution states 'No DKE chapter shall consider the race, creed, color, or national origin of an eligible student in pledging and initiating into membership in DELTA KAPPA EPSILON.' Any member found in violation of this Article will be promptly expelled from our ranks with a zero-tolerance policy."
    },
    {
      question: "What is DKE’s stance on hazing in college fraternities?",
      answer: [
        "In short, hazing is illegal and immoral; therefore it has no place in our Fraternity. More importantly, Delta Kappa Epsilon holds its members to the highest standard possible. Whereas hazing violates local, state, and federal law it also violates the Objects of Delta Kappa Epsilon, particularly 'the maintenance of gentlemanly dignity, self-respect, and morality in all circumstances.' Hazing is therefore strictly forbidden.",
        "Our Chapter specifically is uniquely distanced from these acts. The RPI DKE Chapter was inactive for over 50 years and never cultivated a culture of hazing. When we were re-founded in 2015, Delta Kappa Epsilon ensured that no part of hazing practices would be passed on to us. This is something our members have cherished, and we maintain that no practices should be introduced that would degrade our own members.",
        "For more information, please see our <a href='/about/health-and-safety' target='_blank' rel='noopener noreferrer'>Health & Safety Policy</a> and Fraternity Standards on DKE's <a href='https://dke.org/standards/' target='_blank' rel='noopener noreferrer'>official website</a>."
      ]
    },
    {
      question: "What is the value of becoming a member?",
      answer: [
        "Members of Delta Kappa Epsilon are presented with many unique opportunities that other students do not have. First, members are part of a deeply connected Brotherhood with a variety of interests, beliefs, and backgrounds where anyone can feel welcome. Fun, engaging events occur regularly for our members to bond and enjoy companionship. The constant influx of new members means that you are always meeting and connecting with new people every semester.",
        "Academically, our members find endless support and resources to boost their scholastic abilities. We understand that Dekes came to school to be students, not fraternity men, so school is a priority that triumphs all. Many brothers increase their GPAs after joining by leveraging the academic support that DKE provides.",
        "Professionally, Dekes have access to a vast alumni network which includes brothers from Ivy League schools, Stanford, and other elite universities in addition to our own RPI alumni network. Most of our members secure internships and excellent careers thanks to these networks and opportunities for career mentoring.",
        "Finally, and most importantly, Dekes experience critical personal development of their character, worldview, and dreams thanks to their time in our Chapter. The essence of the fraternity organization grounds members to be part of something greater. Seniors constantly offer guidance to younger Dekes like those before them. This cycle allows the men of our Chapter to blossom into astonishing individuals who go on to do amazing things."
      ]
    },
  ];

  return (
    <>
      <GlobalStyle />
      <FAQContainer>
        <h1>Frequently Asked Questions</h1>
        <FAQSection>
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </FAQSection>
        <CrestImage src={crest} alt="DKE Crest" />

      </FAQContainer>
    </>
  );
};

// Exporting FAQ for use in other parts of the application
export default FAQ;

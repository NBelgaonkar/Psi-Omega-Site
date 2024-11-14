// Importing React, useState and styled-components
import React, { useState } from 'react';
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

// FAQ Page main container styling
const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  min-height: 100vh;
  padding: 40px 20px;
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

// Individual FAQ Item component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Question onClick={toggle}>{question}</Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </div>
  );
};

// FAQ component
const FAQ = () => {
  const faqData = [
    {
      question: "What is a fraternity?",
      answer:
        "A fraternity is a group of individuals bound into life-long friendship by commonly held goals or values.",
    },
    {
      question: "How is the Delta Kappa Epsilon fraternity different?",
      answer:
        "Delta Kappa Epsilon is truly a life-long allegiance. The ties that bind us together stop not at graduation, at state or national boundaries, at political or philosophical lines, or even in war. That love which comes from the combination of stout hearts and kindred interests is truly special; it lasts while life lasts.",
    },
    {
      question: "How can the fraternity's bonds last even between warring parties?",
      answer:
        "Read the “Brothers in DKE” Civil War Poem which qualities best exemplify a Deke. An age-old DKE adage states that Dekes display in equal parts “the gentleman, the scholar, and the jolly good fellow.”",
    },
    {
      question: "What are DKE's goals as a fraternity?",
      answer:
        "DKE’s stated goals are the “Objects of Delta Kappa Epsilon”: “The cultivation of general literature and social culture, the advancement and encouragement of intellectual excellence, the promotion of honorable friendship and useful citizenship, the development of a spirit of tolerance and respect for the rights and views of others, the maintenance of gentlemanly dignity, self-respect, and morality in all circumstances, and the union of stout hearts and kindred interests to secure, to merit its due reward.”",
    },
    {
      question: "Does DKE have membership criteria?",
      answer:
        "Yes. Article V, Section II of the DKE Constitution states: The qualifications for membership of an eligible student shall be: Good standing in the work of the curriculum; Excellence in scholarship being a worthy recommendation; High moral character; General affability and consideration for the rights and views of others; Courteous deportment; A gentlemanly and self-respecting spirit; An active and energetic character; An appreciation of the objects and principles of DELTA KAPPA EPSILON, coupled with a capability and desire to be loyal thereto.",
    },
    {
      question:
        "Does DKE favor or discriminate against any physical or cultural characteristic when selecting new members?",
      answer:
        "Beyond the male undergraduate exhibiting the Criteria for Membership found above, no. Article V, Section II states 'No DKE chapter shall consider the race, creed, color, or national origin of an eligible student in pledging and initiating into membership in DELTA KAPPA EPSILON.'",
    },
    {
      question: "What is DKE’s stance on hazing in college fraternities?",
      answer:
        "In short, hazing is illegal and immoral; therefore it has no place in our Fraternity. More importantly, Delta Kappa Epsilon holds its members to the highest standard possible. Whereas hazing violates local, state, and federal law it also violates the Objects of Delta Kappa Epsilon, particularly 'the maintenance of gentlemanly dignity, self-respect, and morality in all circumstances.' Hazing is therefore strictly forbidden. Read our New Member leadership and educational materials.",
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
      </FAQContainer>
    </>
  );
};

// Exporting FAQ for use in other parts of the application
export default FAQ;

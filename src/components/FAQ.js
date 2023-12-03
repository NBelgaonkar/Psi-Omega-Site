// Importing React, useState and styled-components
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles, including font import
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

// FAQ Page main container styling without background image
const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  flex-grow: 1;
  min-height: 100vh;
  padding: 50px;
  margin-top: 60px;
`;

// FAQ Section styling
const FAQSection = styled.section`
  text-align: left;
  max-width: 600px;
  margin-bottom: 20px;
  color: black;
`;

// Styled components for the dropdown
const Question = styled.h3`
  margin: 10px 0;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #0056b3; // Change color on hover
  }
`;

const Answer = styled.p`
  font-size: 20px;
  margin: 0 0 10px 0;
  display: ${props => (props.isOpen ? 'block' : 'none')}; // Show or hide based on isOpen prop
`;

// Individual FAQ Item component
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Question onClick={toggle}>{question}</Question>
            <Answer isOpen={isOpen}>{answer}</Answer>
        </>
    );
};

// FAQ component
const FAQ = () => {
    return (
        <>
            <GlobalStyle />
            <FAQContainer>
                <h1>FAQs</h1>
                <FAQSection>
                    <h2>Delta Kappa Epsilon Fraternity</h2>
                    <FAQItem
                        question="What is a fraternity?"
                        answer="A fraternity is a group of individuals bound into life-long friendship by commonly held goals or values."
                    />
                    <FAQItem
                        question="How is the Delta Kappa Epsilon fraternity different?"
                        answer="Delta Kappa Epsilon is truly a life-long allegiance. The ties that bind us together stop not at graduation, at state or national boundaries, at political or philosophical lines, or even in war. That love which comes from the combination of stout hearts and kindred interests is truly special; it lasts while life lasts."
                    />
                    <FAQItem
                        question="How can the fraternity's bonds last even between warring parties?"
                        answer="Read the “Brothers in DKE” Civil War Poem which qualities best exemplify a Deke. An age-old DKE adage states that Dekes display in equal parts “the gentleman, the scholar, and the jolly good fellow.”"
                    />
                    <FAQItem
                        question="What are DKE's goals as a fraternity?"
                        answer="DKE’s stated goals are the “Objects of Delta Kappa Epsilon”: “The cultivation of general literature and social culture, the advancement and encouragement of intellectual excellence, the promotion of honorable friendship and useful citizenship, the development of a spirit of tolerance and respect for the rights and views of others, the maintenance of gentlemanly dignity, self-respect, and morality in all circumstances, and the union of stout hearts and kindred interests to secure, to merit its due reward.”"
                    />
                </FAQSection>
            </FAQContainer>
        </>
    );
};

// Exporting FAQ for use in other parts of the application
export default FAQ;

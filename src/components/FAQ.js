import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const FAQSection = styled.section`
  text-align: left;
  max-width: 600px;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  display: block;
  margin-bottom: 10px;
`;

const Question = styled.h3`
  margin: 10px 0;
`;

const Answer = styled.p`
  margin: 0 0 10px 0;
`;

const FAQ = () => {
    return (
        <PageContainer>
            <h1>FAQs</h1>

            {/* This section can be repeated for different categories of FAQs */}
            <FAQSection>
                <SectionTitle>Category Title Here</SectionTitle>
                {/* Repeat this block for each question in the category */}
                <Question>Question Placeholder</Question>
                <Answer>Answer Placeholder</Answer>
            </FAQSection>

            {/* Additional sections can be added here for other categories */}

        </PageContainer>
    );
};

export default FAQ;

// News.js
import React, { useState } from 'react';
import styled from 'styled-components';

const NewsWrapper = styled.div`
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

const SlideShowWrapper = styled.div`
  position: relative;
  max-width: 100%;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 10px;
`;

const Slide = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease-in-out;
`;

const Arrow = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2em;
  color: white;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ${(props) => (props.left ? 'left: 0;' : 'right: 0;')}
`;

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://source.unsplash.com/600x300/?fraternity-event',
      alt: 'Fraternity Event',
    },
    {
      image: 'https://source.unsplash.com/600x300/?fraternity-brothers',
      alt: 'Fraternity Brothers',
    },
    {
      image: 'https://source.unsplash.com/600x300/?fraternity-charity',
      alt: 'Fraternity Charity Event',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <NewsWrapper>
      <Heading>DKE News & Updates</Heading>
      <SlideShowWrapper>
        {slides.map((slide, index) => (
          <Slide key={index} active={index === currentSlide} image={slide.image} alt={slide.alt}>
            <img src={slide.image} alt={slide.alt} style={{ width: '100%', height: '300px', borderRadius: '10px' }} />
          </Slide>
        ))}
        <Arrow left onClick={prevSlide}>
          &#10094;
        </Arrow>
        <Arrow onClick={nextSlide}>
          &#10095;
        </Arrow>
      </SlideShowWrapper>
      <Paragraph>
        <strong>Summer 2024:</strong> DKE hosted its annual charity gala, raising over $1,000 for local non-profits.
      </Paragraph>
      <Paragraph>
        <strong>Spring 2024:</strong> We welcomed our new class of pledges. Congratulations to the new brothers!
      </Paragraph>
      <Paragraph>
        <strong>Fall 2023:</strong> DKE partnered with the campus community for a successful food drive, collecting over 1,000 pounds of food.
      </Paragraph>
    </NewsWrapper>
  );
};

export default News;

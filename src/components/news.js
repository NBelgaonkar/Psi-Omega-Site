import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Define global styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// Main container for the News page
const NewsContainer = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Heading for the page
const Heading = styled.h1`
  text-align: center;
  color: #231942;
  margin-bottom: 30px;
`;

// Wrapper for the slideshow
const SlideShowWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: 10px;
`;

// Slide content
const Slide = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  transition: opacity 1s ease-in-out;
`;

// Arrow styling
const Arrow = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3em;
  color: white;
  cursor: pointer;
  padding: 10px;
  user-select: none;
  ${(props) => (props.left ? 'left: 10px;' : 'right: 10px;')}

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 50%;
  }
`;

// Caption styling for slideshow
const Caption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 1.2em;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 15px;
  border-radius: 5px;
`;

// News Grid Layout
const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

// Single news card
const NewsCard = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

// News title in the card
const NewsTitle = styled.h3`
  color: #231942;
  margin-bottom: 10px;
`;

// Category filter buttons
const FilterButton = styled.button`
  background-color: ${(props) => (props.active ? '#231942' : '#ccc')};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #231942;
  }
`;

// Load more button
const LoadMoreButton = styled.button`
  display: block;
  background-color: #231942;
  color: white;
  border: none;
  padding: 15px 30px;
  margin: 30px auto;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;

const News = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  // Sample data for the slides
  const slides = [
    {
      image: 'https://source.unsplash.com/1000x400/?fraternity-event',
      alt: 'Fraternity Event',
      caption: 'Annual Psi Omega Charity Gala 2024',
    },
    {
      image: 'https://source.unsplash.com/1000x400/?fraternity-brothers',
      alt: 'Fraternity Brothers',
      caption: 'Welcome to the New Brothers of Spring 2024',
    },
    {
      image: 'https://source.unsplash.com/1000x400/?fraternity-charity',
      alt: 'Fraternity Charity Event',
      caption: 'Successful Community Service Food Drive',
    },
  ];

  const newsItems = [
    { title: 'Charity Gala Raises Over $10,000', category: 'Charity', content: 'Our annual charity gala was a huge success this year, raising funds for various local causes.' },
    { title: 'New Brothers Initiated', category: 'Announcements', content: 'We are proud to welcome our new brothers to the Psi Omega chapter this semester.' },
    { title: 'Spring Formal Event', category: 'Events', content: 'Our Spring Formal event was a memorable evening with members and alumni attending.' },
    { title: 'Community Service Day', category: 'Charity', content: 'Brothers gathered for a day of volunteering at the local food bank.' },
    { title: 'Homecoming 2024', category: 'Events', content: 'Join us for the upcoming Homecoming event where alumni and current members reconnect.' },
    { title: 'Scholarship Awards for Academic Excellence', category: 'Announcements', content: 'Several brothers were awarded scholarships for their outstanding academic performance.' },
  ];

  const categories = ['All', 'Charity', 'Events', 'Announcements'];

  // Slide navigation functions
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Filter and load more functions
  const filteredNews = filter === 'All' ? newsItems : newsItems.filter((item) => item.category === filter);
  const visibleNews = filteredNews.slice(0, visibleCount);

  return (
    <>
      <GlobalStyle />
      <NewsContainer>
        <Heading>DKE News & Updates</Heading>

        {/* Slideshow Section */}
        <SlideShowWrapper>
          {slides.map((slide, index) => (
            <Slide key={index} active={index === currentSlide} image={slide.image}>
              <Caption>{slide.caption}</Caption>
              <Arrow left onClick={prevSlide}>&#10094;</Arrow>
              <Arrow onClick={nextSlide}>&#10095;</Arrow>
            </Slide>
          ))}
        </SlideShowWrapper>

        {/* Filter Section */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        {/* News Grid */}
        <NewsGrid>
          {visibleNews.map((news, index) => (
            <NewsCard key={index}>
              <NewsTitle>{news.title}</NewsTitle>
              <p>{news.content}</p>
            </NewsCard>
          ))}
        </NewsGrid>

        {/* Load More Button */}
        {visibleCount < filteredNews.length && (
          <LoadMoreButton onClick={() => setVisibleCount((prev) => prev + 3)}>
            Load More
          </LoadMoreButton>
        )}
      </NewsContainer>
    </>
  );
};

export default News;

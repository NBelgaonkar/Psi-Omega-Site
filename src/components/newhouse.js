import React from 'react';
import styled from 'styled-components';
import newhouse from '../Images/newhouse.jpg';
import walk from '../Images/walktocampus.jpg';

const NewHouseContainer = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
  text-align: center;
`;

const HouseImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
`;

const YouTubeEmbed = styled.div`
  margin: 100px auto;
  width: 100%;
  max-width: 800px;
  height: 450px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ImageCaptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const SideImage = styled.img`
  max-width: 800px;
  height: auto;
  margin-right: 20px;
`;

const Caption = styled.p`
  font-size: 1rem;
  max-width: 300px;
  text-align: left;
`;

const NewHouse = () => {
  return (
    <NewHouseContainer>
      <h1>Our New House</h1>
      <HouseImage src={newhouse} alt="New House" />
      <Description>
        This is what our new house looks like it is located on 1599 Tibbits Ave. Our old house was located at 901
        Peoples Ave, so make sure for all events, we come to 1599 Tibbits Ave. We will host philanthropy 
        events and more here.
      </Description>

      <YouTubeEmbed>
        <iframe
          src="https://www.youtube.com/embed/o_tCSrsJurQ?si=0O2DIdtaiOj6cCNa" 
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </YouTubeEmbed>

      <ImageCaptionContainer>
        <SideImage src={walk} alt="Side Image" />
        <Caption>
          10 minute walk to campus. Only 0.4 miles away with minimal elevation change.   
        </Caption>
      </ImageCaptionContainer>
    </NewHouseContainer>
  );
};

export default NewHouse;

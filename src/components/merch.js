import React from 'react';
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: center;
`;

const MerchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  max-width: 1000px;
`;

const MerchItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MerchImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const MerchTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const MerchPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MerchButton = styled.button`
  padding: 10px 20px;
  background-color: #0047AB;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #003580;
  }
`;

const MerchStore = () => {
  const merchItems = [
    {
      title: "Psi Omega T-Shirt",
      price: "$20",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Psi Omega Hoodie",
      price: "$40",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Psi Omega Mug",
      price: "$10",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Psi Omega Cap",
      price: "$15",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Psi Omega Notebook",
      price: "$8",
      image: "https://via.placeholder.com/200",
    },
    {
      title: "Psi Omega Sticker Pack",
      price: "$5",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Merch Store</Title>
        <Paragraph>
          Show your Psi Omega pride with our exclusive merchandise! All proceeds go toward supporting
          chapter activities and initiatives. Browse our collection below and grab your favorites.
        </Paragraph>

        <MerchGrid>
          {merchItems.map((item, index) => (
            <MerchItem key={index}>
              <MerchImage src={item.image} alt={item.title} />
              <MerchTitle>{item.title}</MerchTitle>
              <MerchPrice>{item.price}</MerchPrice>
              <MerchButton>Add to Cart</MerchButton>
            </MerchItem>
          ))}
        </MerchGrid>
      </Container>
    </>
  );
};

export default MerchStore;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  color: black;
  min-height: 100vh;
  padding: 50px;
`;

const OrderForm = styled.div`
  max-width: 800px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ProductCarousel = styled(Carousel)`
  margin-bottom: 20px;

  .carousel .slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Label = styled.label`
  font-weight: bold;
  margin-top: 10px;
  display: block;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const merchandise = {
  images: [
    "https://via.placeholder.com/800x400?text=Product+Image+1",
    "https://via.placeholder.com/800x400?text=Product+Image+2",
    "https://via.placeholder.com/800x400?text=Product+Image+3"
  ],
  sizes: ["Small", "Medium", "Large", "X-Large"],
  colors: ["Red", "Blue", "Green", "Black"]
};

const MerchandiseOrderPage = () => {
  const [selectedSize, setSelectedSize] = useState(merchandise.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(merchandise.colors[0]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Order placed for size: ${selectedSize}, color: ${selectedColor}`);
  };

  return (
    <Container>
      <OrderForm>
        <h2>Order Your Merchandise</h2>
        <ProductCarousel showThumbs={false} infiniteLoop autoPlay>
          {merchandise.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Product ${index + 1}`} />
            </div>
          ))}
        </ProductCarousel>

        <form onSubmit={handleSubmit}>
          <Label htmlFor="size">Select Size:</Label>
          <Dropdown id="size" value={selectedSize} onChange={handleSizeChange}>
            {merchandise.sizes.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </Dropdown>

          <Label htmlFor="color">Select Color:</Label>
          <Dropdown id="color" value={selectedColor} onChange={handleColorChange}>
            {merchandise.colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </Dropdown>

          <SubmitButton type="submit">Place Order</SubmitButton>
        </form>
      </OrderForm>
    </Container>
  );
};

export default MerchandiseOrderPage;

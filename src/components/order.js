import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Add this line to use axios for the POST request

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #ff7043;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e64a19;
  }
`;

const PancakeOrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pancakeType, setPancakeType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      name,
      email,
      phone,
      pancakeType,
      quantity,
      specialInstructions,
    };

    try {
      const response = await axios.post(
        'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', // Replace this with your Web App URL
        orderData
      );

      if (response.data.result === 'success') {
        alert('Pancake order submitted successfully!');
        // Clear the form after submission
        setName('');
        setEmail('');
        setPhone('');
        setPancakeType('');
        setQuantity(1);
        setSpecialInstructions('');
      }
    } catch (error) {
      console.error('Error submitting the order:', error);
      alert('There was an error submitting your order. Please try again.');
    }
  };

  return (
    <FormWrapper>
      <h2>Order Pancakes</h2>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Label htmlFor="phone">Phone Number:</Label>
        <Input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <Label htmlFor="pancakeType">Select Pancake Type:</Label>
        <Select
          id="pancakeType"
          value={pancakeType}
          onChange={(e) => setPancakeType(e.target.value)}
          required
        >
          <option value="" disabled>Select a pancake type</option>
          <option value="classic">Classic</option>
          <option value="blueberry">Blueberry</option>
          <option value="chocolate_chip">Chocolate Chip</option>
          <option value="banana">Banana</option>
          <option value="gluten_free">Gluten-Free</option>
        </Select>

        <Label htmlFor="quantity">Quantity:</Label>
        <Input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          required
        />

        <Label htmlFor="specialInstructions">Special Instructions:</Label>
        <Textarea
          id="specialInstructions"
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
          placeholder="Enter any special instructions here..."
        />

        <Button type="submit">Submit Order</Button>
      </Form>
    </FormWrapper>
  );
};

export default PancakeOrderForm;

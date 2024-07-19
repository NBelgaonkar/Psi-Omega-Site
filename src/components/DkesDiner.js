// src/DkesDiner.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #231942;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-top: 20px;
`;

const DkesDiner = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !address || !order) {
      alert('Please fill in all fields.');
      return;
    }

    // Handle form submission
    console.log('Order submitted:', { name, email, address, order });
    
    setSuccessMessage('Your order has been submitted successfully!');
    
    // Clear the form fields
    setName('');
    setEmail('');
    setAddress('');
    setOrder('');
  };

  return (
    <FormWrapper>
      <h2>Order Cookies</h2>
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

        <Label htmlFor="address">Address:</Label>
        <Textarea
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <Label htmlFor="order">Order Details:</Label>
        <Textarea
          id="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          required
        />

        <Button type="submit">Submit Order</Button>
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
      </Form>
    </FormWrapper>
  );
};

export default DkesDiner;

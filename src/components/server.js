//server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, address, order } = req.body;
  const data = `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nOrder: ${order}\n\n`;

  fs.appendFile('orders.txt', data, (err) => {
    if (err) {
      console.error('Error writing to file', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
    res.status(200).json({ message: 'Order received' });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

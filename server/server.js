const express = require('express');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Set up PostgreSQL connection pool (no idea how right this is)
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Define the /api/admin-login endpoint
app.post('/api/admin-login', async (req, res) => {
  const { password } = req.body;

  try {
    // Query to retrieve the stored password hash from the database
    const result = await pool.query('SELECT password_hash FROM admin_credentials WHERE id = $1', [1]);
    // the parameterized data should prevent sql injections
    const storedHash = result.rows[0]?.password_hash;

    if (!storedHash) {
      return res.status(404).json({ error: 'Password not set' });
    }

    // Compare the provided password with the stored hash
    const isMatch = await bcrypt.compare(password, storedHash);

    if (isMatch) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Incorrect password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

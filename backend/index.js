const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(bodyParser.json());

// PostgreSQL connection configuration
const pool = new Pool({
  user: "root",
  host: "psql",
  database: "psi-omega",
  password: "root",
  port: 5432,
});

// API endpoint (admin-login) to validate admin login
app.post('/api/admin-login', async (req, res) => {
  const { password } = req.body;

  try {
    const result = await pool.query('SELECT password FROM admin_passwords LIMIT 1');
    if (result.rows.length === 0) {
      return res.status(400).json({ success: false, message: 'Password not set in database' });
    }

    const storedPassword = result.rows[0].password;
    
    if (password === storedPassword) {
      return res.json({ success: true, message: 'Login successful' });
    } else {
      return res.json({ success: false, message: 'bad pass' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

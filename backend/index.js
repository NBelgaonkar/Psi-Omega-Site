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

// API endpoint (get events)
app.get('/api/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// API endpoint (get events)
app.get('/api/rush', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM rush');
      res.json(result.rows);
  } catch (error) {
      console.error('Error fetching rush events:', error);
      res.status(500).json({ success: false, message: 'Failed to fetch rush events' });
  }
});


// API endpoint (add events)
app.post('/api/events', async (req, res) => {
  const { title, time, date, location, description } = req.body;
  const result = await pool.query(
      'INSERT INTO events (title, event_time, event_date, location, description) VALUES ($1, $2, $3, $4, $5)',
      [title, time, date, location, description]
  );
  res.json({ success: true });
});

// API endpoint (add rush events)
app.post('/api/rush', async (req, res) => {
  const { title, time, date, location, description } = req.body;
  try {
      await pool.query(
          'INSERT INTO rush (title, event_time, event_date, location, description) VALUES ($1, $2, $3, $4, $5)',
          [title, time, date, location, description]
      );
      res.json({ success: true });
  } catch (error) {
      console.error('Error adding rush event:', error);
      res.status(500).json({ success: false, message: 'Failed to add rush event' });
  }
});


// API endpoint (delete events)
app.delete('/api/events/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM events WHERE id = $1', [id]);
  res.json({ success: true });
});

// API endpoint (delete rush events)
app.delete('/api/rush/:id', async (req, res) => {
  const { id } = req.params;
  try {
      await pool.query('DELETE FROM rush WHERE id = $1', [id]);
      res.json({ success: true });
  } catch (error) {
      console.error('Error deleting rush event:', error);
      res.status(500).json({ success: false, message: 'Failed to delete rush event' });
  }
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

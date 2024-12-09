import React, { useState } from 'react';
import axios from 'axios';

function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // Handle login form submission
  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/admin-login', { password });
      if (response.data.success) {
        setIsAuthenticated(true);
        setError(''); // Clear any previous error
      } else {
        setError('Incorrect password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Server error. Please try again later.');
    }
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      {!isAuthenticated ? (
        <div>
          <h2>Admin Login</h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      ) : (
        <div>
          <h2>Admin Options</h2>
          <p>Welcome to the admin page! Here are your options:</p>
          {/* Add additional options or components here */}
        </div>
      )}
    </div>
  );
}

export default Admin;

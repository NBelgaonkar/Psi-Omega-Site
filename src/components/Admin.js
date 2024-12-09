import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    time: '',
    date: '',
    location: '',
    description: '',
  });

  // Fetch events from the database
  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Handle login form submission
  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/admin-login', { password });
      if (response.data.success) {
        setIsAuthenticated(true);
        setError('');
        fetchEvents(); // Fetch events after login
      } else {
        setError('Incorrect password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Server error. Please try again later.');
    }
  };

  // Handle adding a new event
  const handleAddEvent = async () => {
    try {
      const response = await axios.post('/api/events', newEvent);
      if (response.data.success) {
        fetchEvents(); // Refresh the events list
        setNewEvent({ title: '', time: '', date: '', location: '', description: '' }); // Reset input fields
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  // Handle deleting an event
  const handleDeleteEvent = async (id) => {
    try {
      const response = await axios.delete(`/api/events/${id}`);
      if (response.data.success) {
        fetchEvents(); // Refresh the events list
      }
    } catch (error) {
      console.error('Error deleting event:', error);
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

          <h3>Current Events</h3>
          <table border="1" style={{ margin: '0 auto', width: '80%' }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Time</th>
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.event_time}</td>
                  <td>{event.event_date}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>
                  <td>
                    <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Add New Event</h3>
          <div style={{ margin: '20px 0' }}>
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
              type="time"
              placeholder="Time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            />
            <input
              type="date"
              placeholder="Date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            />
            <button onClick={handleAddEvent}>Add Event</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;

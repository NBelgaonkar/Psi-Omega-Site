import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [events, setEvents] = useState([]);
  const [rushEvents, setRushEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    time: '',
    date: '',
    location: '',
    description: '',
    inviteOnly: false, // For the "Invite Only" feature
  });
  const [selectedTables, setSelectedTables] = useState([]);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Fetch all rush events
  const fetchRushEvents = async () => {
    try {
      const response = await axios.get('/api/rush');
      setRushEvents(response.data);
    } catch (error) {
      console.error('Error fetching rush events:', error);
    }
  };

  // Handle login
  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/admin-login', { password });
      if (response.data.success) {
        setIsAuthenticated(true);
        setError('');
        fetchEvents();
        fetchRushEvents();
      } else {
        setError('Incorrect password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Server error. Please try again later.');
    }
  };

  // Handle table selection
  const handleTableSelection = (e) => {
    const { value, checked } = e.target;
    setSelectedTables((prev) =>
      checked ? [...prev, value] : prev.filter((table) => table !== value)
    );
  };

  // Handle adding a new event
  const handleAddEvent = async () => {
    try {
      if (selectedTables.includes('events')) {
        await axios.post('/api/events', {
          ...newEvent,
          is_invite_only: newEvent.inviteOnly,
        });
      }
      if (selectedTables.includes('rush')) {
        await axios.post('/api/rush', {
          ...newEvent,
          is_invite_only: newEvent.inviteOnly,
        });
      }
      fetchEvents();
      fetchRushEvents();
      setNewEvent({
        title: '',
        time: '',
        date: '',
        location: '',
        description: '',
        inviteOnly: false,
      });
      setSelectedTables([]);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  // Handle deleting an event
  const handleDeleteEvent = async (id, table) => {
    try {
      await axios.delete(`/api/${table}/${id}`);
      table === 'events' ? fetchEvents() : fetchRushEvents();
    } catch (error) {
      console.error(`Error deleting event from ${table}:`, error);
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
          <h3>Add New Event</h3>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            />
            <input
              type="time"
              value={newEvent.time}
              onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            />
            <input
              type="date"
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
            <label>
              <input
                type="checkbox"
                checked={newEvent.inviteOnly}
                onChange={(e) => setNewEvent({ ...newEvent, inviteOnly: e.target.checked })}
              />
              Invite Only
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                value="events"
                onChange={handleTableSelection}
              />
              Add to Events
            </label>
            <label>
              <input
                type="checkbox"
                value="rush"
                onChange={handleTableSelection}
              />
              Add to Rush
            </label>
          </div>
          <button onClick={handleAddEvent}>Add Event</button>

          <h3>Rush Events</h3>
          <table border="1" style={{ margin: '0 auto', width: '80%' }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Time</th>
                <th>Date</th>
                <th>Location</th>
                <th>Description</th>
                <th>Invite Only</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rushEvents.map((event) => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.event_time}</td>
                  <td>{event.event_date}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>
                  <td>{event.is_invite_only ? 'Yes' : 'No'}</td>
                  <td>
                    <button onClick={() => handleDeleteEvent(event.id, 'rush')}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admin;

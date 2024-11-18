import React, { useState, useRef, useEffect } from 'react';
import { Box, IconButton, Typography, Paper, Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Welcome to Delta Kapp Epsilon at RPI',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemMessage = {
        role: 'system',
        content: `
        Refer to the following instructions to create your responses:

        [Context]
        You are a chat assistant for a the Delta Kappa Epsilon Fraternity website for the Psi Omega chatper of RPI .

        [Task or Request]
        Refer to the knowledge base to help users navigate the website and answer any questions they have as well as enhance their experience while using the website.

        [Output Format]
        Keep your responses short and concise, max of 3-4 sentences.`,
      };

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [systemMessage, ...messages, userMessage].map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.choices[0].message.content,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, there was an error. Please try again.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <IconButton
        onClick={handleToggleChat}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 48,
          height: 48,
          backgroundColor: '#d68c22',
          color: '#fff',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            backgroundColor: '#e69a3a',
          },
        }}
      >
        {isChatOpen ? <CloseIcon fontSize="small" /> : <ChatBubbleOutlineIcon fontSize="small" />}
      </IconButton>

      {isChatOpen && (
        <Paper
          elevation={4}
          sx={{
            position: 'fixed',
            bottom: 90,
            right: 40,
            width: 460,
            height: 600,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <Box sx={{ padding: 1, backgroundColor: '#d68c22', color: '#fff', textAlign: 'center' }}>
            <Typography variant="subtitle1" fontWeight="bold" fontFamily="'Segoe UI', sans-serif">
              Contact Us
            </Typography>
            <Typography variant="caption" fontFamily="'Segoe UI', sans-serif'>
              We'll respond as soon as we can.
            </Typography>
            <IconButton
              onClick={handleToggleChat}
              sx={{
                position: 'absolute',
                top: 4,
                right: 4,
                color: '#fff',
                padding: '9px',
              }}
            >
              <ExpandMoreIcon fontSize="medium" />
            </IconButton>
          </Box>

          <Box sx={{ flex: 1, padding: 1, overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                  alignItems: 'flex-start',
                  marginBottom: 1,
                  gap: 1,
                }}
              >
                {message.role === 'assistant' && (
                  <Avatar sx={{ bgcolor: '#9c27b0', color: '#fff', width: 32, height: 32 }}>
                    <PersonIcon fontSize="small" />
                  </Avatar>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: message.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <Box
                    sx={{
                      padding: '12px 16px',
                      borderRadius: 8,
                      backgroundColor: message.role === 'user' ? '#d68c22' : '#FAF9EC',
                      color: message.role === 'user' ? '#fff' : '#444',
                      wordBreak: 'break-word',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.85rem', fontFamily: "'Segoe UI', sans-serif" }}>
                      {message.content}
                    </Typography>
                  </Box>
                  <Typography variant="caption" sx={{ color: '#888', fontSize: '0.75rem' }}>
                    {message.timestamp}
                  </Typography>
                </Box>
              </Box>
            ))}
            <div ref={messagesEndRef} />
          </Box>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Enter your question or message here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ flex: 1, padding: '8px', fontFamily: "'Segoe UI', sans-serif" }}
            />
            <IconButton type="submit" disabled={isLoading}>
              <SendIcon fontSize="small" />
            </IconButton>
          </Box>
        </Paper>
      )}
    </>
  );
};

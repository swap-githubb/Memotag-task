// backend/server.js
require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

const app = express();

// Middleware
app.use(express.json()); 
app.use(cors());         

// MongoDB connection using Mongoose
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.error('MongoDB connection error:', error));

// API endpoint for contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

   
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});


app.get('/', (req, res) => {
  res.send('Backend API for MemoTag is running.');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

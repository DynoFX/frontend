require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');  // Import the connectDB function

// Initialize Express app
const app = express();

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON requests

// Basic route
app.get('/', (req, res) => {
  res.send('DynoFx Backend is running');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Test route is working!' });
});


// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

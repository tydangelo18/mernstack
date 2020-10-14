// Bring in Express
const express = require('express');
// Bring in MongoDB connection
const connectDB = require('./config/db');

// Initialize App variable with express
const app = express();

// Connect Database
connectDB();

// Test an endpoint to see if server and Express API is running
app.get('/', (req, res) => res.send('API Running!'));

// Take app variable and listen on Port 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
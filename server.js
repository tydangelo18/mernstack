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

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Take app variable and listen on Port 5000
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
// Bring in Express
const express = require('express');
// Bring in MongoDB connection
const connectDB = require('./config/db');
const path = require('path');

// Initialize App variable with express
const app = express();

// Connect Database
connectDB();

// Init Middleware Bodyparser
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Serve Static Assets in Production for UI
// Check for Production
if (process.env.NODE_ENV === 'production') {
  // Set Static Folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Take app variable and listen on Port 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));

const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the user routes
app.use('/users', usersRoutes);

// Middleware to handle errors
app.use(errorHandler);

app.listen(3000, () => console.log('Server running on port 3000'));

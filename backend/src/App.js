const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

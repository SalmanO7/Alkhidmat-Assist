const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const issueRoutes = require('./routes/issueRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/welfareDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Routes
app.use('/api/issues', issueRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  description: { type: String, required: true },
  image: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Issue', issueSchema);

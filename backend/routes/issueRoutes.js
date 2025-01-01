const express = require('express');
const multer = require('multer');
const Issue = require('../models/Issue');

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// POST API to submit an issue
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { description } = req.body;
    const image = req.file.path;

    const issue = new Issue({ description, image });
    await issue.save();

    res.status(201).json({ message: 'Issue submitted successfully', issue });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET API to fetch all issues
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find();
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

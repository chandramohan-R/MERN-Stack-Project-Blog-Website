// routes.js
const express = require('express');
const Post = require('../models/Post'); // Assuming your Post model is in a separate file

const router = express.Router();

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/posts', async (req, res) => {
  const { title, description, imageUrl, userEmail } = req.body;

  try {
    const newPost = new Post({ title, description, imageUrl, userEmail });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

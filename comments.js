// Create web server
// Import express
const express = require('express');
const router = express.Router();
const comments = require('../data/comments');

// Path: /comments
router.get('/', (req, res) => {
  res.json(comments);
});

// Path: /comments/:id
router.get('/:id', (req, res) => {
  const found = comments.some((comment) => comment.id === parseInt(req.params.id));
  if (found) {
    res.json(comments.filter((comment) => comment.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No comment with the id of ${req.params.id}` });
  }
});

module.exports = router;
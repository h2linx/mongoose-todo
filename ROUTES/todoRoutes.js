const express = require('express');
const router = express.Router();;;;

const todo = require('../MODELS/todo');

router.get('/test', (req, res) => {
  res.json({
    message: 'the todo routes api is working'
  });
});

module.exports = router;

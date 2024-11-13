const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/dashboard', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Welcome to the dashboard!' });
});

module.exports = router;

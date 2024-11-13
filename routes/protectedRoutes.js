const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const dashboardController = require('../controllers/dashboardController');

// Protected route that forwards to the dashboardController
router.get('/profile', authMiddleware, dashboardController.getProfile);

module.exports = router;

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const dashboardController = require('../controllers/dashboardController');
const authController = require('../controllers/authController');
const changePasswordRequest = require('../requests/changePasswordRequest');

// Protected route that forwards to the dashboardController
router.get('/profile', authMiddleware, dashboardController.getProfile);

router.post(
    '/change-password',
    authMiddleware,
    changePasswordRequest,
    authController.changePassword
  );
  

module.exports = router;

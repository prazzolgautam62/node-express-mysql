const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const dashboardController = require('../controllers/dashboardController');
const authController = require('../controllers/authController');

// Protected route that forwards to the dashboardController
router.get('/profile', authMiddleware, dashboardController.getProfile);

router.post(
    '/change-password',
    authMiddleware,
    [
      body('oldPassword').notEmpty().withMessage('Old password is required'),
      body('newPassword')
        .notEmpty()
        .withMessage('New password is required')
        .isLength({ min: 6 })
        .withMessage('New password must be at least 6 characters long'),
      body('confirmPassword')
        .custom((value, { req }) => value === req.body.newPassword)
        .withMessage('New password and confirmation do not match'),
    ],
    authController.changePassword
  );
  

module.exports = router;

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');
const dashboardController = require('../controllers/dashboardController');
const userController = require('../controllers/userController');
const changePasswordRequest = require('../requests/changePasswordRequest');
const updateProfileRequest = require('../requests/updateProfileRequest');

// Protected route that forwards to the dashboardController
router.get('/profile', authMiddleware, dashboardController.getProfile);

router.post(
  '/change-password',
  authMiddleware,
  changePasswordRequest,
  userController.changePassword
);

router.put(`/user/update/:id`,authMiddleware, updateProfileRequest, userController.updateProfile);


module.exports = router;

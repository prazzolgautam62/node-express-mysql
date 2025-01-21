const { body } = require('express-validator');

const updateProfileRequest = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),
  body('email')
    .notEmpty()
    .withMessage('Email is required'),
  body('username')
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 6 })
    .withMessage('Username must be at least 6 characters long'),
];

module.exports = updateProfileRequest;

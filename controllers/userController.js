const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { validationResult } = require('express-validator');
require('dotenv').config();

exports.changePassword = async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const { oldPassword, newPassword } = req.body;
  
      // Find the authenticated user
      const user = await User.findByPk(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Verify the old password
      const isOldPasswordValid = await bcrypt.compare(oldPassword, user.password);
      if (!isOldPasswordValid) {
        return res.status(400).json({ message: 'Old password is incorrect' });
      }
      // Hash the new password and update it
      // const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = newPassword;
      await user.save();
  
      res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };

  exports.updateProfile = async (req, res) => {
    console.log('req here',req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    try {
      const { name, username, email } = req.body;
  
      // Find the authenticated user
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update user details
      user.name = name || user.name;
      user.username = username || user.username;
      user.email = email || user.email;
      await user.save();
  
      res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred', error: error.message });
    }
  };
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models');
const { validationResult } = require('express-validator');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const newUser = await User.create({ name, username, email, password });
    res.status(201).json({status: true, message: 'Register Successful !', user: newUser});
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ status: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    res.status(200).json({ status: true, message: 'Login Sucessful !',data: {token: token,user: user} });
  } catch (error) {
    res.status(400).json({ status: false, message: error.message });
  }
};

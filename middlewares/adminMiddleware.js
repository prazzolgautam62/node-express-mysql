const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ status: false, message: 'Authentication token is required.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if(verified.usertype !== 'admin') return res.status(401).json({ status: false, message: 'Unauthorized action' });

    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

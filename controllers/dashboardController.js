// dashboardController.js

// Controller function to handle the /dashboard route
const getProfile = (req, res) => {
    // req.user contains the authenticated user's data from the authMiddleware
    res.status(200).json({
      status: true,
      message: 'User Profile Retriqved !',
      user: req.user, // Send authenticated user's info in the response
    });
  };
  
  module.exports = {
    getProfile,
  };
  
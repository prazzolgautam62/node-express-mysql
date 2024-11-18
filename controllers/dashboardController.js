const getProfile = (req, res) => {
    // req.user contains the authenticated user's data from the authMiddleware
    res.status(200).json({
      status: true,
      message: 'User Profile Retrieved !',
      user: req.user,
    });
  };
  
  module.exports = {
    getProfile,
  };
  
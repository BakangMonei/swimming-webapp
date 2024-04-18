const userModel = require('../models/userModel');

// Example controller functions
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export controller functions
module.exports = {
  getAllUsers
};

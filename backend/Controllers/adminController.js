// adminController.js
const Admin = require('../Models/adminModel'); // Adjust the path based on your project structure
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const adminController = {
  // Login as an admin and generate JWT token
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      if (admin.password != password) {
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Generate JWT token
      const token = jwt.sign({ adminId: admin._id, email: admin.email },process.env.SECRET, {
        expiresIn: '1h', // Token expires in 1 hour, adjust as needed
      });

      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = adminController;

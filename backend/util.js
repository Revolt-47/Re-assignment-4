// util.js
const jwt = require('jsonwebtoken');

const util = {
  // Middleware to verify JWT token
  verifyToken: (req, res, next) => {
    const token = req.body.token;
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
      }

      req.adminId = decoded.adminId;
      next();
    });
  },
};

module.exports = util;

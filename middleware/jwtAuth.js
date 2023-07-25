const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateJWTSecret = () => {
    return crypto.randomBytes(64).toString('hex');
  };
const jwtSecret = generateJWTSecret();

const jwtAuth = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = jwtAuth;
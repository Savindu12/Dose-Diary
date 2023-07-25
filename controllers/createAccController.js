'use strict';

const accdata = require('../data/users');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateJWTSecret = () => {
    return crypto.randomBytes(64).toString('hex');
  };
const jwtSecret = generateJWTSecret();

const getAllUsers = async (req, res, next) => {
    try {
        const accountlist = await accdata.getUsers();
        res.send(accountlist);
    }catch (error) {
        res.status(400).send(error.message);
    } 
}

// const userLogin = async (req, res, next) => {
//     try{
//         const Email = req.params.Email;
//         const Password = req.params.Password;
//         const oneLogin = await accdata.userLogin(Email, Password);
//         res.send(oneLogin);
//     }catch (error) {
//         res.status(400).send(error.message);
//     }
// }

const userLogin = async (req, res, next) => {
    try {
      const { Email, Password } = req.params;
      const oneLogin = await accdata.userLogin(Email, Password);
  
      // Assuming `accdata.userLogin` returns a user object or authentication status
      if (oneLogin) {
        // If the login is successful, generate a JWT token
        const token = jwt.sign({ email: Email }, jwtSecret, { expiresIn: '1h' });
        // Return the token as a response
        return res.json({ token });
      } else {
        // If login fails, return an appropriate error response
        return res.status(401).json({ message: 'Invalid email or password' });
      }
    } catch (error) {
      // Handle any errors that occur during the login process
      return res.status(400).send(error.message);
    }
};

const createAccount = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await accdata.createAccount(data);
        res.send(insert);
    }catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    createAccount,
    userLogin
}
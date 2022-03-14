const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const users = await Users.findAll();
    const emailNotAvailable = users.some((u) => u.email === email);
    if (emailNotAvailable) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const user = await Users.create({ displayName, email, password, image });
    if (!user) throw Error;
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(201).json({ token }); 
} catch (err) {
    res
      .status(500)
      .json({ message: err.message });
  }
};

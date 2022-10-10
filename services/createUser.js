const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (displayName, email, password, image) => {
  const users = await Users.findAll();

  const emailNotAvailable = users.some((u) => u.email === email);
  if (emailNotAvailable) {
    return null;
  }

  const user = await Users.create({ displayName, email, password, image });

  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  return jwt.sign({ data: user }, secret, jwtConfig);
};

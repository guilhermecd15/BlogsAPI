const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (email, password) => {
  const user = await Users.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return null;
  }

  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return token;
};

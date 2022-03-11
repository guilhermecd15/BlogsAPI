const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const users = await User.findAll();
    const emailNotAvailable = users.some((u) => u.email === email);
    if (emailNotAvailable) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const user = await User.create({ displayName, email, password, image });
    if (!user) throw Error;
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(201).json({ token }); 
} catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};

const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { User } = require('../models');

const secret = 'seusecretdetoken';

const validateBody = (body) =>
  Joi.object({
    password: Joi.string().min(6).max(6).required()
      .messages({
        'string.min': '"password" length must be 6 characters long',
        'string.max': '"password" length must be 6 characters long',
        'string.required': '"password" is required',
      }),
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
      'string.email': '"email" must be a valid email',
      'string.required': '"email" is required',
    }),
  }).validate(body);

module.exports = async (req, res) => {
  try {
    const { error } = validateBody(req.body);
    
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
    const token = jwt.sign({ data: user }, secret, jwtConfig);
    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

const Joi = require('joi');

const validateBody = (body) =>
  Joi.object({
    password: Joi.string().min(6).max(6).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateBody(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

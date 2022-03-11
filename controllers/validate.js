// controllers/login.js
const Joi = require('joi');

const validateBody = (body) =>
  Joi.object({
    displayName: Joi.string().min(8).messages({
        'string.min': '"displayName" length must be at least 8 characters long',
      }),
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
    image: Joi.string().required().messages({
      'string.required': '"image" is required',
    }),
  }).validate(body);

module.exports = async (req, res, next) => {
  /* Construímos um schema do Joi */
  const { error } = validateBody(req.body);
  if (error) {
    console.log(error.details[0].message);
    return res.status(400).json({ message: error.details[0].message });
  }

  /* Caso ocorra erro na validação do Joi, passamos esse */
  /* erro para o express, que chamará nosso middleware de erro */
  return next();
};

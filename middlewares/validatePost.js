const Joi = require('joi');

const validateBody = (body) =>
  Joi.object({
    title: Joi.string().required()
      .messages({
        'string.required': '"title" is required',
      }),
    content: Joi.string().required()
      .messages({
        'string.required': '"content" is required',
      }),
    categoryIds: Joi.array().required()
      .messages({
        'string.required': '"categoryIds" is required',
      }),
  }).validate(body);

// eslint-disable-next-line complexity
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

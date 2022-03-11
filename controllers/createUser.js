const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const users = await User.findAll();
    const emailNotAvailable = users.some((u) => u.email === email);

    if (emailNotAvailable) {
      return res.status(409).json({
        message: 'User already registered',
      });
    }

    const user = await User.create({ displayName, email, password, image });

    if (!user) throw Error;

    res.status(201).json({ message: 'Novo usuário criado com sucesso', user: displayName });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};

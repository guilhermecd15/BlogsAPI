const login = require('../services/login');

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await login(email, password);

    if (token === null) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};

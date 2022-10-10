const createUser = require('../services/createUser');

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const token = createUser(displayName, email, password, image);

    if (token === null) {
      return res.status(409).json({ message: 'User already registered' });
    }

    if (!token) throw Error;

    res.status(201).json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

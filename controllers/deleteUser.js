const jwt = require('jsonwebtoken');
const deleteUser = require('../services/deleteUser');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, secret);
    const { id } = decoded.data;

    await deleteUser(id);

    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

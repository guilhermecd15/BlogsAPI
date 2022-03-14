const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const secret = 'seusecretdetoken';

module.exports = async (req, res) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, secret);
    const { id } = decoded.data;
    
    await Users.destroy(
      { where: { id } },
    );

    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

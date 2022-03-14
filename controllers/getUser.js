const { Users } = require('../models');

module.exports = async (req, res) => {
  try {
    const users = await Users.findAll();

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

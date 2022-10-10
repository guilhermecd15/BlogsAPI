const getUser = require('../services/getUser');

module.exports = async (req, res) => {
  try {
    const users = await getUser();

    if (!users) throw Error;

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

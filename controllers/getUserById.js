const getUser = require('./getUser');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    
    const user = await getUser(id);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(user);
  } catch (err) {
    res
    .json({ message: err.message });
  }
};

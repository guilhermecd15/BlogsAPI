const { Users } = require('../models');

module.exports = async (id) => {
  await Users.destroy(
    { where: { id } },
  );
};

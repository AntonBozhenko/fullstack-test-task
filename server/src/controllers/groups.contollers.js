const Group = require('../models/Group');

exports.getGroups = async (req, res) => {
  const { offset } = req.params;

  try {
    const groups = await Group.findAll({ offset, limit: 10 });

    res.send(groups);
  } catch (error) {
    console.log(error);
  }
};

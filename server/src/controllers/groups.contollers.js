const Group = require('../models/Group');

async function getGroupsIdsAndNames(req, res) {
  try {
    const groups = await Group.findAll({ order: ['id'], attributes: ['id', 'name'] });

    res.send(groups);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function getGroups(req, res) {
  const { offset } = req.params;

  try {
    const groups = await Group.findAll({ order: ['id'], offset, limit: 10 });

    res.send(groups);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = { getGroupsIdsAndNames, getGroups };

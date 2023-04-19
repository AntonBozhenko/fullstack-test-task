const express = require('express');

const router = express.Router();

const { getGroupsIdsAndNames, getGroups } = require('../controllers/groups.contollers');

router.get('/', getGroupsIdsAndNames);

router.get('/:offset', getGroups);

module.exports = router;

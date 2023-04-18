const express = require('express');

const router = express.Router();

const { getGroups } = require('../controllers/groups.contollers');

router.get('/:offset', getGroups);

module.exports = router;

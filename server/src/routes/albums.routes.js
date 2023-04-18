const express = require('express');

const router = express.Router();

const { getAlbums } = require('../controllers/albums.contollers');

router.get('/', getAlbums);

module.exports = router;

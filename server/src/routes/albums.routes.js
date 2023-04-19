const express = require('express');

const router = express.Router();

const { getAlbums, postAlbum } = require('../controllers/albums.contollers');

router.get('/', getAlbums);

router.post('/', postAlbum);

module.exports = router;

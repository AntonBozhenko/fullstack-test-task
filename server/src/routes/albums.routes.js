const express = require('express');

const router = express.Router();

const { getAlbums, postAlbum, editAlbum } = require('../controllers/albums.contollers');

router.get('/', getAlbums);

router.post('/', postAlbum);

router.patch('/', editAlbum);

module.exports = router;

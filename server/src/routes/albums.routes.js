const express = require('express');

const router = express.Router();

const {
  getAlbums, postAlbum, editAlbum, deleteAlbum,
} = require('../controllers/albums.contollers');

router.get('/', getAlbums);

router.post('/', postAlbum);

router.patch('/', editAlbum);

router.delete('/', deleteAlbum);

module.exports = router;

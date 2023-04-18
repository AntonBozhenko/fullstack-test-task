const Group = require('../models/Group');
const Album = require('../models/Album');
const { createNormAlbums } = require('./lib/createNormAlbums');

exports.getAlbums = async (_, res) => {
  try {
    const albumsDB = await Album.findAll({ include: { model: Group }, raw: true });

    const albums = createNormAlbums(albumsDB);

    res.json(albums);
  } catch (error) {
    console.log(error);
  }
};

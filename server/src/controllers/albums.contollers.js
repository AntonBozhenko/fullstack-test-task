const { db } = require('../db');
const Group = require('../models/Group');
const Album = require('../models/Album');
const { createNormAlbums } = require('./lib/createNormAlbums');

async function getAlbums(_, res) {
  try {
    const albumsDB = await Album.findAll({ order: ['id'], include: { model: Group }, raw: true });

    const albums = createNormAlbums(albumsDB);

    res.json(albums);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function postAlbum(req, res) {
  const { title, year, groupid } = req.body;

  try {
    const [[{ id }]] = await db.query(`
    INSERT INTO albums (title, year, groupid) VALUES ('${title}', '${year}', '${groupid}') RETURNING id
    `);

    res.json({ id });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function editAlbum(req, res) {
  const {
    id, title, year, groupid,
  } = req.body;

  try {
    await db.query(`
    UPDATE albums SET title='${title}', year='${year}', groupid='${groupid}'  WHERE id=${id};
    `);

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

async function deleteAlbum(req, res) {
  const { id } = req.body;

  try {
    await Album.destroy({ where: { id } });

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = {
  getAlbums, postAlbum, editAlbum, deleteAlbum,
};

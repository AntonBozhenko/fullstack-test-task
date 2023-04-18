exports.createNormAlbums = (albumsDB) => albumsDB.map((el) => ({
  id: el.id, title: el.title, year: el.year, group: el['group.name'],
}));

require('dotenv').config();
const express = require('express');

const { dbCheck } = require('./db');

const groupsRoutes = require('./routes/groups.routes');
const albumsRoutes = require('./routes/albums.routes');

const PORT = process.env.PORT || 3001;

const app = express();

dbCheck();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/groups', groupsRoutes);
app.use('/albums', albumsRoutes);

app.listen(PORT, () => console.log(`сервер запущен на порту:${PORT}`));

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbCheck } = require('./db');

const groupsRoutes = require('./routes/groups.routes');
const albumsRoutes = require('./routes/albums.routes');

const PORT = process.env.PORT || 3001;

const app = express();

dbCheck();

app.use(cors({ origin: 'http://localhost:4000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/groups', groupsRoutes);
app.use('/api/albums', albumsRoutes);

app.listen(PORT, () => console.log(`сервер запущен на порту:${PORT}`));

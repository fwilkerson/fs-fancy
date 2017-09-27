import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

import config from './config';

const server = express();

server.use(bodyParser.json());
server.use(compression());
server.use(express.static('public'));
server.use(helmet());
server.use(morgan('dev'));

server.get('/api', async (req, res) => {
  const { version } = await require('../package.json');
  res.json({ version });
});

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

server.listen(process.env.PORT || config.port);

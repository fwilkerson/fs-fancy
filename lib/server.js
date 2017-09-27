import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import fs from 'fs';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

import api from './api';
import config from './config';
import render from './render/server';

const server = express();

server.use(bodyParser.json());
server.use(compression());
server.use(express.static('public'));
server.use(helmet());
server.use(morgan('dev'));

server.use('/api', api());

server.get('*', async (req, res) => res.send(await render()));

server.listen(process.env.PORT || config.port);

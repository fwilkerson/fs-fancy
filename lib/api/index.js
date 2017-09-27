import { Router } from 'express';

import { version } from '../../package.json';

export default config => {
  const api = Router();

  api.get('/', (req, res) => res.json({ version }));

  api.get('/*', (req, res) => {
    res.status(404).json({ message: 'resource not found' });
  });

  return api;
};

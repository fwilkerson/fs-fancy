import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../containers/App';
import config from '../config';
import { get } from '../fetcher';

export default async () => {
  const { version } = await get(`http://${config.hostname}:${config.port}/api`);
  return renderToString(<App initialData={{ version }} />);
};

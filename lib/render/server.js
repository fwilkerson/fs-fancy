import axios from 'axios';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../containers/App';
import config from '../config';

function createIndex(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title></title>
    </head>
    <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${preloadedState}
        </script>
        <script src="/bundle.js"></script>
    </body>
    </html>
  `;
}

export default async () => {
  const { data } = await axios.get(`http://${config.host}:${config.port}/api`);
  return createIndex(
    renderToString(<App store={data} />),
    JSON.stringify(data).replace(/</g, '\\u003c')
  );
};

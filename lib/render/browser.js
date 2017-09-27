import React from 'react';
import { hydrate } from 'react-dom';

import App from '../containers/App';

const store = window.__PRELOADED_STATE__;

hydrate(<App store={store} />, document.getElementById('root'));

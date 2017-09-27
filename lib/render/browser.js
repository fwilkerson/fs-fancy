import React from 'react';
import { hydrate } from 'react-dom';

import App from '../containers/App';

hydrate(<App />, document.getElementById('root'));

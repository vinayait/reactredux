import React from 'react';
import ReactDOM from 'react-dom';

import Constants from './constants.js';
import { allSkiDays, goal} from './initialState.json';

ReactDOM.render(
  <div>
    <h1>hello, {goal}</h1>
      <h2>{Object.keys(Constants).join('\n       ')}</h2>
  </div>
  , document.getElementById('root'));

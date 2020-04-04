import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ekran from './Ekran';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Ekran />, document.getElementById('root'));


serviceWorker.unregister();
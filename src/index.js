/* 入口文件 */
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom'

import App from './App';
import 'lib-flexible'
import * as serviceWorker from './serviceWorker';

ReactDOM.render((<HashRouter><App/></HashRouter>), document.getElementById('root'));


serviceWorker.unregister();

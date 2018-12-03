import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Home';

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path = '/' component = { App } />
            <Route exact path = '/home' component = { Home } />
            <Route exact path = '/login' component = { App } />
        </div>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

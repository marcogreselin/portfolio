import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
import {
  Route, Switch, BrowserRouter as Router
} from 'react-router-dom'
import {App} from './components/App'


ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
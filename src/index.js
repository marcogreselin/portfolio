import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import App from './components/App'

ReactDOM.render(
    <Router>
		<Route path="/" component={App} />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
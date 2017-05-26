import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'
import {
  Route, Switch, BrowserRouter as Router
} from 'react-router-dom'
import {App} from './components/App'
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga'


ReactGA.initialize('UA-29038123-1')

const history = createHistory()
history.listen((location, action) => {
    ReactGA.set({ page: location.pathname })
    ReactGA.pageview(location.pathname)
})

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
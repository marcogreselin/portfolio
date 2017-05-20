import React from 'react'
import App from './components/App'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const routes = (
    <Router>
    	<div>
    		<Switch>
		        <Route path="/" component={App} />
		        <Route path="*" component={App} />
    		</Switch>
    	</div>
    </Router>
)

export default routes
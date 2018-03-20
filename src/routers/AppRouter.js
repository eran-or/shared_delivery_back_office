import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'
import Orders from '../components/Orders'

const AppRouter = (props) => (
    <Router basename="/">
        <div>
          <Navbar />
            <Switch>
                <Route path="/" component={Dashboard} exact={true} />
                <Route path="/Orders" component={Orders} exact={true} />
            </Switch>
        </div>
    </Router >
);

export default AppRouter
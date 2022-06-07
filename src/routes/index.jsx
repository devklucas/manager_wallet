import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
    )
}
export default Routes
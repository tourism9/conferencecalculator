import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//import Account from "./Pages/Account";
import Rooms from "./Pages/Rooms";
import Calculator from "./Pages/Calculator";
import Map from "./Pages/Map";
import Account from "./Pages/Account";
import history from './history';

export default class Routes extends Component {
    render() {
    
        return (
            <Router history={history}>
                { //switch will render only the first route that match the location 
                 }
                <Switch>
                    {
                        //link components to the url. 
                    }
                    <Route path="/" exact component={Map} />
                    <Route path="/Rooms" component={Rooms} />
                    <Route path="/Calculator" component={Calculator} />
                    <Route path="/account" component={Account} />
                </Switch>
            </Router>
        )
    }
}

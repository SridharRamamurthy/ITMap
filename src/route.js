
import React, { PureComponent } from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import LandingPage from "./landingPage";

import LoginTabs from './loginTabs'


class RoutesList extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/home" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RoutesList
import AllComponents, { menus } from "./routerConfig"
import loadable from './../utils/index'
import { Route, Switch, HashRouter } from "react-router-dom"
import React, { Component } from 'react';
const User = loadable(() => import('./../views/user/User'));
class CRouter extends Component {
    initRoute(r) {
        const Component = r.component && AllComponents[r.component];
        return (
            <Route
                key={r.route || r.key}
                exact
                path={r.route || r.key}
                component={Component}
            />


        )
    }
    render() {
        return (
            <Switch>
                {menus.map(r => {
                    return this.initRoute(r);
                })}
                
            </Switch>

        );
    }
}

export default CRouter;
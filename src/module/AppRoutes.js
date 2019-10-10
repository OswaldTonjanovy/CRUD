import React from "react";
import { Switch, Route } from "react-router-dom";
import App from '../App';
import FormLogin from './FormLogin';
import  Home from "./Home";

class AppRoutes extends React.Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path="/" component={FormLogin} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </App>)
    }
}

export default AppRoutes;
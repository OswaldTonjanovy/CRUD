import React from "react";
// BrowserRouter debe ser padre de Switch y Switch debe ser padre de Route!!
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App';
import FormLogin from './FormLogin';
import Home from "./Home";

class AppRoutes extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={FormLogin} />
                        {/* Switch detecta cambios el la url del navegador y muestra el componente dependiendo de la ruta */}
                        <Route exact path="/home" component={Home} />
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

export default AppRoutes;
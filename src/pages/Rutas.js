import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import  Home  from "./Home";
import  Registro  from "./Registro";

export default class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} exact />
                    <Route path='/home' component={Home} exact />
                    <Route path='/registro' component={Registro} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}

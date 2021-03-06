import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App';
import  Home  from "./Home";
import  Registro  from "./Registro";
import  notFound  from "./404";
import  setProyecto from './SetProyecto';
export default class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} exact />
                    <Route path='/home' component={Home} exact />
                    <Route path='/registro' component={Registro} exact />
                    <Route path='/setproyecto' component={setProyecto}/>
                    <Route component={notFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

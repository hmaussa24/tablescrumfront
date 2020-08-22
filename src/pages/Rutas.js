import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'

export default class Rutas extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} exact />
                </Switch>
            </BrowserRouter>
        )
    }
}

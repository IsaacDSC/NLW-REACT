import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './views/home'
import Login from './views/Login'

export default function Rotes() {

    return (
         < BrowserRouter >
            <Switch >
                <Route path = '/'exact component = { Home }/>
                <Route path = '/login'exact component = { Login }/>
            </Switch >
        </BrowserRouter>
    )

}
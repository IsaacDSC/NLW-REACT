import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/map/map'

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
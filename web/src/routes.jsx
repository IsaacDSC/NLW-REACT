import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Map from './pages/map/map'
import Orfanato from  './pages/orfanatos/orfanatos'

export default function Rotes() {
    return (
         < BrowserRouter >
            <Switch >
                <Route path = '/'exact component = { Home }/>
                <Route path = '/login'exact component = { Map }/>
                <Route path= '/orfanato'exact component = { Orfanato }/>
            </Switch >
        </BrowserRouter>
    )

}
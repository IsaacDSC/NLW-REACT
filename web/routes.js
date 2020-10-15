import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './src/views'
import Login from './src/views'

export default function Rotes() {

    return ( <
        BrowserRouter >
        <
        Switch >
        <
        Route path = '/'
        exact component = { Home }
        /> <
        Route path = '/login'
        exact component = { Login }
        /> <
        /Switch> <
        /BrowserRouter>


    )



}
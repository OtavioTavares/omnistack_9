import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import New from "./pages/New"


export default function Routes(){
    // BrowserRouter deixa que mais de uma roda seja chamada ao mesmo tempo
    // Switch é para que cada rota seja executada por vez 

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component ={Dashboard} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    )
}
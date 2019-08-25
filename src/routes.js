import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import Home from './pages/LoginCliente/index';
import Dashboard from './pages/Dashboard';
import Relatorios from './pages/Relatorios';
import Profile from './pages/Profile';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/reports" component={Relatorios} />
            <Route path="/profile" component={Profile} />
        </Switch>
    );
}

export default Routes;
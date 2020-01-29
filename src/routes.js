import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/login/index';
import Cadastro from './pages/cadastro/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/cadastro' component={Cadastro}/>
        </Switch>
    </BrowserRouter>
);


export default Routes;
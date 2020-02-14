import React from 'react';
//importaciones
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//componentes
import Layout from './Layout';
//paginas
import BadgeNew from '../pages/Bagde_new';
import Badges from '../pages/Badges';
import Home from '../pages/BadgeHome';
import NotFound from '../pages/NotFound';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
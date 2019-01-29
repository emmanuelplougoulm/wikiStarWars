import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Redux from './Redux';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/redux' component={Redux} />
        </Switch>
    </BrowserRouter>
);

export default App;
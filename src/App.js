import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './App.scss';

import Navbar from './components/navbar/Navbar';
import MainPage from './pages/mainpage/MainPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact
                    path='/'
                    render={props => <MainPage />}
                />
                <Route
                    path='/home'
                    render={props => <MainPage />}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

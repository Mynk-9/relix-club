import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './App.scss';

import LoadingScreen from './components/loadingscreen/LoadingScreen';
import Navbar from './components/navbar/Navbar';
import MainPage from './pages/mainpage/MainPage';
import KnowMore from './pages/knowmore/KnowMore';

function App() {
    return (
        <BrowserRouter>
            <LoadingScreen />
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
                <Route
                    path='/knowmore'
                    render={props => <KnowMore />}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

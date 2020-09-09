import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const DashboardPage = React.lazy(() => import('./pages/dashboard/index'));
const RegisterPage = React.lazy(() => import('./pages/register/index'));

const AppDiv = styled.div`
    position: fixed;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-image: url('https://media2.giphy.com/media/Zcizf1vOY6nXrPtLyD/giphy.gif?cid=ecf05e47z4pfnfvfgggku4cy2xp3rah6xzhz3zsolz5tlhn1&rid=giphy.gif');
`;
class App extends React.Component {
    render(): React.ReactNode {
        return (
            <AppDiv>
                <Router>
                    <React.Suspense fallback={'loading...'}>
                        <Switch>
                            <Route exact path="/" render={() => (
                                <Redirect to="/dashboard" />
                            )} />
                            <Route path='/dashboard' component={DashboardPage} />
                            <Route path='/register' component={RegisterPage} />
                        </Switch>
                    </React.Suspense>
                </Router>
            </AppDiv>
        );
    }
}

export default (App);

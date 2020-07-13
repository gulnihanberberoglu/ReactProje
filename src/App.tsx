import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

const DashboardPage = React.lazy(() => import('./pages/dashboard/index'));

class App extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <Router>
                    <React.Suspense fallback={'loading...'}>
                        <Switch>
                            <Route exact path="/" render={() => (
                                <Redirect to="/dashboard"/>
                            )}/>
                            <Route path='/dashboard' component={DashboardPage} />
                        </Switch>
                    </React.Suspense>
                </Router>
            </>
        );
    }
}

export default App;

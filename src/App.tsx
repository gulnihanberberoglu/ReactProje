import React from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import { LoadingState } from './types/loading';
import { openLoadingAction, closeLoadingAction } from './shared/store/actions/loading.actions';

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

const mapState = (state: LoadingState) => ({
  isLoading: state.isOpen
})

const mapDispatch = {
  openLoadingAction,
  closeLoadingAction
}

export default connect(mapState, mapDispatch)(App);

import React from 'react';
import {connect, ConnectedComponent, MapStateToProps} from "react-redux";
import { compose, Dispatch, bindActionCreators } from 'redux';
import {isOpenSelector} from "../../shared/store/selectors/loading.selectors";
import { createStructuredSelector } from 'reselect';
import {IAppState} from "../../shared/store";
import {closeLoadingAction, openLoadingAction} from '../../shared/store/actions/loading.actions';

interface IStateToProps {
    isOpen: boolean,
}

interface IDispatchToProps {
    openLoading: any,
    closeLoading: any,
}

const DashboardComponent: React.FC<IStateToProps & IDispatchToProps> = ({isOpen, openLoading, closeLoading}: IStateToProps & IDispatchToProps): JSX.Element => {
    return (
        <div className="App">
            <p>{"LoadingStatus: " + isOpen}</p>
            <button onClick={openLoading} >Open Loading</button>
            <button onClick={closeLoading}>Close Loading</button>
        </div>
    );
};


const mapStateToProps: MapStateToProps<IStateToProps, IStateToProps, IAppState> = (): any => {
    return createStructuredSelector({
        isOpen: isOpenSelector,
    })
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps => {
    return bindActionCreators({
        openLoading: openLoadingAction,
        closeLoading: closeLoadingAction,
    }, dispatch);
}

const DashboardPage: ConnectedComponent<React.FC<IStateToProps & IDispatchToProps>, any> = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(DashboardComponent);

export default DashboardPage;

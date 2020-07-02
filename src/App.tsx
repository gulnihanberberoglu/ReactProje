import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { LoadingState } from './types/loading';
import { openLoading, closeLoading } from './actions/loading';

function App(props: any) {
  return (
    <div className="App">
      <p>{"LoadingStatus: " + props.isLoading}</p>
      <button onClick={props.openLoading} >Open Loading</button>
      <button onClick={props.closeLoading}>Close Loading</button>
    </div>
  );
}

const mapState = (state: LoadingState) => ({
  isLoading: state.isOpen
})

const mapDispatch = {
  openLoading,
  closeLoading
}

export default connect(mapState, mapDispatch)(App);

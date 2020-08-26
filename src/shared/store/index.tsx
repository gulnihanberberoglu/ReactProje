import { combineReducers, createStore, applyMiddleware } from "redux";
import { loadingReducer } from "./reducers/loading.reducer";
import { weatherReducer } from "./reducers/weather.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";

//Bütün state verilerinin tutulduğu  yer

const reducers = combineReducers({
    loading: loadingReducer,
    weather: weatherReducer
})

export type IAppState = ReturnType<typeof reducers>

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware: any[] = [sagaMiddleware];

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);


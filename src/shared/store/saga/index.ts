import { all } from 'redux-saga/effects';
import { call, put, takeLatest } from 'redux-saga/effects'
import { FetchWeatherRequestedInterface, City } from '../types/weather.types';
import * as Api from "../services/weather.api";
import {WEATHER_FETCH_REQUESTED} from "../constants/weather.constants";
import {openLoadingAction, closeLoadingAction} from "../actions/loading.actions";
import {fetchWeatherFailAction, fetchWeatherSuccessAction} from "../actions/weather.actions";

function* fetchWeather(action: FetchWeatherRequestedInterface) {
    yield put(openLoadingAction());
    try {
        const result: City = yield call(Api.fetchWeather, action.payload);
        yield put(fetchWeatherSuccessAction(result));
    } catch (e) {
        yield put(fetchWeatherFailAction(e));
    } finally {
        yield put(closeLoadingAction());
    }
}

export default function* rootSaga() {
    yield takeLatest(WEATHER_FETCH_REQUESTED, fetchWeather);
    yield all([]);
}

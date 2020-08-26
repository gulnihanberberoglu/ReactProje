import { all } from 'redux-saga/effects';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { FetchWeatherRequestedInterface, City, WeatherActionTypes } from '../types/weather.types';
import { LoadingActionTypes } from '../types/loading.types';
import * as Api from "../services/weather.api";

function* fetchWeather(action: FetchWeatherRequestedInterface) {
    let weather: WeatherActionTypes;
    let loading: LoadingActionTypes = {
        type: "OPEN_LOADING"
    };
    yield put(loading);

    try {
        const result: City = yield call(Api.fetchWeather, action.payload);
        weather = {
            type: "WEATHER_FETCH_SUCCEEDED",
            payload: result
        }
        yield put(weather);
    } catch (e) {
        weather = {
            type: "WEATHER_FETCH_FAILED",
            payload: e
        }
        yield put(weather);
    } finally {
        loading = {
            type: "CLOSE_LOADING"
        }
        yield put(loading);
    }
}

export default function* rootSaga() {
    yield takeLatest("WEATHER_FETCH_REQUESTED", fetchWeather);
    yield all([]);
    // code after all-effect
}

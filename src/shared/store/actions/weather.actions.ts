import {City, WeatherActionTypes, WeatherRequest} from '../types/weather.types';
import {WEATHER_FETCH_FAILED, WEATHER_FETCH_REQUESTED, WEATHER_FETCH_SUCCEEDED} from "../constants/weather.constants";
//store'a iletilen weather değişken bilgileri

export const fetchWeatherRequestedAction = (payload: WeatherRequest): WeatherActionTypes => ({
    type: WEATHER_FETCH_REQUESTED,
    payload
});

export const fetchWeatherSuccessAction = (payload: City): WeatherActionTypes => ({
    type: WEATHER_FETCH_SUCCEEDED,
    payload
});

export const fetchWeatherFailAction = (error: Error): WeatherActionTypes => ({
    type: WEATHER_FETCH_FAILED,
    payload: error
})

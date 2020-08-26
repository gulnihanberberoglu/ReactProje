import { WeatherActionTypes } from '../types/weather.types';
import { WEATHER_FETCH_REQUESTED, WEATHER_FETCH_SUCCEEDED, WEATHER_FETCH_FAILED } from "../constants/weather.constants";

//store'a iletilen weather değişken bilgileri

export function fetchWeatherRequestedAction(lat: number, lng: number): WeatherActionTypes {
    return {
        type: WEATHER_FETCH_REQUESTED,
        payload: {
            lat,
            lng
        }
    }
}
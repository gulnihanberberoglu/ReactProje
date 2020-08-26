import { WEATHER_FETCH_REQUESTED, WEATHER_FETCH_SUCCEEDED, WEATHER_FETCH_FAILED } from "../constants/weather.constants";


export type City = {
    name: string,
    country: string,
    population: number,
    list: Weather[]
}

export type Weather = {
    date: string,
    maxTemp: string,
    minTemp: string,
    humidity: string,
    description: string,
}

export type WeatherRequest = {
    lat: number,
    lng: number,
}

export interface FetchWeatherRequestedInterface {
    type: typeof WEATHER_FETCH_REQUESTED,
    payload: WeatherRequest
}

export interface FetchWeatherSucceededInterface {
    type: typeof WEATHER_FETCH_SUCCEEDED,
    payload: City
}

export interface FetchWeatherFailedInterface {
    type: typeof WEATHER_FETCH_FAILED,
    payload: Error
}

export type WeatherActionTypes = FetchWeatherRequestedInterface | FetchWeatherSucceededInterface | FetchWeatherFailedInterface

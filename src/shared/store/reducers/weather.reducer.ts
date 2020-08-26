import { WeatherActionTypes, City } from "../types/weather.types";
import { WEATHER_FETCH_REQUESTED, WEATHER_FETCH_SUCCEEDED, WEATHER_FETCH_FAILED } from "../constants/weather.constants";

//store'a gelen weather action sonucunda uygulamanın nasıl değişeceği belirlendi

export type WeatherState = {
    city: City | undefined
}

const initialState: WeatherState = {
    city: undefined
}

export function weatherReducer(state: WeatherState = initialState, action: WeatherActionTypes): WeatherState {
    switch (action.type) {
        case WEATHER_FETCH_REQUESTED:
            return {
                ...state,
            }
        case WEATHER_FETCH_SUCCEEDED:
            return {
                ...state,
                city: action.payload
            }
        case WEATHER_FETCH_FAILED:
            return {
                ...state,
            }
        default:
            return state;
    }
}

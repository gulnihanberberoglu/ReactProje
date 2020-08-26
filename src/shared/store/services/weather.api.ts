import axios from "axios";
import { WeatherRequest, City } from "../types/weather.types";

export async function fetchWeather(request: WeatherRequest): Promise<City> {
    const appId = '9392b2a20ea50379a4377c375d64cc84'
    const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&'
    const url = `${apiURL}lat=${request.lat}&lon=${request.lng}&mode=json&appid=${appId}`;
    const { data: { city, list } } = await axios.get(url);

    return {
        ...city,
        list
    };
};
import React from 'react';
import {WeatherCardContainer, WeatherDateField, WeatherIconField, WeatherIconSpanField} from "./styled";

export type Weather = {
    date: string,
    maxTemp: string,
    minTemp: string,
    humidity: string,
    description: string,
}

export type WeatherCardProps = {
    weather: Weather
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }: WeatherCardProps): JSX.Element => {

    const getWeatherIcon: any = (): JSX.Element => {
        const timeHour = parseInt(weather.date.split(' ')[1].split(':')[0]);
        let icon = ''
        if (weather.description.includes('clear sky') && (timeHour >= 6 && timeHour <= 18)) {
            icon = `url('../images/day.png') center no-repeat`;
        } else if (weather.description.includes('clouds') && (timeHour >= 6 && timeHour <= 18)) {
            icon = `url('../images/cloudyday.png') center no-repeat`;
        } else if (weather.description.includes('clear sky') && ((timeHour >= 0 && timeHour <= 6) || (timeHour >= 21))) {
            icon = `url('../images/moon.png') center no-repeat`;
        } else if (weather.description.includes('clouds') && ((timeHour >= 0 && timeHour <= 6) || (timeHour >= 21))) {
            icon = `url('../images/cloudymoon.png') center no-repeat`;
        } else if (weather.description.includes('rain')) {
            icon = `url('../images/rain.png') center no-repeat`;
        }

        return <WeatherIconSpanField style={{ background: icon }} />;
    }

    return (
        <WeatherCardContainer>
            <WeatherDateField>{weather.date}</WeatherDateField>
            <WeatherIconField>{getWeatherIcon()}</WeatherIconField>
            <div className="temprature"><span className="max-temprature">{weather.maxTemp}<sup>o</sup> / </span><span className="min-temprature">{weather.minTemp}<sup>o</sup></span></div>
            <div className="humidity">Nem : {weather.humidity}</div>
            <div className="description">Hava Durumu : {weather.description}</div>
        </WeatherCardContainer>
    )
}

export default WeatherCard;

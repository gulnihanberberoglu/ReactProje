import React from 'react';
import styled from 'styled-components';
import { SubHeader } from '../../components/header';
import Grid from '@material-ui/core/Grid';
import WeatherCard, { Weather } from './card';

const Container = styled.fieldset`
    border-radius: 3px;
    height: 340px;
    overflow-y: scroll;
`;

const ContainerTitle = styled.legend`
    color: darkcyan;
    font-weight: bold;
`;
export type City = {
    name: string,
    country: string,
    population: number,
    list: any[]
}


export type WeatherProps = {
    city?: City
}
const WeatherShowcase: React.FC<WeatherProps> = ({ city, ...props }): JSX.Element => {


    if (!city) {
        return (
            <>
                <SubHeader>Hava durumu kayıdı bulunamadı</SubHeader>
            </>
        )
    }

    return (
        <Container>
            <ContainerTitle>Son 5 günlük hava durumu raporu</ContainerTitle>
            <Grid container>
                <Grid item xs={12}>
                    <SubHeader>{city.name}/{city.country}</SubHeader>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        {
                            city.list.map((c: any) => <WeatherCard weather={{
                                date: c.dt_txt,
                                maxTemp: c.main.temp_max,
                                minTemp: c.main.temp_min,
                                humidity: c.main.humidity,
                                description: c.weather[0].description
                            }
                            } />)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WeatherShowcase;
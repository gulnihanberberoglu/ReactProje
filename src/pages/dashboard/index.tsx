import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { Header } from '../../components/header';
import LocationTextField, { LocationResult } from '../../components/locationTextField';
import Weather, { City } from '../../components/weather';
import FormButton from '../../components/formButton';
import styled from 'styled-components';
import axios from 'axios';
import { Dispatch } from 'redux';
import { fetchWeatherRequestedAction } from '../../shared/store/actions/weather.actions';
import { isOpenSelector } from '../../shared/store/selectors/loading.selectors';
import Loading from '../../components/loading';
import { citySelector } from '../../shared/store/selectors/weather.selectors';
import { RouteComponentProps } from 'react-router-dom';
const GridApp = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    text-align: end;
    padding: 30px;
`;

type DashboardPageProp = RouteComponentProps & {
    isLoading: boolean,
    city: City,
    fetchWeather: (lat: number, lng: number) => void
}

const DashboardPage: React.FC<DashboardPageProp> = ({ isLoading, city, fetchWeather, ...props }): JSX.Element => {

    function handleLocaitonTextFieldChange(locationResult?: LocationResult) {
        if (locationResult) {
            fetchWeather(locationResult.lat, locationResult.lng);
        }

    }
    return (

        <Grid container>
            <FormButton onClick={() => { props.history.push("/register") }}>Kayıt Ol</FormButton>
            <GridApp>
                <Grid item xs={12}>
                    <Header>
                        Hava Durumu Raporu
                    </Header>
                </Grid>
                <Grid item xs={12}>
                    <LocationTextField onChange={handleLocaitonTextFieldChange} />
                </Grid>
            </GridApp>
            <Grid item xs={12}>
                {
                    isLoading ? <Loading /> : <Weather city={city} />
                }
            </Grid>


        </Grid>
    );
};

const mapStateToProps = (state: any) => {
    return {
        isLoading: isOpenSelector(state),
        city: citySelector(state)
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchWeather: (lat: number, lng: number) => {
            dispatch(fetchWeatherRequestedAction(lat, lng))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
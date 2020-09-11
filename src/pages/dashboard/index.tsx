import React from 'react';
import Grid from '@material-ui/core/Grid';
import {useDispatch, useSelector} from "react-redux";
import { Header } from '../../components/header';
import LocationTextField from '../../components/locationTextField';
import Weather, { City } from '../../components/weather';
import FormButton from '../../components/formButton';
import { Dispatch } from 'redux';
import { fetchWeatherRequestedAction } from '../../shared/store/actions/weather.actions';
import { isOpenSelector } from '../../shared/store/selectors/loading.selectors';
import Loading from '../../components/loading';
import { citySelector } from '../../shared/store/selectors/weather.selectors';
import { RouteComponentProps } from 'react-router-dom';
import { GridApp } from './styled';
import { WeatherRequest } from '../../shared/store/types/weather.types';

type DashboardPageProp = RouteComponentProps

const DashboardPage: React.FC<DashboardPageProp> = ({ ...props }: DashboardPageProp): JSX.Element => {
    /**
     * Redux Dispatch
     * */
    const dispatch: Dispatch = useDispatch();

    /**
     * Selector for isOpen from loading state
     *
     * @type {boolean}
     * */
    const isLoading: boolean = useSelector(isOpenSelector);

    /**
     * Selector for city from weather state
     *
     * @type {City}
     * */
    const city: City = useSelector(citySelector);

    /**
     * Function for location change
     *
     * @param {LocationResult} locationResult
     * @type {Function}
     * @return {void}
     * */
    const locationChange: any = (locationResult?: WeatherRequest): void => {
        if (locationResult) {
            dispatch(fetchWeatherRequestedAction(locationResult));
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
                    <LocationTextField onChange={locationChange} />
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

export default DashboardPage;

import {WeatherState} from "../reducers/weather.reducer";
import {IAppState} from "../index";
import {createSelector} from "reselect";

export const weatherGlobalState: (state: IAppState) => WeatherState = (state: IAppState): WeatherState => state.weather;

export const citySelector: any = createSelector(
    weatherGlobalState,
    (state: WeatherState) => state.city
)

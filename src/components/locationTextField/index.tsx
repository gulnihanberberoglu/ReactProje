import React from 'react';
import TextField from '../textField';
import {WeatherRequest} from "../../shared/store/types/weather.types";

export type LocationTextFieldProps = {
    onChange?: (result?: WeatherRequest) => void;
}

const LocationTextField: React.FC<LocationTextFieldProps> = ({ onChange }: LocationTextFieldProps): JSX.Element => {
    let places: google.maps.places.Autocomplete;
    const textFieldRef = React.useRef<any>();

    React.useEffect(() => {
        places = new google.maps.places.Autocomplete(textFieldRef.current);
        google.maps.event.addListener(places, 'place_changed', placeChangedCallback);
    }, [textFieldRef.current]);

    const placeChangedCallback: any = (): void => {
        let place = places.getPlace();
        if (onChange) {
            if (place.geometry) {
                onChange({
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                });
            }
            else {
                onChange(undefined);
            }
        }
    }

    return (
        <TextField ref={textFieldRef} placeholder="Konum giriniz" />
    );
};

export default LocationTextField;

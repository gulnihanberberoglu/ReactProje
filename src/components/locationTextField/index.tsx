import React from 'react';
import TextField from '../textField';

export type LocationResult = {
    lat: number,
    lng: number,
}

export type LocationTextFieldProps = {
    onChange?: (result?: LocationResult) => void;
}

const LocationTextField: React.FC<LocationTextFieldProps> = ({ onChange, ...props }): JSX.Element => {
    let places: google.maps.places.Autocomplete;
    const textFieldRef = React.useRef<any>();

    React.useEffect(() => {
        places = new google.maps.places.Autocomplete(textFieldRef.current);
        google.maps.event.addListener(places, 'place_changed', placeChangedCallback);
    }, []);

    function placeChangedCallback() {
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
import { LoadingActionTypes } from "../types/loading.types";
import { OPEN_LOADING, CLOSE_LOADING } from "../constants/loading.constants";

//store'a gelen loading action sonucunda uygulamanın nasıl değişeceği belirlendi

export type LoadingState = {
    isOpen: boolean
}

const initialState: LoadingState = {
    isOpen: false
}

export function loadingReducer(state: LoadingState = initialState, action: LoadingActionTypes): LoadingState {
    switch (action.type) {
        case OPEN_LOADING:
            return {
                ...state,
                isOpen: true,
            }
        case CLOSE_LOADING:
            return {
                ...state,
                isOpen: false,
            }
        default:
            return state;
    }
}

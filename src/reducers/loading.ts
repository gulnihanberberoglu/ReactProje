import { LoadingState, LoadingActionTypes, OPEN_LOADING, CLOSE_LOADING } from "../types/loading";

const initialState: LoadingState = {
    isOpen: false
}

export function loadingReducer(state = initialState, action: LoadingActionTypes): LoadingState {
    switch (action.type) {
        case OPEN_LOADING:
            return {
                isOpen: true
            }
        case CLOSE_LOADING:
            return {
                isOpen: false
            }
        default:
            return state
    }
}
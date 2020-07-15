import {LoadingState} from "../reducers/loading.reducer";
import {IAppState} from "../index";
import {createSelector} from "reselect";

export const loadingGlobalState: (state: IAppState) => LoadingState = (state: IAppState): LoadingState => state.loading;

export const isOpenSelector: any = createSelector(
    loadingGlobalState,
    (state: LoadingState) => state.isOpen
)

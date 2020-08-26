import {CLOSE_LOADING, OPEN_LOADING} from "../constants/loading.constants";

export interface OpenLoadingActionInterface {
  type: typeof OPEN_LOADING
}

export interface CloseLoadingActionInterface {
  type: typeof CLOSE_LOADING
}

export type LoadingActionTypes = OpenLoadingActionInterface | CloseLoadingActionInterface

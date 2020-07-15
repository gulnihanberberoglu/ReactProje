import {CLOSE_LOADING, OPEN_LOADING} from "../constants/loading.constants";

interface OpenLoadingActionInterface {
  type: typeof OPEN_LOADING
}

interface CloseLoadingActionInterface {
  type: typeof CLOSE_LOADING
}

export type LoadingActionTypes = OpenLoadingActionInterface | CloseLoadingActionInterface

import { LoadingActionTypes } from '../types/loading.types'
import {CLOSE_LOADING, OPEN_LOADING} from "../constants/loading.constants";

export function openLoadingAction(): LoadingActionTypes {
  return {
    type: OPEN_LOADING
  }
}

export function closeLoadingAction(): LoadingActionTypes {
  return {
    type: CLOSE_LOADING
  }
}

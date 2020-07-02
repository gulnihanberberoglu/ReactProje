import { OPEN_LOADING, CLOSE_LOADING, LoadingActionTypes } from '../types/loading'

export function openLoading(): LoadingActionTypes {
  return {
    type: OPEN_LOADING
  }
}

export function closeLoading(): LoadingActionTypes {
  return {
    type: CLOSE_LOADING
  }
}
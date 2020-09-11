import { LoadingActionTypes } from '../types/loading.types'
import {CLOSE_LOADING, OPEN_LOADING} from "../constants/loading.constants";

//store'a iletilen loading değişken bilgileri

export const openLoadingAction = (): LoadingActionTypes => ({
  type: OPEN_LOADING
})

export const closeLoadingAction = (): LoadingActionTypes => ({
  type: CLOSE_LOADING
})

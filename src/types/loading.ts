export const OPEN_LOADING = 'OPEN_LOADING'
export const CLOSE_LOADING = 'CLOSE_LOADING'

interface OpenLoadingAction {
  type: typeof OPEN_LOADING
}

interface CloseLoadingAction {
  type: typeof CLOSE_LOADING
}

export type LoadingState = {
  isOpen: boolean
}

export type LoadingActionTypes = OpenLoadingAction | CloseLoadingAction
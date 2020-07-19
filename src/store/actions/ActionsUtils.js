import { SET_IS_LOADING, SET_DATA_ALERT } from '../actionsTypes'

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  isLoading
})

export const setDataAlert = dataAlert => ({
  type: SET_DATA_ALERT,
  dataAlert
})

import { SET_FUENTES, SET_IS_LOADING_FUENTES } from '../actionsTypes'
import { getFuentes } from '../../network/api'
import { filtrarPorTexto } from '../../core/fuentes/filters'

const setFuentes = fuentes => ({
  type: SET_FUENTES,
  fuentes
})

const setIsLoading = isLoadingFuentes => ({
  type: SET_IS_LOADING_FUENTES,
  isLoadingFuentes
})

// redux thunks
export const fetchFuentes = (texto = '') => async dispatch => {
  await dispatch(setIsLoading(true))
  const fuentes = await getFuentes()
  if (fuentes.status === HTTP_REQUEST_OK) {
    if (texto.length === 0) {
      dispatch(setFuentes(fuentes.data))
    } else {
      dispatch(setFuentes(filtrarPorTexto(texto, fuentes.data)))
    }
    await dispatch(setIsLoading(false))
  } else {
    dispatch(setFuentes([]))
    await dispatch(setIsLoading(false))
  }
}

const HTTP_REQUEST_OK = 200

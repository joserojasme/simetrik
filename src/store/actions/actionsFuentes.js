import { SET_FUENTES, SET_IS_LOADING_FUENTES } from '../actionsTypes'
import { getFuentes } from '../../network/api'
import { filtrarPorTexto, filtrarPorFecha } from '../../core/fuentes/filters'

const setFuentes = fuentes => ({
  type: SET_FUENTES,
  fuentes
})

const setIsLoading = isLoadingFuentes => ({
  type: SET_IS_LOADING_FUENTES,
  isLoadingFuentes
})

// redux thunks
export const fetchFuentes = (texto = '', fecha = '') => async dispatch => {
  await dispatch(setIsLoading(true))
  const fuentes = await getFuentes()
  if (fuentes.status === HTTP_REQUEST_OK) {
    if (texto.length === 0 && fecha.length === 0) {
      dispatch(setFuentes(fuentes.data))
    } else {
      if (texto.length > 0) {
        dispatch(setFuentes(filtrarPorTexto(texto, fuentes.data)))
      }

      if (fecha.length > 0) {
        dispatch(setFuentes(filtrarPorFecha(fecha, fuentes.data)))
      }
    }
    await dispatch(setIsLoading(false))
  } else {
    dispatch(setFuentes([]))
    await dispatch(setIsLoading(false))
  }
}

const HTTP_REQUEST_OK = 200

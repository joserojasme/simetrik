import { SET_FUENTES } from '../actionsTypes'
import { getFuentes } from '../../network/api'
import { filtrarPorTexto } from '../../core/fuentes/filters'

const setFuentes = fuentes => ({
  type: SET_FUENTES,
  fuentes
})

// redux thunks
export const fetchFuentes = (texto = '') => async dispatch => {
  const fuentes = await getFuentes()
  if (fuentes.status === HTTP_REQUEST_OK) {
    if (texto.length === 0) {
      dispatch(setFuentes(fuentes.data))
    } else {
      dispatch(setFuentes(filtrarPorTexto(texto, fuentes.data)))
    }
  } else {
    dispatch(setFuentes([]))
  }
}

const HTTP_REQUEST_OK = 200

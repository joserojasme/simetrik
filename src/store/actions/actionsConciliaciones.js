import { SET_CONCILIACIONES } from '../actionsTypes'
import { getConciliaciones } from '../../network/api'
import { filtrarPorTexto } from '../../core/conciliaciones/filters'

const setConciliaciones = conciliaciones => ({
  type: SET_CONCILIACIONES,
  conciliaciones
})

// redux thunks
export const fetchConciliaciones = (texto = '') => async dispatch => {
  const conciliaciones = await getConciliaciones()
  if (conciliaciones.status === HTTP_REQUEST_OK) {
    if (texto.length === 0) {
      dispatch(setConciliaciones(conciliaciones.data))
    } else {
      dispatch(setConciliaciones(filtrarPorTexto(texto, conciliaciones.data)))
    }
  } else {
    dispatch(setConciliaciones([]))
  }
}

const HTTP_REQUEST_OK = 200

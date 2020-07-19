import {
  SET_CONCILIACIONES,
  SET_IS_LOADING_CONCILIACIONES
} from '../actionsTypes'
import { getConciliaciones } from '../../network/api'
import {
  filtrarPorTexto,
  filtrarBalance,
  filtrarPorFecha
} from '../../core/conciliaciones/filters'

const setConciliaciones = conciliaciones => ({
  type: SET_CONCILIACIONES,
  conciliaciones
})

const setIsLoading = isLoadingConciliaciones => ({
  type: SET_IS_LOADING_CONCILIACIONES,
  isLoadingConciliaciones
})

// redux thunks
export const fetchConciliaciones = (
  texto = '',
  balance = '',
  fecha = ''
) => async dispatch => {
  await dispatch(setIsLoading(true))
  const conciliaciones = await getConciliaciones()
  if (conciliaciones.status === HTTP_REQUEST_OK) {
    if (texto.length === 0 && balance.length === 0 && fecha.length === 0) {
      dispatch(setConciliaciones(conciliaciones.data))
    } else {
      if (texto.length > 0) {
        dispatch(setConciliaciones(filtrarPorTexto(texto, conciliaciones.data)))
      }

      if (balance.length > 0) {
        dispatch(
          setConciliaciones(filtrarBalance(balance, conciliaciones.data))
        )
      }

      if (fecha.length > 0) {
        dispatch(setConciliaciones(filtrarPorFecha(fecha, conciliaciones.data)))
      }
    }
    await dispatch(setIsLoading(false))
  } else {
    dispatch(setConciliaciones([]))
    await dispatch(setIsLoading(false))
  }
}

const HTTP_REQUEST_OK = 200

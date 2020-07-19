import { SET_TABLEROS, SET_IS_LOADING_TABLEROS } from '../actionsTypes'
import { getTableros } from '../../network/api'
import { filtrarPorTexto, filtrarPorFecha } from '../../core/tableros/filters'

const setTableros = tableros => ({
  type: SET_TABLEROS,
  tableros
})

const setIsLoading = isLoadingTableros => ({
  type: SET_IS_LOADING_TABLEROS,
  isLoadingTableros
})

// redux thunks
export const fetchTableros = (texto = '', fecha = '') => async dispatch => {
  await dispatch(setIsLoading(true))
  const tableros = await getTableros()
  if (tableros.status === HTTP_REQUEST_OK) {
    if (texto.length === 0 && fecha.length === 0) {
      dispatch(setTableros(tableros.data))
    } else {
      if (texto.length > 0) {
        dispatch(setTableros(filtrarPorTexto(texto, tableros.data)))
      }

      if (fecha.length > 0) {
        dispatch(setTableros(filtrarPorFecha(fecha, tableros.data)))
      }
    }
    await dispatch(setIsLoading(false))
  } else {
    dispatch(setTableros([]))
    await dispatch(setIsLoading(false))
  }
}

const HTTP_REQUEST_OK = 200

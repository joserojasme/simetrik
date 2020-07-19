import { SET_TABLEROS } from '../actionsTypes'
import { getTableros } from '../../network/api'
import { filtrarPorTexto } from '../../core/tableros/filters'

const setTableros = tableros => ({
  type: SET_TABLEROS,
  tableros
})

// redux thunks
export const fetchTableros = (texto = '') => async dispatch => {
  const tableros = await getTableros()
  if (tableros.status === HTTP_REQUEST_OK) {
    if (texto.length === 0) {
      dispatch(setTableros(tableros.data))
    } else {
      dispatch(setTableros(filtrarPorTexto(texto, tableros.data)))
    }
  } else {
    dispatch(setTableros([]))
  }
}

const HTTP_REQUEST_OK = 200

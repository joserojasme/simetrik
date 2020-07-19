import { SET_USUARIOS } from '../actionsTypes'
import { getUsuarios } from '../../network/api'
import { filtrarPorTexto } from '../../core/usuarios/filters'

const setUsuarios = usuarios => ({
  type: SET_USUARIOS,
  usuarios
})

// redux thunks
export const fetchUsuarios = (texto = '') => async dispatch => {
  const usuarios = await getUsuarios()
  if (usuarios.status === HTTP_REQUEST_OK) {
    if (texto.length === 0) {
      dispatch(setUsuarios(usuarios.data))
    } else {
      dispatch(setUsuarios(filtrarPorTexto(texto, usuarios.data)))
    }
  } else {
    dispatch(setUsuarios([]))
  }
}

const HTTP_REQUEST_OK = 200

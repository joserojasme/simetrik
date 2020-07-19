import { SET_USUARIOS, SET_IS_LOADING_USUARIOS } from '../actionsTypes'
import { getUsuarios } from '../../network/api'
import { filtrarPorTexto } from '../../core/usuarios/filters'

const setUsuarios = usuarios => ({
  type: SET_USUARIOS,
  usuarios
})

const setIsLoading = isLoadingUsuarios => ({
  type: SET_IS_LOADING_USUARIOS,
  isLoadingUsuarios
})

// redux thunks
export const fetchUsuarios = (texto = '') => async dispatch => {
  await dispatch(setIsLoading(true))
  const usuarios = await getUsuarios()
  if (usuarios.status === HTTP_REQUEST_OK) {
    if (texto.length === 0) {
      dispatch(setUsuarios(usuarios.data))
    } else {
      dispatch(setUsuarios(filtrarPorTexto(texto, usuarios.data)))
    }
    await dispatch(setIsLoading(false))
  } else {
    dispatch(setUsuarios([]))
    await dispatch(setIsLoading(false))
  }
}

const HTTP_REQUEST_OK = 200

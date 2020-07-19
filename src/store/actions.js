import {
  SET_IS_LOADING,
  SET_DATA_ALERT,
  SET_CONCILIACIONES,
  SET_FUENTES,
  SET_TABLEROS,
  SET_USUARIOS
} from './actionsTypes'
import {
  getConciliaciones,
  getFuentes,
  getTableros,
  getUsuarios
} from '../network/api'

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  isLoading
})

export const setDataAlert = dataAlert => ({
  type: SET_DATA_ALERT,
  dataAlert
})

const setConciliaciones = conciliaciones => ({
  type: SET_CONCILIACIONES,
  conciliaciones
})

const setFuentes = fuentes => ({
  type: SET_FUENTES,
  fuentes
})

const setTableros = tableros => ({
  type: SET_TABLEROS,
  tableros
})

const setUsuarios = usuarios => ({
  type: SET_USUARIOS,
  usuarios
})

// redux thunks
export const fetchConciliaciones = dispatch => async () => {
  dispatch(setIsLoading(true))
  const conciliaciones = await getConciliaciones()
  if (conciliaciones.status === HTTP_REQUEST_OK) {
    dispatch(setConciliaciones(conciliaciones.data))
  } else {
    dispatch(setConciliaciones([]))
  }
  dispatch(setIsLoading(false))
}

export const fetchFuentes = dispatch => async () => {
  dispatch(setIsLoading(true))
  const fuentes = await getFuentes()
  if (fuentes.status === HTTP_REQUEST_OK) {
    dispatch(setFuentes(fuentes.data))
  } else {
    dispatch(setFuentes([]))
  }
  dispatch(setIsLoading(false))
}

export const fetchTableros = dispatch => async () => {
  dispatch(setIsLoading(true))
  const tableros = await getTableros()
  if (tableros.status === HTTP_REQUEST_OK) {
    dispatch(setTableros(tableros.data))
  } else {
    dispatch(setTableros([]))
  }
  dispatch(setIsLoading(false))
}

export const fetchUsuarios = dispatch => async () => {
  dispatch(setIsLoading(true))
  const usuarios = await getUsuarios()
  if (usuarios.status === HTTP_REQUEST_OK) {
    dispatch(setUsuarios(usuarios.data))
  } else {
    dispatch(setUsuarios([]))
  }
  dispatch(setIsLoading(false))
}

const HTTP_REQUEST_OK = 200

import {
  SET_IS_LOADING,
  SET_DATA_ALERT,
  SET_CONCILIACIONES,
  SET_FUENTES,
  SET_TABLEROS,
  SET_USUARIOS
} from './actionsTypes'

const initialState = {
  isLoading: false,
  dataAlert: {},
  conciliaciones: [],
  fuentes: [],
  tableros: [],
  usuarios: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_IS_LOADING:
    return {
      ...state,
      isLoading: action.isLoading
    }
  case SET_DATA_ALERT:
    return {
      ...state,
      dataAlert: action.dataAlert
    }
  case SET_CONCILIACIONES:
    return {
      ...state,
      conciliaciones: action.conciliaciones
    }
  case SET_FUENTES:
    return {
      ...state,
      fuentes: action.fuentes
    }
  case SET_TABLEROS:
    return {
      ...state,
      tableros: action.tableros
    }
  case SET_USUARIOS:
    return {
      ...state,
      usuarios: action.usuarios
    }
  default:
    return state
  }
}

export default reducer

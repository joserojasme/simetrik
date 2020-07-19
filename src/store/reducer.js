import {
  SET_IS_LOADING,
  SET_DATA_ALERT,
  SET_CONCILIACIONES,
  SET_FUENTES,
  SET_TABLEROS,
  SET_USUARIOS,
  SET_IS_LOADING_CONCILIACIONES,
  SET_IS_LOADING_FUENTES,
  SET_IS_LOADING_TABLEROS,
  SET_IS_LOADING_USUARIOS
} from './actionsTypes'

const initialState = {
  isLoading: false,
  dataAlert: {},
  conciliaciones: [],
  fuentes: [],
  tableros: [],
  usuarios: [],
  isLoadingConciliaciones: false,
  isLoadingFuentes: false,
  isLoadingTableros: false,
  isLoadingUsuarios: false
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
  case SET_IS_LOADING_CONCILIACIONES:
    return {
      ...state,
      isLoadingConciliaciones: action.isLoadingConciliaciones
    }
  case SET_IS_LOADING_FUENTES:
    return {
      ...state,
      isLoadingFuentes: action.isLoadingFuentes
    }
  case SET_IS_LOADING_TABLEROS:
    return {
      ...state,
      isLoadingTableros: action.isLoadingTableros
    }
  case SET_IS_LOADING_USUARIOS:
    return {
      ...state,
      isLoadingUsuarios: action.isLoadingUsuarios
    }
  default:
    return state
  }
}

export default reducer

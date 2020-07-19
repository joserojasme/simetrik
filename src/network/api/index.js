import axios from 'axios'
import config from '../../config/constants'

const request = axios.create({ baseURL: config.baseURL })

export const getConciliaciones = () => {
  try {
    const data = request('conciliaciones.json')
    return data
  } catch (error) {
    return error.response
  }
}

export const getFuentes = () => {
  try {
    const data = request('fuentes.json')
    return data
  } catch (error) {
    return error.response
  }
}

export const getTableros = () => {
  try {
    const data = request('tableros.json')
    return data
  } catch (error) {
    return error.response
  }
}

export const getUsuarios = () => {
  try {
    const data = request('usuarios.json')
    return data
  } catch (error) {
    return error.response
  }
}

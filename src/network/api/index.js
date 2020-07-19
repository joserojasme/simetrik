import axios from 'axios'
import config from '../../config/constants'

const request = axios.create({ baseURL: config.baseURL })

export const getConciliaciones = async () => {
  try {
    const data = await request('conciliaciones.json')
    return data
  } catch (error) {
    return error.response
  }
}

export const getFuentes = async () => {
  try {
    const data = await request('fuentes.json')
    return data
  } catch (error) {
    return error.response
  }
}

export const getTableros = async () => {
  try {
    const data = await request('tableros.json')
    return data
  } catch (error) {
    return error.response
  }
}

export const getUsuarios = async () => {
  try {
    const data = await request('usuarios.json')
    return data
  } catch (error) {
    return error.response
  }
}

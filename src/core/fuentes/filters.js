import {
  filtrarPorTextoTags,
  removeDuplicates,
  removeGuion
} from '../utils/utilsFunctions'

const fieldsFuentes = ['_id', 'name', 'company', 'description']

export const filtrarPorTexto = (texto, arrayData) => {
  const newData = []
  arrayData.forEach(data => {
    Object.keys(data).forEach(key => {
      if (key === 'tags') filtrarPorTextoTags(data, newData, texto)
      fieldsFuentes.forEach(item => {
        if (key === item) {
          const value = data[key]
          if (value.toUpperCase().includes(texto.toUpperCase()))
            newData.push(data)
        }
      })
    })
  })
  return removeDuplicates(newData)
}

export const filtrarPorFecha = (fecha, arrayData) => {
  const newData = arrayData.filter(item => {
    return removeGuion(item.timestamp.createdAt) >= removeGuion(fecha)
  })
  return removeDuplicates(newData)
}

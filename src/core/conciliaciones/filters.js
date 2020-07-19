import {
  filtrarPorTextoTags,
  removeDuplicates,
  removeGuion
} from '../utils/utilsFunctions'

const fieldsConciliaciones = [
  '_id',
  'conciliationName',
  'sourceA',
  'sourceB',
  'description'
]

export const filtrarPorTexto = (texto, arrayData) => {
  const newData = []
  arrayData.forEach(data => {
    Object.keys(data).forEach(key => {
      if (key === 'tags') filtrarPorTextoTags(data, newData, texto)
      fieldsConciliaciones.forEach(item => {
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

export const filtrarBalance = (balance, arrayData) => {
  const newData = arrayData.filter(item => {
    const number = Number(item.balance.replace(/[^0-9.-]+/g, ''))
    return number >= Number(balance)
  })
  return removeDuplicates(newData)
}

export const filtrarPorFecha = (fecha, arrayData) => {
  const newData = arrayData.filter(item => {
    return removeGuion(item.timestamp.createdAt) >= removeGuion(fecha)
  })
  return removeDuplicates(newData)
}

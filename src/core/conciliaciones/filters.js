import { filtrarPorTextoTags, removeDuplicates } from '../utils/utilsFunctions'

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

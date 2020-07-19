import { filtrarPorTextoTags, removeDuplicates } from '../utils/utilsFunctions'

const fieldsTableros = [
  '_id',
  'dashboardName',
  'visualType.name',
  'visuals.name',
  'description'
]

export const filtrarPorTexto = (texto, arrayData) => {
  const newData = []
  arrayData.forEach(data => {
    Object.keys(data).forEach(key => {
      if (key === 'tags') filtrarPorTextoTags(data, newData, texto)
      fieldsTableros.forEach(item => {
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

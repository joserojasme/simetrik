import { filtrarPorTextoTags, removeDuplicates } from '../utils/utilsFunctions'

const fieldsUsuarios = [
  '_id',
  'name.firstName',
  'name.lastName',
  'gender',
  'company',
  'email',
  'address'
]

export const filtrarPorTexto = (texto, arrayData) => {
  const newData = []
  arrayData.forEach(data => {
    Object.keys(data).forEach(key => {
      if (key === 'tags') filtrarPorTextoTags(data, newData, texto)
      fieldsUsuarios.forEach(item => {
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

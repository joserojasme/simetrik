export const filtrarPorTextoTags = (data, newData, texto) => {
  data.tags.forEach(item => {
    if (item.toUpperCase().includes(texto.toUpperCase())) newData.push(data)
  })
}

export const removeDuplicates = data => {
  let newData = data
  newData = newData.filter(
    (item, index, self) => index === self.findIndex(t => t._id === item._id)
  )
  return newData
}

export const removeGuion = value => {
  return value.replace(/-/g, '')
}

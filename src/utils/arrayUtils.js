export const getElementById = (array, id) => {
  id = parseInt(id)

  for (let i = 0; i < array.length; i++) {
    const element = { ...array[i] };
    if (element.id === id)
      return element
  }

  return null
}
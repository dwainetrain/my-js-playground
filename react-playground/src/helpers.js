function choice(itemsArray) {
  const randomPick = Math.floor(Math.random() * itemsArray.length)
  return itemsArray[randomPick]
}

function remove(itemsArray, item) {
  for (let i in itemsArray) {
    if (itemsArray[i] === item) {
      itemsArray.splice(i, 1)
      return itemsArray
    }
  }
}

export {choice, remove};
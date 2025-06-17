const getStoredReadtList = () => {
  // read-list
  const storedListStr = localStorage.getItem('read-list')
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr)
    return storedList
  } else {
    return []
  }
}

const addToStoredReadList = (id) => {
  const storedList = getStoredReadtList()
  if (storedList.includes(id)) {
    // already exist do not add it
    console.log(id, 'already exist in the read list')
  } else {
    storedList.push(id)
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('read-list', storedListStr)
  }
}

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem('wish-list')
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr)
    return storedWishList
  } else {
    return []
  }
}

const addToStroredWishList = (id) => {
  const storedWishList = getStoredWishList()
  if (storedWishList.includes(id)) {
    //already exists. do not add it
    console.log(id, 'already exists in the read list')
  } else {
    storedWishList.push(id)
    const storedWishListStr = JSON.stringify(storedWishList)
    localStorage.setItem('wish-list', storedWishListStr)
  }
}

export { addToStoredReadList, addToStroredWishList, getStoredReadtList }

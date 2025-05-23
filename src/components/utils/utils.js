export const getItemFromLSByKey = (key) => {
  const existingItem = localStorage.getItem(key);
  if (existingItem) {
    return JSON.parse(existingItem);
  }
  return [];
}

export const setKeyValuesIntoLS = (itemForStringify, key) => {
  const setItemIntoLS = JSON.stringify(itemForStringify)
  localStorage.setItem(key, setItemIntoLS)
}

export const addToLSWithKeyValues = (key, currentValue) => {
  const existingItem = getItemFromLSByKey(key);
  if (existingItem) {
    existingItem.push(currentValue)
  }
  setKeyValuesIntoLS(existingItem, key)
}


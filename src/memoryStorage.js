const store = {}

const getItem = async (key, json = false) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const value = store[key]
    return (json && !!value) ? JSON.parse(value) : value
  } catch (error) {
    console.error(`MemoryStorage getItem Error: ${error.message}`)
  }
}

const setItem = async (key, value, json = false) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const stringValue = (json && !!value) ? JSON.stringify(value) : value

    if (!(typeof stringValue === 'string' && stringValue && stringValue !== 'null' && stringValue !== 'undefined')) throw new Error('Invalid storage value')
    store[key] = stringValue
  } catch (error) {
    console.error(`MemoryStorage setItem Error: ${error.message}`)
  }
}

const removeItem = async (key) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    delete store[key]
  } catch (error) {
    console.error(`MemoryStorage removeItem Error: ${error.message}`)
  }
}

const getAll = async () => {
  try {
    return store
  } catch (error) {
    console.error(`MemoryStorage getAll Error: ${error.message}`)
  }
}

const getAllKeys = async () => {
  try {
    return Object.keys(store)
  } catch (error) {
    console.error(`MemoryStorage getAllKeys Error: ${error.message}`)
  }
}

const storage = { getItem, setItem, removeItem, getAll, getAllKeys }

export default storage

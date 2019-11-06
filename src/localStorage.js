const store = localStorage

const getItem = async (key, json = false) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const value = store[key]
    return (json && !!value) ? JSON.parse(value) : value
  } catch (error) {
    console.error(`LocalStorage getItem Error: ${error.message}`)
  }
}

const setItem = async (key, value, json = false) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const stringValue = (json && !!value) ? JSON.stringify(value) : value
    if (!(typeof stringValue === 'string' && stringValue && stringValue !== 'null' && stringValue !== 'undefined')) throw new Error('Invalid storage value')
    store[key] = stringValue
  } catch (error) {
    console.error(`LocalStorage setItem Error: ${error.message}`)
  }
}

const removeItem = async (key) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    delete store[key]
  } catch (error) {
    console.error(`LocalStorage removeItem Error: ${error.message}`)
  }
}

const getAllItems = async () => {
  try {
    return store
  } catch (error) {
    console.error(`LocalStorage getAllItems Error: ${error.message}`)
  }
}

const storage = { getItem, setItem, removeItem, getAllItems }

export default storage

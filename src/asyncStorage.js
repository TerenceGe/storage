import AsyncStorage from '@react-native-community/async-storage'

const getItem = async (key, json = false) => {
  try {
    const value = await AsyncStorage.getItem(key)
    return (json && !!value) ? JSON.parse(value) : value
  } catch (error) {
    console.error(`AsyncStorage getItem Error: ${error.message}`)
  }
}

const setItem = async (key, value, json = false) => {
  try {
    const stringValue = (json && !!value) ? JSON.stringify(value) : value
    await AsyncStorage.setItem(key, stringValue)
  } catch (error) {
    console.error(`AsyncStorage setItem Error: ${error.message}`)
  }
}

const mergeItem = async (key, value, json = false) => {
  try {
    const stringValue = (json && !!value) ? JSON.stringify(value) : value
    await AsyncStorage.mergeItem(key, stringValue)
  } catch (error) {
    console.error(`AsyncStorage mergeItem Error: ${error.message}`)
  }
}

const removeItem = async (key) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    await AsyncStorage.removeItem(key)
  } catch (error) {
    console.error(`AsyncStorage removeItem Error: ${error.message}`)
  }
}

const getAllKeys = async () => {
  try {
    await AsyncStorage.getAllKeys()
  } catch (error) {
    console.error(`AsyncStorage getAllKeys Error: ${error.message}`)
  }
}

const getAll = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    const items = await AsyncStorage.multiGet(keys)
    return items
  } catch (error) {
    console.error(`AsyncStorage getAllKeys Error: ${error.message}`)
  }
}

const storage = { getItem, setItem, mergeItem, removeItem, getAllKeys, getAll }

export default storage

import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const getItem = async (key, json = false, options = {}) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const value = cookies.get(key, options)
    return (json && !!value) ? JSON.parse(value) : value
  } catch (error) {
    console.error(`CookieStorage getItem Error: ${error.message}`)
  }
}

const setItem = async (key, value, json = false, options = {}) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const stringValue = (json && !!value) ? JSON.stringify(value) : value
    if (!(typeof stringValue === 'string' && stringValue && stringValue !== 'null' && stringValue !== 'undefined')) throw new Error('Invalid storage value')
    cookies.set(key, stringValue, options)
  } catch (error) {
    console.error(`CookieStorage setItem Error: ${error.message}`)
  }
}

const removeItem = async (key, options = {}) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    cookies.remove(key, options)
  } catch (error) {
    console.error(`CookieStorage removeItem Error: ${error.message}`)
  }
}

const getAll = async (options = {}) => {
  try {
    return cookies.getAll(options)
  } catch (error) {
    console.error(`CookieStorage getAll Error: ${error.message}`)
  }
}

const getAllKeys = async (options = {}) => {
  try {
    return Object.keys(cookies.getAll(options))
  } catch (error) {
    console.error(`CookieStorage getAllKeys Error: ${error.message}`)
  }
}

const storage = { getItem, setItem, removeItem, getAllKeys, getAll }

export default storage

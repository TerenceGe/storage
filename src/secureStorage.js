import SensitiveInfo from 'react-native-sensitive-info'

const getItem = async (key, json = false) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const value = await SensitiveInfo.getItem(key, {
      sharedPreferencesName: 'BasisSharedPrefs',
      keychainService: 'BasisKeychain'
    })
    return (json && !!value) ? JSON.parse(value) : value
  } catch (error) {
    console.error(`SecureStorage getItem Error: ${error.message}`)
  }
}

const setItem = async (key, value, json = false) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    const stringValue = (json && !!value) ? JSON.stringify(value) : value
    if (!(typeof stringValue === 'string' && stringValue && stringValue !== 'null' && stringValue !== 'undefined')) throw new Error('Invalid storage value')
    await SensitiveInfo.setItem(key, stringValue, {
      sharedPreferencesName: 'BasisSharedPrefs',
      keychainService: 'BasisKeychain',
      encrypt: true
    })
  } catch (error) {
    console.error(`SecureStorage setItem Error: ${error.message}`)
  }
}

const removeItem = async (key) => {
  try {
    if (!key) throw new Error('Invalid storage key')
    await SensitiveInfo.deleteItem(key, {
      sharedPreferencesName: 'BasisSharedPrefs',
      keychainService: 'BasisKeychain'
    })
  } catch (error) {
    console.error(`SecureStorage removeItem Error: ${error.message}`)
  }
}

const getAll = async () => {
  try {
    const items = await SensitiveInfo.getAllItems({
      sharedPreferencesName: 'BasisSharedPrefs',
      keychainService: 'BasisKeychain'
    })

    if (toString.call(items).slice(8, -1) === 'Array') {
      return items[0].reduce((o, i) => ({ ...o, [i.key]: i.value }), {})
    }

    return items
  } catch (error) {
    console.error(`SecureStorage getAll Error: ${error.message}`)
  }
}

const getAllKeys = async () => {
  try {
    const items = await SensitiveInfo.getAllItems({
      sharedPreferencesName: 'BasisSharedPrefs',
      keychainService: 'BasisKeychain'
    })

    if (toString.call(items).slice(8, -1) === 'Array') {
      return items[0].reduce((o, i) => ({ ...o, [i.key]: i.value }), {})
    }

    return Object.keys(items)
  } catch (error) {
    console.error(`SecureStorage getAllKeys Error: ${error.message}`)
  }
}

/* const removeAllItems = async () => {
 *   try {
 *     let items = await SensitiveInfo.getAllItems({
 *       sharedPreferencesName: 'BasisSharedPrefs',
 *       keychainService: 'BasisKeychain'
 *     })
 *
 *     if (toString.call(items).slice(8, -1) === 'Array') {
 *       items = items[0].reduce((o: any, i: any) => ({ ...o, [i.key]: i.value }), {})
 *     }
 *
 *     for (const key of Object.keys(items)) {
 *       await SensitiveInfo.deleteItem(key, {
 *         sharedPreferencesName: 'BasisSharedPrefs',
 *         keychainService: 'BasisKeychain'
 *       })
 *     }
 *   } catch (error) {
 *     console.error(`SecureStorage removeAllItems Error: ${error.message}`)
 *   }
 * } */

const storage = { getItem, setItem, removeItem, getAll, getAllKeys }

export default storage

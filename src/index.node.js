import memoryStorage from './memoryStorage'
import cookieStorage from './cookieStorage'

const secureStorage = memoryStorage
const asyncStorage = memoryStorage

const storage = { memoryStorage, cookieStorage, secureStorage, asyncStorage }

export { memoryStorage, cookieStorage, secureStorage, asyncStorage }

export default storage

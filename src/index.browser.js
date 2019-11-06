import memoryStorage from './memoryStorage'
import cookieStorage from './cookieStorage'
import localStorage from './localStorage'

const secureStorage = localStorage
const asyncStorage = localStorage

const storage = { memoryStorage, cookieStorage, secureStorage, asyncStorage }
export { memoryStorage, cookieStorage, secureStorage, asyncStorage }
export default storage

import memoryStorage from './memoryStorage'
import asyncStorage from './asyncStorage'
import secureStorage from './secureStorage'

const storage = { memoryStorage, secureStorage, asyncStorage }
export { memoryStorage, secureStorage, asyncStorage }
export default storage

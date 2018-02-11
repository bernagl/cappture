import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import { AsyncStorage } from 'react-native'
import reducers from '../reducers'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['materias']
}

const reducer = persistReducer(persistConfig, reducers)

// export default () => {
let store = createStore(reducer, {}, applyMiddleware(compose(thunk)))
let persistor = persistStore(store)
export { store, persistor }
// }

// export default createStore(reducers, {}, compose(applyMiddleware(thunk)))

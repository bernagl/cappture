import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Application from './src/App'
import { persistor, store } from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Application />
      </Provider>
    )
  }
}

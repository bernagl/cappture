import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Application from './src/App'
import { persistor, store } from './src/store'
import Expo from 'expo'
import { Text } from 'react-native'

export default class App extends React.Component {
  state = { font: false }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ font: true })
  }
  render() {
    return this.state.font ? (
      <Provider store={store}>
        <Application />
      </Provider>
    ) : (
      <React.Fragment>
        <Text>Hola</Text>
      </React.Fragment>
    )
  }
}

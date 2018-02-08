import React from 'react'
import { Platform } from 'react-native'
import { Container } from 'native-base'
import { AppNavigation } from './src/router'
import { AgregarMateria } from './src/screens'

export default class App extends React.Component {
  render() {
    return (
      <Container
        style={Platform.OS === 'android' ? { marginTop: 24 } : { marginTop: 0 }}
      >
        {2 > 1 ? <AgregarMateria /> : <AppNavigation />}
      </Container>
    )
  }
}

import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Body, Container, Content, Header, Icon, Title } from 'native-base'
import { ColorWheel } from 'react-native-color-wheel'

export default class Perfil extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="person" color={tintColor} />
    }
  }

  render() {
    return (
      <Content>
        <ColorWheel
          initialColor="#00ee00"
          style={{ marginLeft: 20, padding: 40, height: 200, width: 200 }}
        />
      </Content>
    )
  }
}

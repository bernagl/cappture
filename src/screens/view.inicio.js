import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Body, Content, Header, Icon, Title } from 'native-base'

export default class Inicio extends React.Component {
  static navigationOptions = {
    title: 'Inicio',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="menu" color={tintColor} />
    }
  }
  render() {
    return (
      <Content>
        <Header>
          <Body>
            <Title>Inicio</Title>
          </Body>
        </Header>
        <Text>Inicio</Text>
      </Content>
    )
  }
}

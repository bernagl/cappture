import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Body, Content, Header, Icon, Title } from 'native-base'

export default class Horario extends React.Component {
  static navigationOptions = {
    title: 'Horario',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="paper" color={tintColor} />
    }
  }

  render() {
    return (
      <Content>
        <Header>
          <Body>
            <Title>Horario</Title>
          </Body>
        </Header>
        <Text>Horario</Text>
      </Content>
    )
  }
}

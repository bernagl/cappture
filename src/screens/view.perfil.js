import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Body, Content, Header, Icon, Title } from 'native-base'

export default class Perfil extends React.Component {
  static navigationOptions = {
    title: 'Perfil',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="person" color={tintColor} />
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Perfil</Title>
          </Body>
        </Header>
        <Content>
          <Text>Perfil</Text>
        </Content>
      </Container>
    )
  }
}

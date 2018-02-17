import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Body, Content, Header, Icon, Title } from 'native-base'
import { DiaItem } from '../components'

const dias = [
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
  'Domingo'
]

export default class Horario extends React.Component {
  static navigationOptions = {
    title: 'Horario',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="paper" color={tintColor} />
    }
  }

  renderDias() {
    return dias.map(dia => <DiaItem dia={dia} navigation={this.props.navigation} />)
  }

  render() {
    return <Content>{this.renderDias()}</Content>
  }
}

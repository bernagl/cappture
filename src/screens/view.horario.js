import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Body, Content, Header, Icon, Title } from 'native-base'
import { DiaItem } from '../components'
import styles from '../styles'

const dias = [
  { nombre: 'Lunes' },
  { nombre: 'Martes' },
  { nombre: 'Miercoles', label: 'Miércoles' },
  { nombre: 'Jueves' },
  { nombre: 'Viernes' },
  { nombre: 'Sabado', label: 'Sábado' },
  { nombre: 'Domingo' }
]

export default class Horario extends React.Component {
  static navigationOptions = {
    title: 'Horario',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="paper" color={tintColor} />
    }
  }

  renderDias() {
    return dias.map((dia, key) => (
      <DiaItem dia={dia.nombre} navigation={this.props.navigation} key={key} />
    ))
  }

  render() {
    return <Content style={styles.deviceHeight}>{this.renderDias()}</Content>
  }
}

import React from 'react'
import { TabNavigator } from 'react-navigation'
import { Text, View } from 'react-native'
import { Body, Content, Header, Icon, Title } from 'native-base'
import { DiaItem } from '../components'
import { dias } from '../actions/variables'
import styles from '../styles'

export default class Horario extends React.Component {
  static navigationOptions = {
    title: 'Horario',
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="paper" color={tintColor} />
    }
  }

  renderDias() {
    return dias.map((dia, key) => (
      <DiaItem dia={dia} navigation={this.props.navigation} key={key} />
    ))
  }

  render() {
    return <Content style={styles.deviceHeight}>{this.renderDias()}</Content>
  }
}

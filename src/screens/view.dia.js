import React from 'react'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import moment from 'moment'
import { ListView, View } from 'react-native'
import {
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Body,
  Title
} from 'native-base'
import { Dia, MateriaItem } from '../components'
import 'moment/locale/es.js'
moment.locale('es')
let hoy = moment().format('dddd')

class DiaView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hoy: '', listViewData: [] }
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  static navigationOptions = ({ navigation }) => {
    const { dia } = navigation.state.params || false
    hoy = dia
      ? dia
      : hoy === 'Sabado' ? 'Sábado' : hoy === 'Miercoles' ? 'Miércoles' : hoy
    return {
      title: hoy,
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="menu" color={tintColor} />
      }
    }
  }

  render() {
    return <Dia dia={hoy} navigation={this.props.navigation} />
  }
}

const MapDispatchToProps = ({ materias }) => ({ materias })

export default connect(MapDispatchToProps)(DiaView)

import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Icon } from 'native-base'
import { Dia } from '../components'
import 'moment/locale/es.js'
moment.locale('es')
let hoy = moment().format('dddd')

class DiaView extends React.Component {
  state = { hoy: '', listViewData: [] }

  static navigationOptions = ({ navigation }) => {
    const { dia } = navigation.state.params || false
    hoy = dia
      ? dia
      : hoy === 'Sabado' ? 'Sábado' : hoy === 'Miercoles' ? 'Miércoles' : hoy
    return {
      title: dia.label ? dia.label : dia.nombre,
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="menu" color={tintColor} />
      }
    }
  }

  render() {
    console.log(this.props)
    return <Dia dia={hoy} navigation={this.props.navigation} />
  }
}

const MapDispatchToProps = ({ materias }) => ({ materias })

export default connect(MapDispatchToProps)(DiaView)

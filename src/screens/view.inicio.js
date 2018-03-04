import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Fab, Icon } from 'native-base'
import { Dia } from '../components'
import { dias } from '../actions/variables'
import 'moment/locale/es.js'
moment.locale('es')
let hoy = moment().format('dddd')

class Inicio extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { dia } = navigation.state.params || false
    hoy = dias[moment().day()]
    return {
      title: hoy.original,
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="menu" color={tintColor} />
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <Dia dia={hoy.original} navigation={this.props.navigation} />
        <Fab position="bottomRight" style={{ backgroundColor: '#ff7675' }}>
          <Icon name="camera" />
        </Fab>
      </React.Fragment>
    )
  }
}

const MapDispatchToProps = ({ materias }) => ({ materias })

export default connect(MapDispatchToProps)(Inicio)

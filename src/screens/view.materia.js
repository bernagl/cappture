import React from 'react'
import { connect } from 'react-redux'
import { getEventos } from '../actions/evento_actions'
import { Dimensions, Platform, Text, View } from 'react-native'
import { Body, Content, Header, Icon, Tab, Tabs, Title } from 'native-base'
import { TareaItem } from '../components'
import moment from 'moment'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

class Materia extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { data } = navigation.state.params
    return {
      title: data.materia ? data.materia : 'A Nested Details Screen'
    }
  }

  componentWillMount() {
    const { id } = this.props.navigation.state.params.data
    this.props.getEventos(id)
  }

  renderTareas = () => {
    const { id } = this.props.navigation.state.params.data
    return this.props.materia.map(evento => {
      return (
        <View>
          <Text>{evento.nombre}</Text>
          <Text>{moment(evento.fecha).format('lll')}</Text>
          <Text>{evento.status}</Text>
        </View>
      )
    })
  }

  render() {
    console.warn('...sasa', this.props.materia)
    return (
      <Content>
        <Tabs
          initialPage={0}
          // style={{ position: 'absolute', top: 50, right: 0, left: 0 }}
        >
          <Tab heading="Fotos" style={{ height: SCREEN_HEIGHT }}>
            <Text>Aquí van a ir las fotos</Text>
          </Tab>
          <Tab heading="Tareas" style={{ height: SCREEN_HEIGHT }}>
            {this.renderTareas()}
          </Tab>
        </Tabs>
      </Content>
    )
  }
}

mapDispatchToProps = ({ eventos: { materia } }) => ({ materia })

export default connect(mapDispatchToProps, { getEventos })(Materia)

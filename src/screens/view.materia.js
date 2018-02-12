import React from 'react'
import { connect } from 'react-redux'
import { getEventos, setEventoCumplido } from '../actions/evento_actions'
import { Dimensions, Platform, View } from 'react-native'
import {
  Body,
  CheckBox,
  Content,
  Header,
  Icon,
  ListItem,
  Tab,
  Tabs,
  Text,
  Title
} from 'native-base'
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

  handleTarea = id => {}

  renderTareas = () => {
    let fecha
    return this.props.materia.map((evento, key) => {
      let divider = false
      let current = moment(evento.fecha).format('lll')
      !fecha && (fecha = current)
      fecha !== current && ((divider = true), (fecha = current))
      return divider ? (
        <ListItem itemDivider>
          <Text>{current}</Text>
        </ListItem>
      ) : (
        <ListItem key={key}>
          <CheckBox checked={evento.status} />
          <Body>
            <Text>{evento.nombre}</Text>
          </Body>
        </ListItem>
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
            {this.props.materia && this.renderTareas()}
          </Tab>
        </Tabs>
      </Content>
    )
  }
}

mapDispatchToProps = ({ eventos: { materia } }) => ({ materia })

export default connect(mapDispatchToProps, { getEventos, setEventoCumplido })(
  Materia
)

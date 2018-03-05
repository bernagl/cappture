import React from 'react'
import { connect } from 'react-redux'
import { getEventos, toggleEvento } from '../actions/evento_actions'
import { Dimensions, Platform, View } from 'react-native'
import {
  Body,
  Card,
  CardItem,
  CheckBox,
  Content,
  Fab,
  Header,
  H1,
  H3,
  Icon,
  ListItem,
  Tab,
  Tabs,
  Text,
  Title
} from 'native-base'
import { Agenda } from 'react-native-calendars'
import { TareaItem } from '../components'
import moment from 'moment'
import styles from '../styles'

class Materia extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { data } = navigation.state.params
    return {
      title: data.materia ? data.materia : 'A Nested Details Screen'
    }
  }

  state = { icon: 'camera' }

  componentWillMount() {
    const { id } = this.props.navigation.state.params.data
  }

  renderTareas = () => {
    let fecha
    let isNew = false
    const { id } = this.props.navigation.state.params.data
    return this.props.eventos.map((evento, key) => {
      if (evento.id_materia !== id) return
      let divider = false
      let current = moment(evento.fecha).format('l')
      !fecha ? ((fecha = current), (isNew = true)) : (isNew = false)
      fecha !== current && ((divider = true), (fecha = current))
      return (
        <React.Fragment key={key}>
          {(divider || isNew) && (
            <ListItem itemDivider>
              <Text>{moment(evento.fecha).format('LL')}</Text>
            </ListItem>
          )}
          <ListItem key={key}>
            <CheckBox
              checked={evento.status}
              onPress={() => this.handleEvento(evento.id)}
            />
            <Body>
              <Text>{evento.nombre}</Text>
            </Body>
          </ListItem>
        </React.Fragment>
      )
    })
  }

  handleEvento(id) {
    this.props.toggleEvento(id)
  }

  setIcon(icon) {
    icon = icon === 0 ? 'camera' : 'add'
    this.setState({ icon })
  }

  render() {
    const { data } = this.props.navigation.state.params
    const { eventos } = this.props
    return (
      <React.Fragment>
        <Content>
          <Tabs initialPage={0} onChangeTab={({ i, r }) => this.setIcon(i)}>
            <Tab heading="Fotos" style={styles.deviceHeight}>
              <Text>Aquí van a ir las fotos</Text>
            </Tab>
            <Tab heading="Tareas" style={styles.deviceHeight}>
              {this.props.eventos && this.renderTareas()}
            </Tab>
          </Tabs>
        </Content>
        <Fab
          style={{
            backgroundColor: '#403a74'
          }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('Evento', { data })}
        >
          <Icon name={this.state.icon} />
        </Fab>
      </React.Fragment>
    )
  }
}

mapDispatchToProps = ({ eventos }) => ({ eventos })

export default connect(mapDispatchToProps, { getEventos, toggleEvento })(
  Materia
)

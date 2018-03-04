import React from 'react'
import { connect } from 'react-redux'
import { getEventos, setEventoCumplido } from '../actions/evento_actions'
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

  componentWillMount() {
    const { id } = this.props.navigation.state.params.data
    // this.props.getEventos(id)
  }

  handleTarea = id => {}

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
            <CheckBox checked={evento.status} />
            <Body>
              <Text>{evento.nombre}</Text>
            </Body>
          </ListItem>
        </React.Fragment>
      )
    })
  }

  eventos(eventos) {
    let events = {}
    eventos.map(
      evento =>
        (events = {
          ...events,
          [moment(evento.fecha).format('YYYY-MM-D')]: [{ ...evento }]
        })
    )
    return events
  }

  render() {
    const { data } = this.props.navigation.state.params
    const { eventos } = this.props
    const events = this.eventos(eventos)
    console.log(events)
    return (
      <Content>
        <Tabs initialPage={0}>
          <Tab heading="Fotos" style={styles.deviceHeight}>
            <Text>Aquí van a ir las fotos</Text>
          </Tab>
          <Tab heading="Tareas" style={styles.deviceHeight}>
            <Agenda
              items={events}
              renderItem={(item, firstItemInDay) => {
                console.log(item)
                return (
                  <View style={{ padding: 10, backgroundColor: 'white' }}>
                    <H3>{item.nombre}</H3>
                    <Text>{item.status ? 'Terminada' : 'Pendiente'}</Text>
                  </View>
                )
              }}
              loadItemsForMonth={month => {}}
              renderEmptyDate={() => {
                return (
                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 10,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <H1>hola</H1>
                    <Text style={{ fontSize: 12 }}>jeje</Text>
                  </View>
                )
              }}
              renderDay={(day, item) => {
                const dia = day
                  ? moment(day.timestamp).format('ddd')
                  : 'undefined'
                return (
                  <View
                    style={{
                      backgroundColor: 'white',
                      paddingHorizontal: 10,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <H1>{day.day}</H1>
                    <Text style={{ fontSize: 12 }}>{dia}</Text>
                  </View>
                )
              }}
              renderEmptyData={() => {
                return (
                  <View
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                  >
                    <H1>:D</H1>
                    <Text>Día libre, puedes aprovechar para ver una serie</Text>
                  </View>
                )
              }}
              rowHasChanged={(r1, r2) => {
                return r1.text !== r2.text
              }}
            />
            {/* {this.props.eventos && this.renderTareas()}
            <Fab
              style={{
                backgroundColor: '#403a74'
              }}
              position="bottomRight"
              onPress={() => this.props.navigation.navigate('Evento', { data })}
            >
              <Icon name="add" />
            </Fab> */}
          </Tab>
        </Tabs>
      </Content>
    )
  }
}

mapDispatchToProps = ({ eventos }) => ({ eventos })

export default connect(mapDispatchToProps, { getEventos, setEventoCumplido })(
  Materia
)

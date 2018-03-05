import React from 'react'
import { connect } from 'react-redux'
import { getEventos, setEventoCumplido } from '../actions/evento_actions'
import { Dimensions, Platform, View } from 'react-native'
import { Content, H1, H3, Icon, Text } from 'native-base'
import { Agenda } from 'react-native-calendars'
import moment from 'moment'
import styles from '../styles'

class Materia extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Calendario',
      tabBarIcon: ({ tintColor }) => {
        return <Icon name="calendar" color={tintColor} />
      }
    }
  }

  eventos(eventos) {
    let events = {}
    eventos.map(
      evento =>
        (events = {
          ...events,
          [moment(evento.fecha).format('YYYY-MM-DD')]: [{ ...evento }]
        })
    )
    return events
  }

  render() {
    const { eventos } = this.props
    const events = this.eventos(eventos)
    return (
      <Agenda
        style={styles.deviceHeight}
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
          const dia = day ? moment(day.timestamp).format('ddd') : 'undefined'
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
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <H1>:D</H1>
              <Text>Día libre, puedes aprovechar para ver una serie</Text>
            </View>
          )
        }}
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text
        }}
      />
    )
  }
}

mapDispatchToProps = ({ eventos }) => ({ eventos })

export default connect(mapDispatchToProps, { getEventos, setEventoCumplido })(
  Materia
)

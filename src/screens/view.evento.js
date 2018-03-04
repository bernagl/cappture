import React from 'react'
import { TabNavigator } from 'react-navigation'
import { TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import DateTimePicker from 'react-native-modal-datetime-picker'
import Toast from 'react-native-root-toast'
import moment from 'moment'
import { agregarEvento } from '../actions/evento_actions'
import {
  Body,
  Button,
  CheckBox,
  Content,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  ListItem,
  Picker,
  Text,
  Title
} from 'native-base'
import { tipo_eventos } from '../actions/variables'
import styles from '../styles'

class Evento extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { data } = navigation.state.params
    return {
      title: `Evento - ${
        data.materia ? data.materia : 'A Nested Details Screen'
      }`
    }
  }

  state = {
    nombre: '',
    fecha: '',
    fechaPlaceholder: '',
    notificacion: true,
    tipo: 2,
    eventos: tipo_eventos,
    showTimePicker: false
  }

  confirm = date => {
    const fecha = moment(date).format()
    const fechaPlaceholder = moment(date).format('lll')
    this.setState({ fecha, fechaPlaceholder, showTimePicker: false })
  }

  handleInput = (name, value) => {
    this.setState({ [name]: value })
  }

  handleNotificacion = value => {
    const notificacion = this.state.notificacion
    this.setState({ notificacion: !notificacion })
  }

  handleTimePicker = selected => {
    this.setState({ showTimePicker: true })
  }

  handleTipo = tipo => {
    this.setState({ tipo })
  }

  submit = () => {
    const { id } = this.props.navigation.state.params.data
    const { eventos, fecha, nombre, notificacion, tipo } = this.state
    const evento = {
      id_materia: id,
      nombre,
      fecha,
      notificacion,
      tipo: eventos[tipo],
      status: false
    }
    // console.warn(evento)
    this.props.agregarEvento(evento)
    this.props.navigation.goBack()
    Toast.show('Evento agregado')
  }

  renderEventos() {
    return this.state.eventos.map((evento, key) => (
      <Picker.Item label={evento} value={key} key={key} />
    ))
  }

  render() {
    return (
      <Content style={styles.contentBg}>
        <Form>
          <Item>
            <Label>Tipo de evento:</Label>
            <Picker
              iosHeader="Selecciona un tipo de evento"
              mode="dropdown"
              selectedValue={this.state.tipo}
              onValueChange={value => this.handleTipo(value)}
            >
              {this.renderEventos()}
            </Picker>
          </Item>
          <Item>
            <Label>Nombre:</Label>
            <Input
              value={this.state.nombre}
              onChangeText={nombre => this.handleInput('nombre', nombre)}
            />
          </Item>
          <Item>
            <Label>Fecha:</Label>
            <Input
              onFocus={() => this.setState({ showTimePicker: true })}
              value={this.state.fechaPlaceholder}
            />
          </Item>
          <ListItem>
            <CheckBox
              checked={this.state.notificacion}
              onPress={this.handleNotificacion}
            />
            <Body>
              <Text>Recibir notificación</Text>
            </Body>
          </ListItem>
          <View style={styles.btnWrap}>
            <Button block style={{ marginTop: 20 }} onPress={this.submit}>
              <Text>Agregar</Text>
            </Button>
          </View>
        </Form>
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.showTimePicker}
          onConfirm={this.confirm}
          onCancel={() => this.setState({ showTimePicker: false })}
          titleIOS="Fecha del evento"
          confirmTextIOS="Confirmar"
          cancelTextIOS="Cancelar"
        />
      </Content>
    )
  }
}

export default connect(null, { agregarEvento })(Evento)

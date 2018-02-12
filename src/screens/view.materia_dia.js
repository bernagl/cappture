import React, { Component } from 'react'
import { Alert } from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import {
  Button,
  Body,
  Container,
  Content,
  Form,
  Header,
  Item,
  Input,
  Label,
  Text
} from 'native-base'
import styles from '../styles'

export default class MateriaDia extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state

    return {
      title: params ? params.dia.nombre : 'A Nested Details Screen'
    }
  }
  state = {
    inicio: '',
    fin: '',
    salon: '',
    edificio: '',
    showTimePicker: false,
    selected: ''
  }

  submit = () => {
    const { inicio, fin, salon, edificio } = this.state
    let { dia, dias, i, update } = this.props.navigation.state.params
    dias[i] = { ...dia, inicio, fin, salon, edificio, checked: true }
    inicio && fin && salon && edificio
      ? (update.setState({ dias }), this.props.navigation.goBack())
      : Alert.alert('Error', 'Debes de ingresar todos los valores')
  }

  handleTimePicker = selected => {
    this.setState({ selected, showTimePicker: true })
  }

  confirm = date => {
    const hora = moment(date).format('LT')
    // hora > '7:32 PM' ? console.log(hora) : console.log('7:31 PM')
    this.setState({ [this.state.selected]: hora, showTimePicker: false })
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Content>
          <Form>
            <Item>
              <Label>Inicio:</Label>
              <Input
                value={this.state.inicio}
                // onChangeText={inicio => this.setState({ inicio })}
                name="inicio"
                onFocus={() => this.handleTimePicker('inicio')}
              />
            </Item>
            <Item>
              <Label>Fin:</Label>
              <Input
                value={this.state.fin}
                // onChangeText={fin => this.setState({ fin })}
                name="fin"
                onFocus={() => this.handleTimePicker('fin')}
              />
            </Item>
            <Item>
              <Label>Salón:</Label>
              <Input
                value={this.state.salon}
                onChangeText={salon => this.setState({ salon })}
                name="salon"
              />
            </Item>
            <Item>
              <Label>Edificio:</Label>
              <Input
                value={this.state.edificio}
                onChangeText={edificio => this.setState({ edificio })}
                name="edificio"
              />
            </Item>
            <Button
              block
              primary
              onPress={this.submit}
              style={[styles.my10, styles.px10]}
            >
              <Text>Guardar</Text>
            </Button>
          </Form>
        </Content>
        <DateTimePicker
          mode="time"
          isVisible={this.state.showTimePicker}
          onConfirm={this.confirm}
          onCancel={() => this.setState({ showTimePicker: false })}
          titleIOS={`Hora de ${this.state.selected}`}
          confirmTextIOS="Confirmar"
          cancelTextIOS="Cancelar"
        />
      </Container>
    )
  }
}

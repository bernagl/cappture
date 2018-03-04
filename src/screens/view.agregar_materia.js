import React from 'react'
import { connect } from 'react-redux'
import { actualizarMateria, agregarMateria } from '../actions/materia_actions'
import { Alert } from 'react-native'
import { TabNavigator } from 'react-navigation'
import {
  Body,
  Button,
  CheckBox,
  Container,
  Content,
  Form,
  H2,
  Header,
  Icon,
  Input,
  Item,
  Label,
  ListItem,
  Text,
  Title
} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid'
import styles from '../styles'

const variables = { 
  dias: [
    { nombre: 'Lunes', inicio: '', fin: '', salon: '', edificio: '', checked: false },
    { nombre: 'Martes', inicio: '', fin: '', salon: '', edificio: '', checked: false },
    { nombre: 'Miércoles', inicio: '', fin: '', salon: '', edificio: '', checked: false },
    { nombre: 'Jueves', inicio: '', fin: '', salon: '', edificio: '', checked: false },
    { nombre: 'Viernes', inicio: '', fin: '', salon: '', edificio: '', checked: false },
    { nombre: 'Sábado', inicio: '', fin: '', salon: '', edificio: '', checked: false },
    { nombre: 'Domingo', inicio: '', fin: '', salon: '', edificio: '', checked: false }
  ],
    materia: '',
    profesor: '',
    color: '#fff'
}

class AgregarMateria extends React.Component {
  constructor(props){
    super(props)
    this.state = { dias: [
      { nombre: 'Lunes', inicio: '', fin: '', salon: '', edificio: '', checked: false },
      { nombre: 'Martes', inicio: '', fin: '', salon: '', edificio: '', checked: false },
      { nombre: 'Miércoles', inicio: '', fin: '', salon: '', edificio: '', checked: false },
      { nombre: 'Jueves', inicio: '', fin: '', salon: '', edificio: '', checked: false },
      { nombre: 'Viernes', inicio: '', fin: '', salon: '', edificio: '', checked: false },
      { nombre: 'Sábado', inicio: '', fin: '', salon: '', edificio: '', checked: false },
      { nombre: 'Domingo', inicio: '', fin: '', salon: '', edificio: '', checked: false }
      ], materia: '', profesor: '', color: '#fff' }
  }

  static navigationOptions = {
    title: 'Agregar materia'
  }

  componentDidMount(){
    const { data } = this.props.navigation.state.params || false
    data && this.setState({ ...data })
  }

  agregarMateria = () => {
    const { id, dias, materia, profesor } = this.state
    let checkDias = dias.filter((dia) => dia.checked)
    checkDias.length === 0 || !materia || !profesor  ? (alert('Por favor llena los campos requeridos')) :
    id ? (this.props.actualizarMateria(this.state), 
    this.props.navigation.goBack()) : this.props.agregarMateria(this.state)
    this.setState({ dias: variables.dias , materia: '', profesor: '', color: '#fff' })
  }

  handleInput = (name, data) => {
    this.setState({ [name]: data })
  }

  handleDia = i => {
    const dias = this.state.dias
    !dias[i].checked ?
      this.props.navigation.navigate('MateriaDia', {
        dia: dias[i],
        dias,
        update: this,
        i
      }) :
    dias[i] = {...dias[i], checked: false, inicio: '', fin: '' }
    this.setState({ dias })
  }

  handleColor = () => {
      this.props.navigation.navigate('ColorPicker', { update: this })
  }

  renderDias() {
    return this.state.dias.map((dia, key) => {
      return (
        <ListItem key={key}>
          <CheckBox checked={dia.checked} onPress={() => this.handleDia(key)} />
          <Body>
            <Text>{dia.label ? dia.label : dia.nombre}</Text>
            {!!dia.inicio && <Text>{`${dia.inicio} - ${dia.fin}`}</Text>}
          </Body>
        </ListItem>
      )
    })
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'white' }}>
        <Content>
          <Form>
            <Item>
              <Label>Materia:</Label>
              <Input value={this.state.materia} onChangeText={(materia) => this.handleInput('materia' ,materia)} />
            </Item>
            <Item>
              <Label>Profesor:</Label>
              <Input value={this.state.profesor} onChangeText={(profesor) => this.handleInput('profesor' ,profesor)} />
            </Item>
            <Item>
              <Label>Color:</Label>
              <Input value={this.state.color} onFocus={this.handleColor}  
              style={{ color: this.state.color }}/>
            </Item>
            <ListItem itemDivider style={styles.mt20}>
              <Text>Días</Text>
            </ListItem>
            {this.renderDias()}
            <Button block primary onPress={this.agregarMateria} style={[styles.my10, styles.px10]}>
              <Text>Agregar otra materia</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = ({ materias }) => ({ materias })

export default connect(mapDispatchToProps, { actualizarMateria, agregarMateria })(AgregarMateria)
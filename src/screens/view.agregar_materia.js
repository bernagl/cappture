import React from 'react'
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

export default class AgregarMateria extends React.Component {
  state = {
    dias: [
      { nombre: 'Lunes', horario: '8:00 a.m. a 9:00 a.m.', checked: false },
      { nombre: 'Martes', horario: '8:00 a.m. a 9:00 a.m.', checked: false },
      { nombre: 'Miércoles', horario: '8:00 a.m. a 9:00 a.m.', checked: false },
      { nombre: 'Viernes', horario: '8:00 a.m. a 9:00 a.m.', checked: false },
      { nombre: 'Sábado', horario: '8:00 a.m. a 9:00 a.m.', checked: false },
      { nombre: 'Domingo', horario: '8:00 a.m. a 9:00 a.m.', checked: false }
    ],
    materia: '',
    profesor: ''
  }

  handleDia = i => {
    const dias = this.state.dias
    dias[i].checked = !dias[i].checked
    this.setState({ dias })
  }

  handleText = text => {

  }

  renderDias() {
    return this.state.dias.map((dia, key) => {
      return (
        <ListItem key={key}>
          <CheckBox checked={dia.checked} onPress={() => this.handleDia(key)} />
          <Body>
            <Text>{dia.nombre}</Text>
            <Text>{dia.horario}</Text>
          </Body>
        </ListItem>
      )
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Agregar Materia</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Label>Materia:</Label>
              <Input />
            </Item>
            <Item>
              <Label>Profesor:</Label>
              <Input />
            </Item>
            <ListItem itemDivider style={styles.mt20}>
              <Text>Días</Text>
            </ListItem>
            {this.renderDias()}
            <Button block primary style={[styles.my10, styles.px10]}>
              <Text>Guardar</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

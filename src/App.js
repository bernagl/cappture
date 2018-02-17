import React from 'react'
import { connect } from 'react-redux'
import { Platform } from 'react-native'
import { Container } from 'native-base'
import { AppNavigation, MateriaNavigation } from './router'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { AgregarMateria, Horario, Inicio, MateriaDia, Perfil } from './screens'

class Application extends React.Component {
  render() {
    return this.props.materias ? (
      <Container style={{ backgroundColor: 'white' }}>
        {this.props.materias.length > 0 ? (
          <AppNavigation />
        ) : (
          <MateriaNavigation />
        )}
      </Container>
    ) : (
      <Container>
        <Text>Cargando...</Text>
      </Container>
    )
  }
}

const mapDispatchToProps = ({ materias }) => ({ materias })

export default connect(mapDispatchToProps)(Application)

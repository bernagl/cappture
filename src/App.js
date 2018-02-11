import React from 'react'
import { connect } from 'react-redux'
import { Platform } from 'react-native'
import { Container } from 'native-base'
import { AppNavigation, MateriaNavigation } from './router'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { AgregarMateria, Horario, Inicio, MateriaDia, Perfil } from './screens'

class Application extends React.Component {
  render() {
    // const Navigation = StackNavigator(
    //   {
    //     Nuevo: {
    //       screen: StackNavigator({
    //         AgregarMateria: { screen: AgregarMateria },
    //         MateriaDia: { screen: MateriaDia }
    //       })
    //     },
    //     Application: {
    //       screen: TabNavigator({
    //         Inicio: { screen: Inicio },
    //         Horario: { screen: Horario },
    //         Perfil: { screen: Perfil },
    //         Nuevo: {
    //           screen: StackNavigator({
    //             AgregarMateria: { screen: AgregarMateria },
    //             MateriaDia: { screen: MateriaDia }
    //           })
    //         }
    //       })
    //     }
    //   },
    //   {
    //     initialRouteName: this.props.materias.length > 0 ? 'Inicio' : 'Nuevo'
    //   }
    // )

    return this.props.materias ? (
      <Container
      // style={{
      //   marginTop: Platform.OS === 'android' ? 24 : 0
      // }}
      >
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

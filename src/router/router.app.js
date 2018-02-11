import { StackNavigator, TabNavigator } from 'react-navigation'
import { AgregarMateria, Horario, Inicio, MateriaDia, Perfil } from '../screens'

export const AppNavigation = StackNavigator(
  {
    Application: {
      screen: TabNavigator({
        Inicio: { screen: Inicio },
        Horario: { screen: Horario },
        Perfil: { screen: Perfil }
      })
    },
    AgregarMateria: { screen: AgregarMateria },
    MateriaDia: { screen: MateriaDia }
  },
  { initialRouteName: 'Application' }
)

export const MateriaNavigation = StackNavigator({
  AgregarMateria: { screen: AgregarMateria },
  MateriaDia: { screen: MateriaDia }
})

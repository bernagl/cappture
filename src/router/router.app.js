import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import {
  AgregarMateria,
  Evento,
  Horario,
  Inicio,
  Materia,
  MateriaDia,
  Perfil
} from '../screens'

export const AppNavigation = StackNavigator(
  {
    Application: {
      screen: TabNavigator(
        {
          Inicio: { screen: Inicio },
          Horario: { screen: Horario },
          Perfil: { screen: Perfil }
        },
        {
          showIcon: true,
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          },
          animationEnabled: false,
          swipeEnabled: false
        }
      )
    },
    AgregarMateria: { screen: AgregarMateria },
    MateriaDia: { screen: MateriaDia },
    Materia: { screen: Materia },
    Evento: { screen: Evento }
  },
  { initialRouteName: 'Application' }
)

export const MateriaNavigation = StackNavigator({
  AgregarMateria: { screen: AgregarMateria },
  MateriaDia: { screen: MateriaDia }
})

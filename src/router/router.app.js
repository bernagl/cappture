import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import {
  AgregarMateria,
  Calendario,
  ColorPicker,
  DiaView,
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
          Calendario: { screen: Calendario },
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
    ColorPicker: { screen: ColorPicker },
    DiaView: { screen: DiaView },
    Evento: { screen: Evento },
    Materia: { screen: Materia },
    MateriaDia: { screen: MateriaDia }
  },
  { initialRouteName: 'Application' }
)

export const MateriaNavigation = StackNavigator({
  AgregarMateria: { screen: AgregarMateria },
  ColorPicker: { screen: ColorPicker },
  MateriaDia: { screen: MateriaDia }
})

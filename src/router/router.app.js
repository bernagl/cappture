import { TabNavigator } from 'react-navigation'
import { Horario, Inicio, Perfil } from '../screens'

export default TabNavigator({
  Inicio: { screen: Inicio },
  Horario: { screen: Horario },
  Perfil: { screen: Perfil }
})

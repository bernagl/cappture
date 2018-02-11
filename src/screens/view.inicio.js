import React from 'react'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import moment from 'moment'
import { ListView, View } from 'react-native'
import {
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Body,
  Title
} from 'native-base'
import { MateriaItem } from '../components'
import 'moment/locale/es.js'
moment.locale('es')
const hoy = moment().format('dddd')

class Inicio extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hoy: '', listViewData: [] }
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  static navigationOptions = {
    title:
      hoy === 'Sabado' ? 'Sábado' : hoy === 'Miercoles' ? 'Miércoles' : hoy,
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="menu" color={tintColor} />
    }
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({ listViewData: newData })
  }

  // renderMaterias = () => {
  //   return this.props.materias.map((materia, key) => {
  //     const materiaHoy = materia.dias.find(dia => dia.nombre === hoy)
  //     console.warn('materiahoy', materiaHoy)
  //     return (
  //       materiaHoy.checked && (
  //         <MateriaItem
  //           dia={materiaHoy}
  //           materia={materia.materia}
  //           profesor={materia.profesor}
  //         />
  //       )
  //     )
  //   })
  // }

  renderMaterias = data => {
    const materiaHoy = data.dias.find(dia => dia.nombre === hoy)
    return (
      materiaHoy.checked && (
        <MateriaItem
          dia={materiaHoy}
          materia={data.materia}
          profesor={data.profesor}
        />
      )
    )
  }

  render() {
    // console.warn(this.props.materias)
    return this.props.materias.length > 0 ? (
      <Content>
        <List
          dataSource={this.ds.cloneWithRows(this.props.materias)}
          renderRow={data => this.renderMaterias(data)}
          renderLeftHiddenRow={data => (
            <Button full onPress={() => alert(data)}>
              <Icon active name="information-circle" />
            </Button>
          )}
          renderRightHiddenRow={(data, secId, rowId, rowMap) => (
            <Button
              full
              danger
              onPress={_ => this.deleteRow(secId, rowId, rowMap)}
            >
              <Icon active name="trash" />
            </Button>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
        />
      </Content>
    ) : (
      <Content>
        <Text>Inicio</Text>
      </Content>
    )
  }
}

const MapDispatchToProps = ({ materias }) => ({ materias })

export default connect(MapDispatchToProps)(Inicio)

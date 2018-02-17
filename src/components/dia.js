import React from 'react'
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
let hoy = moment().format('dddd')

class Dia extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hoy: '', listViewData: [] }
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({ listViewData: newData })
  }

  renderMaterias = data => {
    const { dia } = this.props
    hoy = dia.nombre ? dia.nombre : hoy
    const materiaHoy = data.dias.find(dia => dia.nombre === hoy && dia.checked)
    return (
      materiaHoy && (
        <MateriaItem
          navigation={this.props.navigation}
          dia={materiaHoy}
          materia={data.materia}
          profesor={data.profesor}
          data={{ ...materiaHoy, ...data }}
        />
      )
    )
  }

  render() {
    return this.props.materias.length > 0 ? (
      <Content>
        <List
          dataSource={this.ds.cloneWithRows(this.props.materias)}
          renderRow={data => this.renderMaterias(data)}
          renderLeftHiddenRow={data => (
            <Button
              full
              onPress={() =>
                this.props.navigation.navigate('AgregarMateria', { data })
              }
            >
              <Icon active name="information-circle" />
            </Button>
          )}
          renderRightHiddenRow={(data, secId, rowId, rowMap) => (
            <Button
              full
              danger
              onPress={() => this.props.navigation.navigate('Evento', { data })}
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

export default connect(MapDispatchToProps)(Dia)

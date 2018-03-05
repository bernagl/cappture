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
import styles from '../styles'
import 'moment/locale/es.js'
moment.locale('es')
let hoy = moment().format('dddd')

class Dia extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hoy: '', listViewData: [], clases: [], materias: [] }
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  componentDidMount() {
    let { dia, materias } = this.props
    hoy = dia ? dia : hoy
    const clases = []
    let clasesObj = {}
    materias.filter(materia => {
      const { id } = materia
      return materia.dias.map(dia => {
        dia.checked &&
          dia.nombre === hoy &&
          (clases.push({
            ...materia,
            id: materia.id,
            inicio: dia.inicio,
            fin: dia.fin
          }),
          (clasesObj = {
            ...clasesObj,
            [id]: { id: materia.id, inicio: dia.inicio, fin: dia.fin }
          }))
      })
    })

    clases.sort(
      (a, b) =>
        moment(b.inicio, 'hh:mm A').diff(moment(a.inicio, 'hh:mm A')) > 0
          ? -1
          : 1
    )

    const materiasSorted = clases.filter(
      materia => clasesObj[materia.id] && materia
    )
    this.setState({ materias: materiasSorted, clases: clasesObj })
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow()
    const newData = [...this.state.listViewData]
    newData.splice(rowId, 1)
    this.setState({ listViewData: newData })
  }

  renderMateria = data => {
    return (
      <MateriaItem navigation={this.props.navigation} data={{ hoy, ...data }} />
    )
  }

  render() {
    const { navigation } = this.props
    const { clases, materias } = this.state
    console.log(materias)
    return materias.length > 0 ? (
      <Content style={styles.deviceHeight}>
        <List
          dataSource={this.ds.cloneWithRows(materias)}
          renderRow={data => this.renderMateria(data)}
          renderLeftHiddenRow={data => (
            <Button
              full
              onPress={() => navigation.navigate('AgregarMateria', { data })}
            >
              <Icon active name="information-circle" />
            </Button>
          )}
          renderRightHiddenRow={(data, secId, rowId, rowMap) => (
            <Button
              full
              danger
              onPress={() => navigation.navigate('Evento', { data })}
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

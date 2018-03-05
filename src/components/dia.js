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

  // diaNumero(dia) {
  //   switch (dia) {
  //     case 'Domingo':
  //       return 0
  //     case 'Lunes':
  //       return 1
  //     case 'Martes':
  //       return 2
  //     case 'Miercoles':
  //       return 3
  //     case 'Jueves':
  //       return 4
  //     case 'Viernes':
  //       return 5
  //     case 'Sabado':
  //       return 6
  //   }
  // }

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
          (clases.push({ id: materia.id, inicio: dia.inicio, fin: dia.fin }),
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
    const { materias } = this.props
    let materia = {}
    materias.filter(
      clase =>
        clase.id === data.id &&
        (materia = { ...clase, inicio: data.inicio, fin: data.fin })
    )
    console.log(materia)
    return (
      materia && (
        <MateriaItem
          navigation={this.props.navigation}
          dia={hoy}
          materia={materia.materia}
          profesor={materia.profesor}
          data={{ hoy, ...materia }}
        />
      )
    )
  }

  render() {
    const { navigation } = this.props
    const { clases, materias } = this.state
    console.log(this.state)
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

import React from 'react'
import { connect } from 'react-redux'
import { getMateria } from '../actions/materia_actions'
import { Dimensions, Platform, Text, View } from 'react-native'
import { Body, Content, Header, Icon, Tab, Tabs, Title } from 'native-base'
import { TareaItem } from '../components'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class Materia extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { data } = navigation.state.params
    return {
      title: data.materia ? data.materia : 'A Nested Details Screen'
    }
  }

  render() {
    return (
      <Content>
        <Tabs
          initialPage={0}
          // style={{ position: 'absolute', top: 50, right: 0, left: 0 }}
        >
          <Tab heading="Fotos" style={{ height: SCREEN_HEIGHT }}>
            <Text>Aquí van a ir las fotos</Text>
          </Tab>
          <Tab heading="Tareas" style={{ height: SCREEN_HEIGHT }}>
            <Text>Aquí van a ir las tareas</Text>
          </Tab>
        </Tabs>
      </Content>
    )
  }
}

// mapDispatchToProps = ({ materias }) => ({ materias })

// export default connect(mapDispatchToProps, { getMateria })(Materia)

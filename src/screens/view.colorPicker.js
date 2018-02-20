import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Content, Text } from 'native-base'
import { ColorPicker as CP, fromHsv } from 'react-native-color-picker'
import styles from '../styles'

export default class ColorPicker extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Selecciona color de la materia'
    }
  }
  state = { color: '' }

  submit = () => {
    const { color } = this.state
    let { update } = this.props.navigation.state.params
    color && (update.setState({ color }), this.props.navigation.goBack())
  }

  render() {
    return (
      <View style={styles.deviceHeight}>
        <CP
          onColorSelected={color => this.setState({ color })}
          onColorChange={color => this.setState({ color: fromHsv(color) })}
          style={{ flex: 1, minHeight: 400, backgroundColor: 'white' }}
        />
        <Button
          block
          primary
          onPress={this.submit}
          style={[styles.my10, styles.px10]}
        >
          <Text>Guardar</Text>
        </Button>
      </View>
    )
  }
}

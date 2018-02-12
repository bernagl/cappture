import React from 'react'
import { Body, Content, Input, Item, Label, Text } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

export default props => {
  console.warn(props)
  return (
    <Content>
      <Item>
        <Label>:</Label>
        <Input
        // value={this.state.materia}
        // onChangeText={materia => this.handleInput('materia', materia)}
        />
      </Item>
    </Content>
  )
}

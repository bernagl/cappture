import React from 'react'
import { Card, CardItem, Body, H3, Text } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

export default ({ dia, materia, navigation, profesor, data }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Materia', { data })}>
      <CardItem
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderBottomColor: '#05A5D1'
        }}
      >
        <H3 style={{ flex: 1 }}>{materia}</H3>
        <Text style={{ flex: 1 }}>{`${dia.inicio} a ${dia.fin}`}</Text>
        <Text style={{ flex: 1 }}>{profesor}</Text>
      </CardItem>
    </TouchableOpacity>
  )
}

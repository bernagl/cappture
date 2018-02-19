import React from 'react'
import { Card, CardItem, Body, H3, Text } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

export default ({ data, navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Materia', { data })}>
      <CardItem
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          backgroundColor: data.color,
          borderRadius: 0
        }}
      >
        <H3 style={{ flex: 1, color: 'white' }}>{data.materia}</H3>
        <Text style={{ flex: 1, color: 'white' }}>{`${data.inicio} a ${data.fin}`}</Text>
        <Text style={{ flex: 1, color: 'white' }}>{data.profesor}</Text>
      </CardItem>
    </TouchableOpacity>
  )
}

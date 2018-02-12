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
          borderBottomColor: '#05A5D1'
        }}
      >
        <H3 style={{ flex: 1 }}>{data.materia}</H3>
        <Text style={{ flex: 1 }}>{`${data.inicio} a ${data.fin}`}</Text>
        <Text style={{ flex: 1 }}>{data.profesor}</Text>
      </CardItem>
    </TouchableOpacity>
  )
}

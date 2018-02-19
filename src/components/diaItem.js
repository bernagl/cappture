import React from 'react'
import { Card, CardItem, Body, H3, Text } from 'native-base'
import { TouchableOpacity, View } from 'react-native'

export default ({ dia, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DiaView', { dia: dia.dia })}
    >
      <CardItem
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderBottomColor: '#05A5D1'
        }}
      >
        <H3 style={{ flex: 1 }}>{dia.original ? dia.original : dia.dia}</H3>
      </CardItem>
    </TouchableOpacity>
  )
}

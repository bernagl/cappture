import React from 'react'
import { Dimensions, View } from 'react-native'

export default Component => (
  <View style={styles}>
    <Component />
  </View>
)

const styles = {
  display: 'flex',
  height: Dimensions.get('window').height - 155
}

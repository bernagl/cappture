import { Dimensions, StyleSheet } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default StyleSheet.create({
  mt20: { marginTop: 20 },
  mb10: { marginBottom: 10 },
  mb20: { marginBottom: 20 },
  my10: { marginTop: 10, marginBottom: 10 },
  px10: { margin: 10 },
  btnWrap: { padding: 10 },
  contentBg: { backgroundColor: 'white' },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'red',
    height: 40,
    width: 40,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deviceHeight: { minHeight: SCREEN_HEIGHT - 110, backgroundColor: 'white' }
})

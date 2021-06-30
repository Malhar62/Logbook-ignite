import * as React from "react"
import { TouchableOpacity, Text, View, TextStyle, ViewStyle } from "react-native"
import { WIDTH } from "../../theme/scaling"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
type ButtonProps = {
  handleSelect
  handleCancel
  text: string
}
const view1: ViewStyle =
  { flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }
const button: ViewStyle =
  { width: WIDTH(150), height: 45, backgroundColor: '#524ae8', borderRadius: 10, justifyContent: 'center' }
const buttontxt: TextStyle =
  { color: '#fff', alignSelf: 'center', fontSize: 15 }
export function Button(props: ButtonProps) {
  // grab the props
  const {
    handleCancel, handleSelect, text
  } = props

  return (
    <View style={view1}>
      <View style={button}>
        <TouchableOpacity
          onPress={() => {
            handleSelect()
          }}
        ><Text style={buttontxt}>{text}</Text></TouchableOpacity>
      </View>
      <View style={[button, { backgroundColor: '#fff', borderColor: 'grey', borderWidth: 1 }]}>
        <TouchableOpacity
          onPress={() => handleCancel()}
        ><Text style={[buttontxt, { color: 'grey' }]}>Cancel</Text></TouchableOpacity>
      </View>
    </View>
  )
}

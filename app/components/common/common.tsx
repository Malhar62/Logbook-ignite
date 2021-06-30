import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"
import { HEIGHT } from "../../theme/scaling"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 14,
  color: color.primary,
}

export interface CommonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Common = observer(function Common(props: CommonProps) {
  const { style } = props

  return (
    <View style={{ height: HEIGHT(320), backgroundColor: '#524ae8', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../logo.png')} style={{ width: 70, height: 70, alignSelf: 'center' }} />
      <Text style={{ alignSelf: 'center', fontFamily: typography.code, fontSize: 20 }}>LOGBOOKS PRO</Text>
    </View>
  )
})

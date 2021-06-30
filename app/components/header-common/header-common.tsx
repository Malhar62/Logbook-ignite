import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Text } from "react-native"
import { observer } from "mobx-react-lite"
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HEIGHT } from "../../theme/scaling";



export interface HeaderCommonProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  title: string
  extra?: string
  onNavi
  onEdit?
  onFilter?
}

/**
 * Describe your component here
 */
const MAIN: ViewStyle = {
  width: '100%',
  alignSelf: 'center',
  height: HEIGHT(60),
  backgroundColor: '#524ae8',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}
const TXT: TextStyle =
  { fontSize: 20, color: '#fff', textAlign: 'center' }

export const HeaderCommon = observer(function HeaderCommon(props: HeaderCommonProps) {
  const { style, title, extra, onNavi, onEdit } = props

  return (
    <View style={MAIN}>
      <View style={{ position: 'absolute', left: 5 }}>
        <Ionicons name='arrow-back' onPress={() => onNavi()} size={25} color='#fff' />
      </View>
      <View>
        <Text style={TXT}>{title}</Text>
      </View>
      {extra == 'yes' && <View style={{ position: 'absolute', right: 10 }}>
        <MaterialIcons name='edit' size={20} color='#fff' onPress={() => onEdit()} />
      </View>}
      {extra == 'no' && <View style={{ position: 'absolute', right: 10 }}>
        <MaterialCommunityIcons name='filter-variant' size={25} color='#fff' onPress={() => onEdit()} />
      </View>}
    </View>
  )
})

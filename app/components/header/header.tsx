import React from "react"
import { View, ViewStyle, TextStyle, Image } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { spacing, typography } from "../../theme"
import { translate } from "../../i18n/"
import Entypo from 'react-native-vector-icons/Entypo';
import FontAswesome from 'react-native-vector-icons/FontAwesome';
import { HEIGHT, WIDTH } from "../../utils/scaling"

// static styles

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const { onLeftPress, onRightPress } = props
  return (
    <View style={{ height: HEIGHT(60), width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#524ae8' }}>
      <View style={{ justifyContent: 'center',left:10 }}>
        <Entypo name='menu' color='white' size={HEIGHT(30)} onPress={() => onLeftPress()} style={{}} />
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Image source={require('../../components/logo.png')} style={{ width: HEIGHT(40), height: WIDTH(40) }} />
        <Text style={{ fontSize: HEIGHT(25), marginLeft: 5, color: 'white', fontFamily: typography.code, alignSelf: 'center' }}>LOGBOOKS PRO</Text>
      </View>
      <View style={{ justifyContent: 'center',right:10 }}>
        <FontAswesome name='power-off' size={HEIGHT(24)} color='white' onPress={() => onRightPress()} />
      </View>
    </View>
  )
}

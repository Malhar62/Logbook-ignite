import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, ScrollView, Text } from "react-native"
import { observer } from "mobx-react-lite"
import { WIDTH } from "../../utils/scaling"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



export interface TopChatProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  gps: boolean
}

/**
 * Describe your component here
 */
const view: ViewStyle =
  { width: WIDTH(350), height: 90, flexDirection: 'row', borderRadius: 10, backgroundColor: '#fff', alignSelf: 'center' }
const view1: ViewStyle =
  { width: 60, height: 60, backgroundColor: '#faafb1', borderRadius: 30, marginTop: 10, marginLeft: 5 }
const txt: TextStyle =
  { fontSize: 18, marginLeft: 5, marginTop: 12 }
const icon: ViewStyle =
  { alignSelf: 'center', marginTop: 15 }
const extra: ViewStyle =
  { width: 60, height: 60, backgroundColor: '#adbded', borderRadius: 30, marginTop: 10, marginLeft: 5 }
export const TopChat = observer(function TopChat(props: TopChatProps) {
  const { style, gps } = props

  return (
    <View style={{ backgroundColor: '#f1f1f1', marginTop: 10 }}>
      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        elevation={5} 
        style={view}>
        <View style={view1}>
          <MaterialCommunityIcons name='police-badge-outline' size={30} color='maroon' style={icon} />
        </View>
        <Text style={txt}> Your Licence number is expiring {"\n"} in 08 days.Please renew as soon {"\n"} as possible</Text>
      </ScrollView>
      <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
        elevation={5} 
        style={[view, { marginVertical: 10 }]}>
        <View style={extra}>

          <MaterialCommunityIcons name='map-marker-path' size={30} color='blue' style={icon} />
        </View>
        <Text style={txt}>We are tracking your location,so {"\n"} Please keep your GPS turned on.</Text>
      </ScrollView>
      {gps == false && <ScrollView showsHorizontalScrollIndicator={false}
        horizontal={true}
         elevation={5}
          style={[view, { marginBottom: 10 }]}>
        <View style={view1}>

          <MaterialIcons name='location-off' color='maroon' size={30} style={icon} />
        </View>
        <Text style={txt}>Please turn On your GPS,so we {"\n"} can track your location.</Text>
      </ScrollView>}

    </View>
  )
})

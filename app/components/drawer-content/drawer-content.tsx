import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, TouchableOpacity, FlatList, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text } from "../"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { HEIGHT, WIDTH } from "../../utils/scale";
import { useStores } from "../../models";

export interface DrawerContentProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  onNavi
}
/**
 * Describe your component here
 * 
 */
const MAIN: ViewStyle = {
  width: WIDTH(110), height: HEIGHT(110), borderRadius: 55, marginTop: HEIGHT(25), marginLeft: 10
}
const IMG: ImageStyle = {
  width: WIDTH(100), height: HEIGHT(100), borderRadius: 50, marginTop: 5, marginLeft: 5
}
const VIEW: ViewStyle = {
  height: 2, width: 280, borderWidth: 0.7, marginLeft: 20, marginTop: HEIGHT(30), borderColor: 'grey'
}
const VIEW1: ViewStyle = {
  marginLeft: 20, flexDirection: 'row', marginTop: 5
}
const TXT: TextStyle = { marginLeft: 10, fontSize: 18 }
const TITLE: TextStyle = { marginTop: HEIGHT(10), fontSize: HEIGHT(30), color: 'black' }



export const DrawerContent = observer(function DrawerContent(props: DrawerContentProps) {
  const { style, onNavi } = props
  const [ind, setInd] = React.useState(0)
  const { authStore } = useStores()

  const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHS4YqFQ213jgyaYBsBY-rJYSus8M-XwxrNg&usqp=CAU'

  const userData = [
    { name: 'email-outline', text: 'shanice.berwick@gmail.com' },
    { name: 'user', text: authStore.username },
    { name: 'office-building', text: 'Guardio securities' }
  ];
  const DrawerData = [
    { name: 'view-dashboard-outline', text: 'DashBoard', path: 'maindashboard' },
    { name: 'history', text: 'Shift ON/OFF', path: 'shift' },
    { name: 'police-badge-outline', text: 'Licences', path: 'licence' },
    { name: 'clock-time-four-outline', text: 'Time log', path: 'timelog' },
    { name: 'power', text: 'Sign out', path: 'Signout' },
  ];
  return (
    <View style={{ width: WIDTH(500), height: '100%' }}>
      <View style={MAIN}>
        <Image source={{ uri: URL }}
          style={IMG} />
      </View>
      <View style={{ marginLeft: HEIGHT(20) }}>
        <Text style={TITLE}>Shanice Barwick</Text>
        <View style={{ marginTop: HEIGHT(5) }}>
          <FlatList
            data={userData}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                {index != 1 ?
                  <MaterialCommunityIcons name={item.name} size={25} color='grey' /> :
                  <AntDesign name={item.name} size={25} color='grey' />}
                <Text style={[TXT, { color: 'grey' }]}>{item.text}</Text>
              </View>
            )}
            keyExtractor={item => item.name}
          />
        </View>
      </View>
      <View style={VIEW}></View>

      <View style={{ marginTop: HEIGHT(20) }}>
        <FlatList
          data={DrawerData}
          renderItem={({ item, index }) => (
            <View style={{
              marginTop: HEIGHT(10), height: HEIGHT(40), width: WIDTH(340),
              backgroundColor: index == ind ? '#d3e6e4' : '#fff',
              borderLeftWidth: index == ind ? 5 : 1,
              borderLeftColor: index == ind && 'navy'
            }}>
              <TouchableOpacity onPress={() => { onNavi(item.path) }}>
                <View style={VIEW1}>
                  <MaterialCommunityIcons name={item.name} size={25} color={index == ind ? 'blue' : 'black'} />
                  <Text style={[TXT, { color: index == ind ? 'blue' : 'black' }]}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  )
})

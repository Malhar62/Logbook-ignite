import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, PermissionsAndroid, FlatList, BackHandler, Alert, } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Header, TopChat } from "../../components";
import { DrawerActions } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { MenuData } from "./MenuData";
import { WIDTH } from "../../utils/scaling";
import { useStores } from "../../models"


export const MaindashboardScreen = observer(function MaindashboardScreen() {
  const navigation = useNavigation();
  const { authStore } = useStores()
  React.useEffect(() => {
    if (authStore.login != true) {
      navigation.navigate('authStack');
    } else {
      console.log('user is logined!')
    }
  }, [])
  React.useEffect(() => {
    checking_location()
  })
  async function checking_location() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,

      )
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {

        console.log("location active");
        setGps(true)
      }
      else {
        console.log("location de active");
        setGps(false)
      }
    } catch (err) {
      console.warn(err)
      setGps(false)
    }
  }
  const [ind, setInd] = useState(0)
  const [gps, setGps] = useState(false)

  return (
    <View>
      <Header onRightPress={async () => {
        authStore.logout();
        navigation.navigate('authStack')
        // await saveString('ISLOGIN','false');
      }} onLeftPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      <View style={styles.main}>
        <View elevation={5} style={styles.main4}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={MenuData}
            renderItem={({ item, index }) => (
              <View style={[styles.first, {
                borderTopRightRadius: index == 0 ? 10 : 0,
                borderTopLeftRadius: index == 0 ? 10 : 0,
                borderBottomRightRadius: index == 3 ? 10 : 0,
                borderBottomLeftRadius: index == 3 ? 10 : 0
              }]}>
                <View style={[styles.main1, { justifyContent: 'space-between', borderBottomWidth: ind == index ? 1 : 0, borderBottomColor: 'grey' }]}>
                  <View style={{ width: WIDTH(350), flexDirection: 'row', marginTop: 7 }}>
                    <Text style={styles.txt2}>{item.title}</Text>
                    <AntDesign name={index == ind ? 'down' : 'up'} size={20} style={styles.icon}
                      onPress={() => {
                        setInd(index)
                      }} />
                  </View>
                </View>
                {index === ind && <FlatList
                  data={item.DropMenu}
                  renderItem={({ item, index }) => (
                    <View style={[styles.main3, { borderBottomWidth: index != 4 ? 1 : 0 }]}>
                      <Text style={{ marginTop: 5, fontSize: 18, marginBottom: 7 }}>{item.name}</Text>
                      <View style={styles.view}>
                        <AntDesign name='mail' size={25} color='grey' />
                        <Text style={styles.txt1}>{item.mail}</Text>
                      </View>
                      <View style={styles.view}>
                        <Ionicons name='call-outline' size={25} color='grey' />
                        <Text style={styles.txt1}>{item.call}</Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.name}
                />}
              </View>
            )}
            keyExtractor={item => item.title}
            ListHeaderComponent={<TopChat gps={gps} />}
          /></View>
      </View>
    </View>
  )
})

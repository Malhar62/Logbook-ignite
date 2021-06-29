import React from "react"
import { observer } from "mobx-react-lite"
import { View, Text, FlatList, TouchableOpacity } from "react-native"
import { HeaderCommon } from "../../components"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useStores } from "../../models"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./styles"


export const CurrentShiftScreen = observer(function CurrentShiftScreen() {
  // Pull in one of our MST stores
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  var hours = new Date().getHours();
  var min = new Date().getMinutes();
  var sec = new Date().getSeconds();
  const route: any = useRoute();
  const { logStore } = useStores();
  let Array = [
    { name: 'user', title: 'Username', text: 'Shanice Barwick' },//
    { name: 'email-outline', title: 'Email Address', text: 'Shanice.berwick@baxter.com' },//
    { name: 'police-badge-outline', title: 'Licence', text: 'RHGJS65S8' },//
    { name: 'office-building', title: 'Main Company', text: logStore.companies },
    { name: 'location-pin', title: 'Job Site', text: logStore.jobs },//
    { name: 'date-range', title: 'Date', text: (route.params.date ? route.params.date : date + '-' + month + '-' + year) },
    { name: 'access-time', title: 'Time', text: (route.params.time ? route.params.time : hours + ':' + min + ':' + sec) },
  ]
  // Pull in navigation via hook
  const navigation = useNavigation();
  const endshift = () => {

    let obj = {
      name: 'Shance barwick',
      Licence: 'RVHJD8CV8',
      job: logStore.jobs,
      company: logStore.companies,
      category: logStore.categories,
      task: logStore.tasks,
      description: logStore.descriptions,
      startDate: route.params.date ? route.params.date : date + '-' + month + '-' + year,
      endDate: date + '-' + month + '-' + year,
      startTime: route.params.time ? route.params.time : hours + ':' + min + ':' + sec,
      endTime: hours + ':' + min + ':' + sec,
    }
    console.log('cat' + obj.category + ' task: ' + obj.task)
    logStore.addLog(obj);
    navigation.navigate('maindashboard')
  }
  return (
    <View>
      <HeaderCommon onNavi={() => {
        if (route.params) {
          navigation.navigate('StartShift')
          console.log(route.params)
        } else {
          navigation.navigate('timelog', { screen: 'addlog' })
        }
      }} title='CurrentShift' />
      <View elevation={5} style={styles.main}>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={Array}
          renderItem={({ item, index }) => (
            <View style={{ marginTop: 10, flexDirection: 'row', marginHorizontal: 20, borderBottomWidth: 1, borderBottomColor: '#bcccb6' }}>
              <View>
                {index == 0 && <AntDesign name={item.name} size={25} style={styles.icon} />}
                {index > 0 && index < 4 && <MaterialCommunityIcons name={item.name} size={25} style={styles.icon} />}
                {index > 3 && <MaterialIcons name={item.name} size={25} style={styles.icon} />}
              </View>
              <View style={{ marginLeft: 10, marginBottom: 10 }}>
                <Text style={styles.txt}>{item.title}</Text>
                <Text style={{ marginVertical: 5 }}>{item.text}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.name}
        />
        <View style={styles.addbutton}>
          <TouchableOpacity onPress={() => {
            logStore.onaddfromshift()
            navigation.navigate('timelog', { screen: 'addlog' })
          }}>
            <View style={styles.addbutton1}>
              <MaterialIcons name='add-circle-outline' size={25} color='grey' />
              <Text style={styles.addbuttontxt}>Add Time Log</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => endshift()} >
            <Text style={styles.txt2}>End Shift</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
})

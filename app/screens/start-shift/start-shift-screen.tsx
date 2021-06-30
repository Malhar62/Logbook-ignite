import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import { HeaderCommon } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles'
import { HEIGHT } from "../../theme/scaling"

export const StartShiftScreen = observer(function StartShiftScreen() {
  // Pull in one of our MST stores
  const { logStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [date, setDate] = useState('');
  const [time, setTime] = useState('')
  React.useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    setDate(date + '-' + month + '-' + year)
    setTime(hours + ':' + min + ':' + sec);
  }, [])
  return (
    <View>
      <HeaderCommon onNavi={() => navigation.navigate('maindashboard')} title='StartShift' />
      <View elevation={5} style={styles.main}>
        <ScrollView
          showsVerticalScrollIndicator={false}>

          <View style={styles.view1}>
            <Text>Email Address</Text>
            <Text style={styles.txt}>Shanice Berwick</Text>
          </View>
          <View style={styles.view1}>
            <Text>Licence Number</Text>
            <Text style={styles.txt}>RJ892VC6V</Text>
          </View>

          <View style={styles.view1}>
            <Text>Main Company</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Company')
            }} >
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.txt}>{logStore.companies}</Text>
                <View style={styles.iconview}>
                  <AntDesign name={'down'} size={20} style={styles.icon} />
                </View>
              </View>
            </TouchableOpacity>
          </View>


          <View style={styles.view1}>
            <Text>Job location</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate('Job')
            }} >
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.txt}>{logStore.jobs}</Text>
                <View style={styles.iconview}>
                  <AntDesign name={'down'} size={20} style={styles.icon} />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.view1}>
            <Text>Date</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txt}>{date}</Text>
              <View style={styles.iconview}>
                <MaterialIcons name={'date-range'} size={20} style={styles.icon} />
              </View>
            </View>
          </View>


          <View style={styles.view1}>
            <Text>Time</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txt}>{time}</Text>
              <View style={styles.iconview}>
                <MaterialIcons name={'access-time'} size={20} style={styles.icon} />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('CurrentShift', { date, time })} >
            <Text style={styles.txt2}>Start Shift</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
})

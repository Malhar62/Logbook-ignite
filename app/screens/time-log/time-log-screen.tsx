import React from "react"
import { observer } from "mobx-react-lite"
import { View, FlatList, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderCommon } from "../../components"
import { styles } from "./styles"
import { HEIGHT } from "../../utils/scale"

export const TimeLogScreen = observer(function TimeLogScreen() {

  // Pull in one of our MST stores
  const { logStore } = useStores()
  // Pull in navigation via hook
  const navigation = useNavigation()
  const [list, setList] = React.useState(logStore.logs.toJSON())
  React.useEffect(() => {
    navigation.addListener('focus', () => {
      setList(logStore.logs.toJSON())
    })
  }, [navigation]);

  return (
    <View>
      <HeaderCommon onNavi={() => navigation.navigate('maindashboard')} title='TIme Logs' extra='no' onEdit={() => { }} />
      <View elevation={5} style={styles.main}>
        <View style={styles.addbutton}>
          <TouchableOpacity onPress={() => {
            logStore.onAddLog()
            navigation.navigate('addlog')
          }}>
            <View style={styles.addbutton1}>
              <MaterialIcons name='add-circle-outline' size={25} color='grey' />
              <Text style={styles.addbuttontxt}>Add Time Log</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: HEIGHT(580) }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={logStore.logs.toJSON()}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => {
                let arrobj = {
                  name: item.name,
                  Licence: item.Licence,
                  job: item.job,
                  company: item.company,
                  category: item.category,
                  task: item.task,
                  description: item.description,
                  startDate: item.startDate,
                  endDate: item.endDate,
                  startTime: item.startTime,
                  endTime: item.endTime,
                  image: item.image,
                  index
                }
                navigation.navigate('aboutlog', { user: arrobj })
              }}>
                <View style={styles.view}>
                  <View>
                    <Text style={styles.txt}>{item.Licence}</Text>
                    <Text style={styles.txt}>{item.startDate} {item.startTime}</Text>
                    <Text style={styles.txt}>{item.endDate} {item.endTime}</Text>
                  </View>
                  <View style={styles.icon}>
                    <AntDesign name='arrowright' size={20} color='grey' />
                  </View>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={index => index.toString()}
          />
        </View>
      </View>
    </View>
  )
})

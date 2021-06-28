import React from "react"
import { observer } from "mobx-react-lite"
import { View, FlatList, Text } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native"
import { HeaderCommon } from "../../components"
import { styles } from "./styles"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { AboutFooter } from "../../components/about-footer/about-footer"
import { useStores } from "../../models"
import { toJS } from "mobx"

export const AboutLogScreen = observer(function AboutLogScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const route = useRoute();
  const { logStore } = useStores();
  const shorted: any = toJS(route.params.user)
  console.log('-------------about------------------')
  console.log(shorted)
  const [list, setList] = React.useState(toJS(shorted.image))
  /** React.useEffect(() => {
     navigation.addListener('focus', () => {
       if (shorted.image.length > 1) {
         if (shorted.image[0].link == URL) {
           for (var i = 0; i < shorted.image.length; i++) {
             empty[i] = shorted.image[i + 1]
           }
           empty.splice(-1, 1)
           console.log(empty)
           setList(empty)
           console.log(empty)
         } else {
           setList([])
           console.log('empty')
         }
       }
     })
   }, [navigation]); */


  let Array = [
    { icon: 'user', title: 'Name', text: shorted.name },//ant0
    { icon: 'police-badge-outline', title: 'Licence', text: shorted.Licence },//mater coom1
    { icon: 'timetable', title: 'Shift Startdate/Time', text: shorted.startDate + ' ' + shorted.startTime },//2
    { icon: 'timetable', title: 'Shift EndDate/Time', text: shorted.endDate + ' ' + shorted.endTime },//3
    { icon: 'location-pin', title: 'Job', text: shorted.job },//mater 4
    { icon: 'office-building', title: 'Company', text: shorted.company },//mat com5
    { icon: 'shape', title: 'Categary', text: shorted.category },//m com6
    { icon: 'clipboard-list-outline', title: 'Tasks', text: shorted.task },//m com7
    { icon: 'description', title: 'Description', text: shorted.description },//m8
  ];
  return (
    <View>
      <HeaderCommon onNavi={() => navigation.goBack()} title='About Log' extra='yes'
        onEdit={() => {
          logStore.setForEdit(shorted)
          let obj = { shorted, index: route.params.user.index }
          navigation.navigate('addlog', { user: obj })
        }} />
      <View elevation={5} style={styles.main}>
        <FlatList
          data={Array}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.view}>
              <View style={{ marginTop: 10 }}>
                {index == 0 && <AntDesign name={item.icon} size={25} />}
                {(index == 4 || index == 8) && <MaterialIcons name={item.icon} size={25} />}

                {index != 0 && index != 4 && index != 8 && <MaterialCommunityIcons name={item.icon}
                  color={index == 3 ? 'white' : 'black'}
                  size={25} />}
              </View>
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 15, color: 'grey' }}>{item.title}</Text>
                <Text style={{ fontSize: 18 }}>{item.text}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.title}
          ListFooterComponent={<AboutFooter list={list} />}
        />
      </View>
    </View>
  )
})

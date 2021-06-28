import React from "react"
import { observer } from "mobx-react-lite"
import { View, Text, FlatList, Alert } from "react-native"
import { Button, HeaderCommon } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { styles } from './styles'
import { RadioButton } from 'react-native-paper';

export const SelectJobScreen = observer(function SelectJobScreen() {
  // Pull in one of our MST stores
  const { logStore } = useStores()
  const [ind, setInd] = React.useState(null)
  let Array = [
    { title: 'Baxter International', text: '34 Sullivan road,StrathfieldSaye,VIC 3551', flag: false },
    { title: 'Hershey', text: '18 DavidSon St.Church', flag: false },
    { title: 'Rockwell Automation', text: '36 Wanilla Road,Seaford', flag: false },
    { title: 'TreeHouse Foods', text: '22 Golf Link Roads', flag: false },
    { title: 'InterPublic Group', text: '247 grand pele Road,NY', flag: false },
  ];

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <View>
      <HeaderCommon onNavi={() => navigation.goBack()} title='Select Job location' extra='no' onEdit={() => { }} />
      <View elevation={5} style={styles.main}>
        <FlatList
          data={Array}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={[styles.view,
            {
              borderBottomWidth: 0,
              borderBottomColor: '#c7ccd4'
            }]}>
              <View style={styles.extra}>
                <Text style={styles.txt1}>{item.title}</Text>
                <Text style={styles.txt2}>{item.text}</Text>
              </View>
              <View style={styles.radio}>
                <RadioButton
                  value={item.title}
                  color='blue'
                  status={index == ind ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setInd(index)
                  }}
                />
              </View>
            </View>
          )}
          keyExtractor={item => item.title}
        />
        <View>
          <Button  text='Select'
          handleSelect={() => {
            if (ind !== null) {
              logStore.setJob(Array[ind].title)
              navigation.goBack()
            } else {
              Alert.alert('Select a Company')
            }
          }}
            handleCancel={() => navigation.goBack()}
          />
        </View>
        <View style={{ height: 20 }}></View>
      </View>
    </View>
  )
})

import React from "react"
import { observer } from "mobx-react-lite"
import { View, Text, FlatList, Alert } from "react-native"
import { Button, HeaderCommon } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { RadioButton } from 'react-native-paper';
import { styles } from './styles'
export const SelectCompanyScreen = observer(function SelectCompanyScreen() {
  // Pull in one of our MST stores
  const { logStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [ind, setInd] = React.useState(null);
  let Array = [
    { title: 'Allied Universal', text: '42 Mortimer St.Wingham', flag: false },
    { title: 'Monitronics', text: '18 DavidSon St.Church', flag: false },
    { title: 'Guardio Securities', text: '4 Emarald Drv.Southside', flag: false },
    { title: 'Pinkeron Security', text: '22 Golf Link Roads', flag: false },
  ];

  return (
    <View>
      <HeaderCommon onNavi={() => navigation.goBack()} title='Select Main Company'  />
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
          <Button text='Select'
            handleSelect={() => {
              if (ind !== null) {
                logStore.setCompany(Array[ind].title)
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

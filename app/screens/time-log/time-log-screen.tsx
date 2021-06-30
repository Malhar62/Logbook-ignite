import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, FlatList, Text, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Filter, HeaderCommon } from "../../components"
import { styles } from "./styles"
import { HEIGHT } from "../../utils/scaling"
import { Alert } from "react-native"
export const TimeLogScreen = observer(function TimeLogScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [number, setNumber] = useState('')
  const [startdate, setStartdate] = useState('');
  const [enddate, setEnddate] = useState('');
  const [extra, setExtra] = useState()
  const [fill, setFill] = useState(false)
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date.getDate(), '-', date.getMonth() + 1, '-', date.getFullYear());
    var name = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
    setExtra(date)
    if (number == 'first') {
      setStartdate(name)
    } else {
      setEnddate(name)
    }
    hideDatePicker();
  };
  const { logStore } = useStores()
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const Setup = (data) => {
    setNumber(data);
    showDatePicker();
    console.log('here')
  }
  const filtering = () => {
    if(startdate!='' && enddate!==''){
    logStore.filterLog(startdate, enddate)
    setStartdate('')
    setEnddate('')
    toggleModal()
    setFill(true)
    }else{
      Alert.alert('Enter Dates!')
    }
  }
  const handleCancel = () => {
    setStartdate('')
    setEnddate('')
    hideDatePicker()
    setModalVisible(false)
  }
  return (
    <View>
      <HeaderCommon onNavi={() => {
        if (fill == true) {
          setFill(false)
        } else {
          navigation.navigate('maindashboard')
        }
      }} title='Time Logs' extra='no' onEdit={() => {
        setStartdate('')
        setEnddate('')
        toggleModal()
      }} />
      <View elevation={5} style={styles.main}>
        <View style={styles.addbutton}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('addlog')
          }}>
            <View style={styles.addbutton1}>
              <MaterialIcons name='add-circle-outline' size={25} color='grey' />
              <Text style={styles.addbuttontxt}>Add Time Log</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ height: HEIGHT(580) }}>
          {fill && logStore.filterlogs.length == 0 && <Text style={{ alignSelf: 'center', fontSize: 20, textAlignVertical: 'center' }}>No Logs Found !</Text>}
          <FlatList
            showsVerticalScrollIndicator={false}
            data={fill ? logStore.filterlogs.toJSON() : logStore.logs.toJSON()}
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
        <Filter
          modalVisible={modalVisible}
          isDatePickerVisible={isDatePickerVisible}
          handleCancel={() => handleCancel()}
          handleConfirm={(date) => handleConfirm(date)}
          Setup={(data) => Setup(data)}
          filtering={() => filtering()}
          startdate={startdate}
          extra={extra}
          enddate={enddate}
          hideDatePicker={() => hideDatePicker()}
        />
      </View>
    </View>
  )
})

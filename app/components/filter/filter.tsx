import React, { useState } from "react"
import { StyleProp, TextStyle, View, ViewStyle, Text, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { styles } from '../../screens/time-log/styles'
import { HEIGHT, WIDTH } from "../../utils/scaling";


const MODALVIEW: ViewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

const MODALSIZE: ViewStyle = { width: WIDTH(300), height: HEIGHT(250), backgroundColor: '#fff', borderRadius: 10 }

const TITLE: TextStyle = { fontSize: 20, fontWeight: 'bold', marginLeft: 10 }

const DATETEXT: TextStyle = { marginTop: 18, alignSelf: 'center', fontSize: 18 }

const ICON: ViewStyle = { position: 'absolute', right: 0 }

const BUTTON: ViewStyle = { flexDirection: 'row', justifyContent: 'space-between', bottom: 5, marginHorizontal: 0, position: 'absolute', alignSelf: 'center' }

const SELECTDATE: ViewStyle = { width: WIDTH(250), height: 30, borderBottomWidth: 1, alignSelf: 'center' }
export interface FilterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  handleCancel
  handleConfirm
  hideDatePicker
  modalVisible
  isDatePickerVisible
  Setup
  startdate
  enddate
  filtering
  extra
}

/**
 * Describe your component here
 */
export const Filter = observer(function Filter(props: FilterProps) {
  const { handleCancel, handleConfirm, hideDatePicker, filtering, modalVisible, startdate, enddate, isDatePickerVisible, Setup, extra } = props
  // Pull in one of our MST stores
  const [min, setMin] = useState('2020-06-16T06:52:00.715Z')
  return (
    <Modal isVisible={modalVisible}>
      <View style={MODALVIEW}>
        <View elevation={5} style={MODALSIZE}>
          <View>
            <Text style={TITLE}>FILTER</Text>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            // minimumDate={startdate != '' ? extra : min}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />

          <Text style={DATETEXT}>START DATE</Text>
          <View style={SELECTDATE}>
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>{startdate}</Text>
            <MaterialIcons onPress={() => Setup('first')} name={'date-range'} size={25} style={ICON} />
          </View>
          <Text style={DATETEXT}>END DATE</Text>
          <View style={SELECTDATE}>
            <Text style={{ alignSelf: 'center', fontSize: 18 }}>{enddate}</Text>
            <MaterialIcons onPress={() => Setup('second')} name={'date-range'} size={25} style={ICON} />
          </View>
          <View style={BUTTON}>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => {
                filtering()
              }} >
                <Text style={styles.txt2}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.button, { marginLeft: WIDTH(10), backgroundColor: '#fff', borderWidth: 1 }]}>
              <TouchableOpacity onPress={() => {
                handleCancel()
              }} >
                <Text style={[styles.txt2, { color: 'black' }]}>Cancel</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    </Modal>
  )
})

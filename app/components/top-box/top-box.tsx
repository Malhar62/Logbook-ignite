import React, { useState } from "react"
import { StyleProp, TextStyle, View, ViewStyle, Keyboard, TouchableWithoutFeedback, TextInput, FlatList, Text, TouchableOpacity } from "react-native"
import { observer } from "mobx-react-lite"
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

import { useStores } from "../../models";
export interface TopBoxProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}
const view1: ViewStyle = { flexDirection: 'row', marginHorizontal: 8, borderBottomColor: 'grey', borderBottomWidth: 1, height: 30 }
const view2: ViewStyle =
  { marginHorizontal: 7, marginTop: 5, borderLeftWidth: 2 }
const txt: TextStyle =
  { fontSize: 15, marginLeft: 5, color: 'grey' }
const inside: ViewStyle =
  { marginHorizontal: 7, marginTop: 5, borderLeftWidth: 2 }
const icon: ViewStyle =
  { position: 'absolute', right: 0 }
/**
 * Describe your component here
 */
export const TopBox = observer(function TopBox(props: TopBoxProps) {
  const { style } = props
  const { logStore } = useStores();
  const [input1, setInput1] = React.useState(logStore.categories)
  const [input2, setInput2] = React.useState(logStore.tasks)
  const [remember, setRemember] = useState(false)
  const [input3, setInput3] = useState(logStore.descriptions)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 7 }}>Baxter International</Text>
        <View style={{ marginTop: 30 }}>
          <TextInput
            placeholder='Category'
            value={input1}
            onChangeText={data => { setInput1(data);logStore.setCategory(data) }}
            style={{ fontSize: 15, borderBottomWidth: 1, marginHorizontal: 20 }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
            placeholder='Task'
            value={input2}
            onChangeText={text => { setInput2(text),logStore.setTask(text) }}
            style={{ fontSize: 15, borderBottomWidth: 1, marginHorizontal: 20 }}
          />
        </View>
        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
          <Text style={txt}>Description</Text>
          <View style={{ height: 120, borderWidth: 0 }} >
            <TextInput
              placeholder='enter Description'
              value={input3}
              onChangeText={text => { setInput3(text),logStore.setDescription(text) }}
              multiline
              numberOfLines={4}
              onSubmitEditing={Keyboard.dismiss}
              style={{ fontSize: 15 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <CheckBox
            disabled={false}
            value={remember}
            onValueChange={(newValue) => {
              setRemember(newValue);
            }}
          />
          <Text style={{ marginTop: 5, color: "black" }}>Should show on top? </Text>
        </View>
        <View style={{ marginLeft: 8, marginTop: 10 }}>
          <Text style={{ fontSize: 20 }}>Add Files</Text>
          <Text style={{ fontSize: 18, color: 'grey' }}>Audio,Image or Files upto 10 MB only</Text>
        </View>

      </View>
    </TouchableWithoutFeedback>

  )
})

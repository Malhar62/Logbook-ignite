import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, Image, FlatList, Text, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"

const TXT: TextStyle = {
  fontSize: 20, borderBottomWidth: 1, borderBottomColor: 'grey'
}
const VIEW: ViewStyle = { marginTop: 10, flexDirection: 'row', width: 80, height: 80 }
const IMG: ImageStyle = { width: 75, height: 75, borderWidth: 1, borderRadius: 10 }
const TEXT: TextStyle = { color: 'grey', fontSize: 15, marginTop: 5 }
export interface AboutFooterProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  list: any
}

/**
 * Describe your component here
 */
export const AboutFooter = observer(function AboutFooter(props: AboutFooterProps) {
  const { style, list } = props
  const URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-j5PJRX4f6Ykaa2SrlVbJeiqGk0cRAzfUQ&usqp=CAU';
  var fake = [];
  if (list[0].link == URL) {
    for (var i = 0; i < list.length - 1; i++) {
      fake[i] = list[i + 1]
    }
  }
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={TXT}>Uploaded Files</Text>
      {fake.length > 0 ? <FlatList
        numColumns={4}
        showsVerticalScrollIndicator={false}
        key={'#'}
        data={fake}
        renderItem={({ item, index }) => (
          <View style={VIEW}>
            <Image source={{ uri: item.link }} style={IMG} />
          </View>
        )}
        keyExtractor={index => index.toString()}
      /> : <Text style={TEXT}>No Files Uploaded</Text>
      }
      <View style={{ height: 10 }}></View>
    </View>
  )
})

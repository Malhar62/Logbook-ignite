import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, Alert } from "react-native"
import { Button, HeaderCommon } from "../../components"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useStores } from "../../models"
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from "./styles"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { TopBox } from "../../components/top-box/top-box"

export const AddLogScreen = observer(function AddLogScreen() {
  const navigation = useNavigation()
  const route = useRoute()
  const { logStore } = useStores()
  const [name, setName] = useState('Add')
  const [list, setList] = React.useState(logStore.images.toJSON())
  const [ind, setInd] = React.useState(0)

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      if (route.params) {
        setName('Edit')
        setInd(route.params.user.index)
      }
    })
  }, [navigation]);
  const selectFile = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.assets.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response.assets[0].uri));
        imgadding(response.assets[0].uri)
      }
    });
  }
  function imgadding(data) {
    logStore.addImage({ link: data })
    setList(logStore.images.toJSON())
  }
  return (
    <SafeAreaView>
      <HeaderCommon
        onNavi={() => navigation.goBack()}
        title={name == 'Add' ? 'Add Time log' : 'Edit Time Log'}
/>
      <View elevation={5} style={styles.main}>
        <FlatList
          numColumns={4}
          showsVerticalScrollIndicator={false}
          key={'#'}
          data={logStore.images.toJSON()}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              if (index == 0) {
                selectFile()
              }
            }}>
              <View style={styles.img1}>
                <Image source={{ uri: item.link }} style={styles.imgview} />
                {index != 0 &&
                  <Entypo
                    onPress={() => {
                      logStore.deleteImage(index)
                      //setList(logStore.images.toJSON())
                    }}
                    name='circle-with-cross' color='#e62e46' size={25} style={{ position: 'absolute', backgroundColor: 'transparent', right: 0, top: 0 }} />}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={index => index.toString()}
          ListHeaderComponent={<TopBox />}
        />
        <View style={{ bottom: 15 }}>
          <Button text={name} handleCancel={() => navigation.goBack()} handleSelect={() => {
            if (name == 'Add') {
              navigation.navigate('shift', { screen: 'CurrentShift' })
            } else {
              let obj = {
                name: 'Shanice barwick',
                Licence: 'HHV62J28C',
                job: logStore.jobs,
                company: logStore.companies,
                category: logStore.categories,
                task: logStore.tasks,
                description: logStore.descriptions,
                startDate: route.params.user.shorted.startDate,
                endDate: route.params.user.shorted.endDate,
                startTime: route.params.user.shorted.startTime,
                endTime: route.params.user.shorted.endTime,
                ind
              }
              logStore.editLog(obj)
              navigation.navigate('timelogscreen');
            }
            setTimeout(() => {
              setName('Add')
            })
          }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
})

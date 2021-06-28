import React,{useState} from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity,Text,TextInput,SafeAreaView,View } from "react-native"
import { HeaderCommon } from "../../components"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useStores } from "../../models"
import { styles } from "./styles"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const UpdateLicenceScreen = observer(function UpdateLicenceScreen() {
  // Pull in one of our MST stores
  const { licenceStore } = useStores()
  const route=useRoute()
  // Pull in navigation via hook
 const navigation = useNavigation()
 const [input1, setInput1] = useState(route.params.obj.number1)
    const [input2, setInput2] = useState(route.params.obj.state1)
    const [input3, setInput3] = useState(route.params.obj.Country1)
    const [input4, setInput4] = useState(route.params.obj.exp1)
  return (
    <SafeAreaView>
            <HeaderCommon extra='' onEdit={()=>{}}
            onNavi={() => navigation.goBack()} title='Update Licence Information'  />
            <View elevation={5} style={styles.main}>
                <View style={styles.view}>
                    <Text style={styles.txt}>Licence Number</Text>
                    <TextInput
                        value={input1}
                        onChangeText={text => setInput1(text)}
                        style={styles.txtip}
                    />
                </View>

                <View style={styles.view}>
                    <Text style={styles.txt}>Expiry Date</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontSize: 15 }}>{route.params.obj.exp1}</Text>
                        <MaterialIcons name='date-range' size={24} style={styles.icon} />
                    </View>
                </View>

                <View style={styles.view}>
                    <Text style={styles.txt}>State</Text>
                    <TextInput
                        value={input2}
                        onChangeText={text => setInput2(text)}
                        style={styles.txtip}
                    />
                </View>

                <View style={styles.view}>
                    <Text style={styles.txt}>Country</Text>
                    <TextInput
                        value={input3}
                        onChangeText={text => setInput3(text)}
                        style={styles.txtip}
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
                        let newObj = {
                            number: input1,
                            exp: input4,
                            state: input2,
                            Country: input3,
                            index: route.params.obj.index
                        }
                        licenceStore.updateLicence(newObj);
                        navigation.goBack();
                    }} >
                        <Text style={styles.txt2}>Save Licence Information</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
  )
})

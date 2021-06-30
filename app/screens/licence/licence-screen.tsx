import React from "react"
import { observer } from "mobx-react-lite"
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import { HeaderCommon } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { styles } from "./styles"
import AntDesign from 'react-native-vector-icons/AntDesign'



export const LicenceScreen = observer(function LicenceScreen() {
    // Pull in one of our MST stores
    const { licenceStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    const [list, setList] = React.useState(licenceStore.licences.toJSON())
    React.useEffect(() => {
        navigation.addListener("focus", () => setList(licenceStore.licences.toJSON()))
    }, [navigation]);

    return (
        <SafeAreaView>
            <HeaderCommon
                onNavi={() => navigation.goBack()}
                title='Licences'
            />
            <View elevation={5} style={styles.main}>
                <FlatList
                    data={licenceStore.licences.toJSON()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => {
                            let obj = { index, number1: item.number, exp1: item.exp, state1: item.state, Country1: item.Country };
                            navigation.navigate('licenceupdate', { obj })
                        }}>
                            <View style={styles.view}>
                                <View>
                                    <Text style={[styles.txt, { color: 'black' }]}>{item.number}</Text>
                                    <Text style={styles.txt}>expires on : {item.exp}</Text>
                                    <Text style={styles.txt}>registered at : {item.state},{item.Country}</Text>
                                </View>
                                <View style={styles.icon}>
                                    <AntDesign name='arrowright' size={20} color='grey' />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.exp}
                />
            </View>
        </SafeAreaView>
    )
})

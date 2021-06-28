import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { View, TextInput, KeyboardAvoidingView, Keyboard, Text, Alert, TouchableOpacity } from "react-native"
import { Common } from "../../components"
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import CheckBox from '@react-native-community/checkbox';
import { useStores } from "../../models"
import { styles } from './styles'
import { loadString, remove, saveString } from "../../utils/storage"


export const LoginScreen = observer(function LoginScreen() {
  const navigation = useNavigation()
  const { authStore } = useStores()
  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");
  React.useEffect(() => {
    Initialcheck()
  }, [])
  const Initialcheck = async () => {
    try {
      const username = await loadString('NAME');
      const Pass = await loadString('PASSWORD');

      if (username !== null && Pass !== null) {
        // We have username!!
        setName(username);
        setPass(Pass);
        setRemember(username ? true : false);
      }
    } catch (error) {
      console.log('not remembered');
    }
  }
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [flag, setFlag] = useState(true);
  const [remember, setRemember] = useState(false)

  const SignIn = async () => {
    if (name == '') {
      Alert.alert('enter valid name')
    } else {
      if (pass == '') {
        Alert.alert('enter valid Password')
      }
      else {
        //await saveString('ISLOGIN','true');
        authStore.setUser(name, pass);
        navigation.reset({
          index: 0,
          routes: [{ name: 'mainStack' }]
        });
        setName('');
        setPass('');
      }
    }
  }

  const remeberUser = async () => {
    await saveString('NAME', name);
    await saveString('PASSWORD', pass);
    console.log('up')
  }
  const forgotUser = async () => {
    await remove('NAME');
    await remove('PASSWORD');
    console.log('down')
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={'padding'}
      keyboardVerticalOffset={65}>
      <Common />
      <View style={styles.ROOT}>
        {keyboardStatus != 'Keyboard Shown' && <Text style={styles.TXT}>Sign in to your Account</Text>}
        <View style={styles.TEXTINPUT}>
          <TextInput
            placeholder='Username'
            value={name}
            onChangeText={text => setName(text)}
            style={styles.TEXTINPUTtxt}
          />
        </View>
        <View style={styles.TEXTINPUT}>
          <TextInput
            placeholder='Password'
            secureTextEntry={flag}
            value={pass}
            onChangeText={text => setPass(text)}
            style={styles.TEXTINPUTtxt}
          />
          <Feather
            name={flag ? 'eye-off' : 'eye'}
            color={flag ? 'black' : 'grey'} size={25}
            style={styles.ICON}
            onPress={() => setFlag(!flag)}
          />
        </View>

        <View style={styles.MAIN}>
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              disabled={false}
              value={remember}
              onValueChange={(newValue) => {
                setRemember(newValue);
                if (remember == true) {
                  forgotUser();
                } else {
                  remeberUser();
                }
              }}
            />
            <Text style={styles.TEXTINPUTtxt}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
            <Text style={[styles.TEXTINPUTtxt, { color: 'blue' }]} >Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.BOTTOM}>
          <TouchableOpacity onPress={() => SignIn()} >
            <Text style={[styles.TEXTINPUTtxt, { color: '#fff', alignSelf: 'center' }]}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
})

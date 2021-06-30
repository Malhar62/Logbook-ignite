import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { View, Text, Keyboard, KeyboardAvoidingView, Alert, TextInput, TouchableOpacity } from "react-native"
import { Common } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { styles } from './styles';
import { WIDTH } from "../../theme/scaling"


export const ForgotScreen = observer(function ForgotScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
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
  const [mail, setMail] = React.useState('');
  const [massage, setMassage] = React.useState('');
  const navigation = useNavigation()
  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setMail(text)
      setMassage("Email is Not Correct");
      return false;
    }
    else {
      setMail(text)
      setMassage("Email is Correct");
    }
  }
  const checking = () => {
    if (mail === '' || massage != 'Email is Correct') {
      Alert.alert('enter valid email')
    } else {
      Alert.alert('Email sent to your address')
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={'padding'}
      keyboardVerticalOffset={65}>
      <Common />
      <View style={styles.VIEW}>
        {keyboardStatus != 'Keyboard Shown' && <View>
          <Text style={styles.TOPTXT}>Forgot Password</Text>
          <Text style={styles.TXT}>
            Enter your email address below,  we will send
          </Text>
          <Text style={styles.TXT} >
            you a mail to reset password, if any account exists
          </Text>
          <Text style={styles.TXT}>
            with the given email address.
          </Text>
        </View>}
        <View style={styles.TXTIP}
        >
          <TextInput
            placeholder='Email Address'
            value={mail}
            onChangeText={text => validate(text)}
            style={{
              width: WIDTH(320), borderBottomWidth: 1,
            }}
          />

          <Text style={[{ color: massage == 'Email is Correct' ? 'green' : 'red' }, styles.MSG]}>{massage}</Text>
        </View>
        <View style={styles.BOTTOM}>
          <TouchableOpacity onPress={() => checking()} >
            <Text style={styles.TXT2}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}
        ><Text style={styles.TXT1}>Back to Sign in</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView >

  )
})

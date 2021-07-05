/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { MaindashboardScreen, LicenceScreen, TimeLogScreen, StartShiftScreen, AboutLogScreen, AddLogScreen, CurrentShiftScreen, SelectCompanyScreen, SelectJobScreen, UpdateLicenceScreen } from "../screens"
import { WIDTH } from "../theme/scaling"
import { DrawerContent } from "../components"
import { useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Alert } from "react-native"
import { useStores } from "../models"
/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  maindashboard: undefined
  shift: undefined
  licence: undefined
  licencedetail: undefined
  licenceupdate: undefined
  timelog: undefined
  StartShift: undefined
  CurrentShift: undefined
  Job: undefined
  Company: undefined
  timelogscreen: undefined
  addlog: undefined
  aboutlog: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Drawer = createDrawerNavigator<PrimaryParamList>()
const Stack = createStackNavigator<PrimaryParamList>()
export function MainNavigator() {
  const navigation = useNavigation()
  const { logStore } = useStores()
  const onNavi = (path) => {
    if (path !== 'Signout') {
      if (path == 'shift') {
        logStore.setCompany('Select Company')
        logStore.setJob('Select Job')
        navigation.navigate('shift', { screen: 'StartShift' });
      } else {
        if (path == 'timelog') {
          navigation.navigate('timelog', { screen: 'timelogscreen' });
        } else {
          navigation.navigate(path)
        }
      }
    } else {
      Alert.alert(
        "SIGN OUT",
        "Confirm Signout?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          {
            text: "OK", onPress: () => navigation.navigate('authStack')
          }
        ]
      );
    }
  }
  return (
    <Drawer.Navigator drawerStyle={{
      width: WIDTH(340),
    }}
      drawerType="slide"
      drawerContent={(props) => <DrawerContent onNavi={(path) => onNavi(path)} />} >
      <Drawer.Screen name='maindashboard' component={MaindashboardScreen} />
      <Drawer.Screen name='shift' component={ShiftScreen} />
      <Drawer.Screen name='licence' component={LicenceStack} />
      <Drawer.Screen name='timelog' component={TimeLogStack} />
    </Drawer.Navigator>
  )
}
function LicenceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='licencedetail' component={LicenceScreen} />
      <Stack.Screen name='licenceupdate' component={UpdateLicenceScreen} />
    </Stack.Navigator>
  )
}
function TimeLogStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='timelogscreen' component={TimeLogScreen} />
      <Stack.Screen name='aboutlog' component={AboutLogScreen} />
      <Stack.Screen name='addlog' component={AddLogScreen} />
    </Stack.Navigator>
  )
}
function ShiftScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name='StartShift' component={StartShiftScreen} />
      <Stack.Screen name='CurrentShift' component={CurrentShiftScreen} />
      <Stack.Screen name='Company' component={SelectCompanyScreen} />
      <Stack.Screen name='Job' component={SelectJobScreen} />
    </Stack.Navigator>
  )
}
/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
//const exitRoutes = ["maindashboard"]
//export const canExit = (routeName: string) => exitRoutes.includes(routeName)


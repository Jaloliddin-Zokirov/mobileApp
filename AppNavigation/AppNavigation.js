import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import Home from "../components/Home/Home"
import Profil from "../components/Profil/Profil"
import History from "../components/History/History"
import Input from "../components/Input/Input"
import Output from "../components/Output/Output"
import Settings from "../components/Settings/Settings"
import HistoryInput from "../components/History/HistoryInput"
import HistoryOutput from "../components/History/HistoryOutput"


export default AppNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen navigationKey='Profile' name="Profile" component={Profil} options={{headerShown: false}}/>
      <Stack.Screen navigationKey='History' name="History" component={History} options={{headerShown: false}}/>
      <Stack.Screen navigationKey='Input' name="Input" component={Input} options={{headerShown: false}}/>
      <Stack.Screen navigationKey='Output' name="Output" component={Output} options={{headerShown: false}}/>
      <Stack.Screen navigationKey='Settings' name="Settings" component={Settings} options={{headerShown: false}}/>
      <Stack.Screen navigationKey="HistoryInput" name="HistoryInput" component={HistoryInput} options={{headerShown: false}}/>
      <Stack.Screen navigationKey='HistoryOutput' name="HistoryOutput" component={HistoryOutput} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}


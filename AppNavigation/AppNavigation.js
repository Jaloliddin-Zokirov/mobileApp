import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import Home from "../components/Home/Home"
import Profil from "../components/Profil/Profil"
import Info from "../components/Info/Info"
import Input from "../components/Input/Input"
import Output from "../components/Output/Output"


export default AppNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen navigationKey='Profile' name="Profile" component={Profil} />
      <Stack.Screen navigationKey='Info' name="Info" component={Info} />
      <Stack.Screen navigationKey='Input' name="Input" component={Input} />
      <Stack.Screen navigationKey='Output' name="Output" component={Output} />
    </Stack.Navigator>
  )
}


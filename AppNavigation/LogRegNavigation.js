import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import Login from "../components/Login/Login"
import Register from "../components/Register/Register"


export default AppNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}


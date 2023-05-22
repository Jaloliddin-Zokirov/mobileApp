import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import Login from "../components/Login/Login"
import Register from "../components/Register/Register"
import Forgot from "../components/Forgot/Forgot"
import ForgotPass from "../components/Forgot/ForgotPass"
import NewPassword from "../components/Forgot/NewPassword"


export default AppNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      <Stack.Screen name="Forgot" component={Forgot} options={{headerShown: false}}/>
      <Stack.Screen name="ForgotPass" component={ForgotPass} options={{headerShown: false}}/>
      <Stack.Screen name="NewPassword" component={NewPassword} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}


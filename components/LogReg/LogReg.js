import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const LogReg = () => {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
    handleIndex(1)
  }
  
  const goToRegister = () => {
    navigation.navigate('Register');
    handleIndex(2)
  }
  
  const [activeIndex, setActiveIndex] = useState(1)

  const handleIndex = (activeIndex) => {
    setActiveIndex(activeIndex)
  }
  return (
    <View style={style.container}>
      <View style={style.box}>

        <TouchableOpacity onPress={goToLogin}>
          <View style={[style.registerBox, activeIndex === 1 && style.active]}>
            <Text style={style.text}>LOGIN</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToRegister}>
          <View style={[style.loginBox, activeIndex === 2 && style.active]}>
            <Text style={style.text}>REGISTER</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default LogReg

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
    zIndex: 7,
    width: '100%',
    alignItems: 'center',
  },
  box: {
    width: '80%',
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 12,
  },
  registerBox: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  loginBox: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  active: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    borderRadius: 12,
    backgroundColor: '#0E89CB',
  }
})
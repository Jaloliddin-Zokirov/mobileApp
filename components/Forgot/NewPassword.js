import React, { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import BgImage from '../../assets/LogRegBgImage.png'
import { useNavigation } from '@react-navigation/native';

const NewPassword = () => {
  const [onnOff, setOnnOff] = useState('eye-off');

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={style.container}>
      <View style={style.bigBox}>
        <View style={style.box}>
          <Text style={style.log}>FORGOT</Text>
          <Text style={style.for}>Enter a new password !</Text>
          <View style={style.inputBox}>
            <View style={{ position: 'relative' }}>
              <TextInput style={style.loginp} secureTextEntry={onnOff === 'eye-off' ? true : false} placeholder='CREATE NEW PASSWORD'></TextInput>
              <TouchableOpacity style={{ position: 'absolute', top: 10, right: 15, }} onPress={() => setOnnOff(onnOff === 'eye-off' ? 'eye' : 'eye-off')}>
                <Ionicons name={onnOff} size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.inputBox}>
            <View style={{ position: 'relative' }}>
              <TextInput style={style.loginp} secureTextEntry={onnOff === 'eye-off' ? true : false} placeholder='VERIFY NEW PASSWORD'></TextInput>
              <TouchableOpacity style={{ position: 'absolute', top: 10, right: 15, }} onPress={() => setOnnOff(onnOff === 'eye-off' ? 'eye' : 'eye-off')}>
                <Ionicons name={onnOff} size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{ width: '85%' }} onPress={goToLogin}>
            <View style={style.loginBox}>
              <Text style={style.text}>SAVE</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={BgImage} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }} />
    </View>
  )
}

export default NewPassword;


const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  bigBox: {
    position: 'absolute',
    top: 180,
    zIndex: 2,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: '48%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#00000088',
  },
  log: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFF',
  },
  for: {
    width: '72%',
    fontWeight: '700',
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
  inputBox: {
    width: '85%',
    flexDirection: 'column',
    gap: 20,
  },
  loginp: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
    backgroundColor: '#FFFFFFAA',
    borderWidth: 2,
    borderColor: '#0E89CB'
  },
  loginBox: {
    backgroundColor: '#0E89CB',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 45,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
})
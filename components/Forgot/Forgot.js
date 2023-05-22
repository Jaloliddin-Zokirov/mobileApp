import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BgImage from '../../assets/LogRegBgImage.png'
import { useNavigation } from '@react-navigation/native';

const Forgot = () => {

  const navigation = useNavigation();

  const goToForgotPass = () => {
    navigation.navigate('ForgotPass');
  }

  return (
    <View style={style.container}>
      <View style={style.bigBox}>
        <View style={style.box}>
          <Text style={style.forTitle}>FORGOT</Text>
          <Text style={style.for}>Password will be sent to your gmail mail !</Text>
          <View style={style.inputBox}>
            <TextInput style={style.forinp} keyboardType='email-address' placeholder='EMAIL'></TextInput>
          </View>
          <TouchableOpacity style={{ width: '85%' }} onPress={goToForgotPass}>
            <View style={style.forgotBox}>
              <Text style={style.text}>NEXT</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={BgImage} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }} />
    </View>
  )
}

export default Forgot;


const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  bigBox: {
    position: 'absolute',
    top: 220,
    zIndex: 2,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#00000088',
  },
  forTitle: {
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
  forinp: {
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
  forgotText: {
    marginTop: 10,
    marginRight: 5,
    fontWeight: '500',
    fontSize: 15,
    color: '#0E89CB',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  forgotBox: {
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
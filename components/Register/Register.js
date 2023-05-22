import React, { useState } from 'react'
import { ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import BgImage from '../../assets/LogRegBgImage.png'

const Login = () => {
  const [onnOff, setOnnOff] = useState('eye-off');
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateOfBrith, setDateOfBrith] = useState('')

  const toggleDispatch = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate
      setDate(currentDate)

      if (Platform.OS === 'android') {
        toggleDispatch()
        setDateOfBrith(currentDate.toDateString())
      }
    } else {
      toggleDispatch()
    }
  }

  return (
    <View style={style.container}>
      <View style={style.bigBox}>
        <View style={style.box}>
          <Text style={style.reg}>REGISTER</Text>
          <View style={style.inputBox}>
            <TextInput style={style.reginp} placeholder='FIRST NAME'></TextInput>
            <TextInput style={style.reginp} placeholder='LAST NAME'></TextInput>

            {!showPicker && (
              <Pressable onPress={toggleDispatch}>
                <TextInput style={style.reginp} value={dateOfBrith} onChangeText={setDateOfBrith} editable={false} onPressIn={toggleDispatch} placeholder='DATE OF BIRTH' />
              </Pressable>
            )}

            {showPicker && (
              <DateTimePicker mode="date" display='spinner' value={date} onChange={onChange} />
            )}

            <TextInput style={style.reginp} keyboardType='email-address' placeholder='EMAIL'></TextInput>
            <View style={{ position: 'relative' }}>
              <TextInput style={style.reginp} secureTextEntry={onnOff === 'eye-off' ? true : false} placeholder='PASSWORD'></TextInput>
              <TouchableOpacity style={{ position: 'absolute', top: 10, right: 15, }} onPress={() => setOnnOff(onnOff === 'eye-off' ? 'eye' : 'eye-off')}>
                <Ionicons name={onnOff} size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={{ width: '85%' }}>
            <View style={style.registerBox}>
              <Text style={style.text}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground source={BgImage} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }} />
    </View>
  )
}

export default Login;


const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  bigBox: {
    position: 'absolute',
    top: 120,
    zIndex: 2,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    height: '65%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 35,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    backgroundColor: '#00000088',
  },
  reg: {
    fontWeight: '700',
    fontSize: 24,
    color: '#FFF',
  },
  inputBox: {
    width: '85%',
    flexDirection: 'column',
    gap: 20,
  },
  reginp: {
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
  registerBox: {
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
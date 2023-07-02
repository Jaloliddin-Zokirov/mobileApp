import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import HistoryInput from './HistoryInput';
import HistoryOutput from './HistoryOutput';
import { StoreContext } from '../StoreWrapper/StoreWrapper';
import { useContext } from 'react';

const History = () => {
  const {themeColor} = useContext(StoreContext)

  const goToInput = () => {
    handleIndex(1)
  }

  const goToOutput = () => {
    handleIndex(2)
  }

  const [activeIndex, setActiveIndex] = useState(1)

  const handleIndex = (activeIndex) => {
    setActiveIndex(activeIndex)
  }
  return (
    <View style={[style.history, themeColor === true && {backgroundColor: '#111'}]}>
      <View style={style.container}>
        <View style={style.box}>

          <TouchableOpacity onPress={goToInput}>
            <View style={[style.registerBox, activeIndex === 1 && style.active]}>
              <Text style={style.text}>Input</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToOutput}>
            <View style={[style.loginBox, activeIndex === 2 && style.active]}>
              <Text style={style.text}>Output</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.changeHistory}>
        {activeIndex === 1 ? <HistoryInput /> : <HistoryOutput />}
      </View>
    </View>
  )
}

export default History

const style = StyleSheet.create({
  history: {
    position: "relative",
    height: '100%',
    marginTop: 80,
  },
  container: {
    position: 'absolute',
    top: 20,
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
    paddingVertical: 12,
    paddingHorizontal: 45,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  loginBox: {
    paddingVertical: 12,
    paddingHorizontal: 45,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  active: {
    paddingVertical: 12,
    paddingHorizontal: 63.5,
    borderRadius: 12,
    backgroundColor: '#0E89CB',
  },
  changeHistory: {
    marginTop: 80,
    marginHorizontal: 20,
  },
})
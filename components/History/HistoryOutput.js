import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StoreContext } from '../StoreWrapper/StoreWrapper'

const HistoryOutput = () => {
  
  const {themeColor} = useContext(StoreContext)

  return (
    <View style={style.container}>
      <View style={style.box}>
        <View style={style.content}>
          <Text style={[style.title, themeColor === true && {color: 'white'}]}>Title</Text>
          <Text style={[style.text, themeColor === true && {color: 'white'}]}>Description</Text>
        </View>
        <Text style={style.price}>+ 100</Text>
      </View>
      <View style={style.box}>
        <View style={style.content}>
          <Text style={[style.title, themeColor === true && {color: 'white'}]}>Title</Text>
          <Text style={[style.text, themeColor === true && {color: 'white'}]}>Description</Text>
        </View>
        <Text style={style.price}>+ 100</Text>
      </View>
    </View>
  )
}

export default HistoryOutput;

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    marginBottom: 20,
    backgroundColor: '#00000066'
  },
  content: {
    gap: 5,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: 'black',
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    color: 'black',
  },
  price: {
    fontWeight: '600',
    fontSize: 16,
    color: 'green'
  }
})
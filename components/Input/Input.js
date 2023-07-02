import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import { StoreContext } from '../StoreWrapper/StoreWrapper';

const Input = () => {
  const [select, setSelect] = useState('0');
  const { dispatch, theme, money } = useContext(StoreContext)

  const add = parseInt(money) + parseInt(select)

  const handleSave = () => {
    dispatch({
      type: "money",
      payload: add,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={theme} />
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.numberInp}
          keyboardType='numeric'
          placeholder={select === '0' ? 'Enter summa' : select} defaultValue={select === '0' ? '' : select}
          placeholderTextColor={'white'}
          onChange={(item) => {
            setSelect(item.nativeEvent.text);
          }}></TextInput>
      </View>
      <View style={styles.changeBox}>
        <View>
          <TouchableOpacity onPress={() => setSelect('10000')}>
            <Text style={[styles.change, select === '10000' && styles.active]}>10 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('50000')}>
            <Text style={[styles.change, select === '50000' && styles.active]}>50 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('100000')}>
            <Text style={[styles.change, select === '100000' && styles.active]}>100 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('150000')}>
            <Text style={[styles.change, select === '150000' && styles.active]}>150 000</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setSelect('200000')}>
            <Text style={[styles.change, select === '200000' && styles.active]}>200 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('250000')}>
            <Text style={[styles.change, select === '250000' && styles.active]}>250 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('300000')}>
            <Text style={[styles.change, select === '300000' && styles.active]}>300 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('500000')}>
            <Text style={[styles.change, select === '500000' && styles.active]}>500 000</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => { setSelect('0'); handleSave() }}>
        <Text style={styles.save}>SAVE</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Input;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    marginTop: 100,
    padding: 16,
  },
  image: {
    position: 'absolute',
    zIndex: -1,
    top: -100,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  inputBox: {
    position: "relative",
    width: "100%",
  },
  numberInp: {
    width: "100%",
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "white",
    paddingRight: 110,
    zIndex: 2,
    backgroundColor: '#00000066',
  },
  changeBox: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  change: {
    width: 140,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: "#0E89CB",
    textAlign: "center",
    borderRadius: 10,
    fontWeight: 700,
    color: "white",
    marginBottom: 20,
  },
  active: {
    backgroundColor: "#239641",
  },
  save: {
    marginTop: 70,
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: "100%",
    backgroundColor: "#0E89CB",
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    borderRadius: 15,
  }
});
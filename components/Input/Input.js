import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'UZS', value: '1' },
  { label: 'USD', value: '2' },
  { label: 'RUB', value: '3' },
];

const Input = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [select, setSelect] = useState('0');


  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Valuta' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
        <TextInput
          style={styles.numberInp}
          keyboardType='numeric'
          placeholder={select === '0' ? 'Enter summa' : select} defaultValue={select === '0' ? '' : select}
          onChange={item => {
            setSelect(item.nativeEvent.text);
          }}></TextInput>
      </View>
      <View style={styles.changeBox}>
        <View>
          <TouchableOpacity onPress={() => setSelect('10 000')}>
            <Text style={[styles.change, select === '10 000' && styles.active]}>10 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('50 000')}>
            <Text style={[styles.change, select === '50 000' && styles.active]}>50 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('100 000')}>
            <Text style={[styles.change, select === '100 000' && styles.active]}>100 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('150 000')}>
            <Text style={[styles.change, select === '150 000' && styles.active]}>150 000</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setSelect('200 000')}>
            <Text style={[styles.change, select === '200 000' && styles.active]}>200 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('250 000')}>
            <Text style={[styles.change, select === '250 000' && styles.active]}>250 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('300 000')}>
            <Text style={[styles.change, select === '300 000' && styles.active]}>300 000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelect('500 000')}>
            <Text style={[styles.change, select === '500 000' && styles.active]}>500 000</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity >
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
    marginTop: 30,
    padding: 16,
  },
  inputBox: {
    position: "relative",
    width: "100%",
  },
  dropdown: {
    position: "absolute",
    right: 0,
    zIndex: 2,
    width: "28%",
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#239641"
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  numberInp: {
    width: "100%",
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "black",
    paddingRight: 110,
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
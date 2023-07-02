import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Modal, SafeAreaView, TouchableWithoutFeedback, Dimensions, TouchableOpacity, Image, Pressable, Platform, TextInput } from 'react-native'
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StoreContext } from '../StoreWrapper/StoreWrapper';

const deviceheight = Dimensions.get('window').height;

const Profil = () => {
  const { dispatch, theme, dateOfBirth, name, company, gander, email } = useContext(StoreContext)

  const navigation = useNavigation();

  const GoToOutput = () => {
    navigation.navigate('Settings');
  };

  const [editEmail, setEditEmail] = useState('');
  const [editName, setEditName] = useState('');
  const [editCompanyName, setEditCompanyName] = useState('');

  const [showEmail, setShowEmail] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showCompanyName, setShowCompanyName] = useState(false);
  const [showGander, setShowGander] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);

  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDispatch = () => {
    setShowPicker(!showPicker)
  }

  const onChange = ({ type }, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate
      setDate(currentDate)

      if (Platform.OS === 'android') {
        toggleDispatch()
        dispatch({
          type: "dateOfBirth",
          payload: currentDate.toDateString()
        })
      }
    } else {
      toggleDispatch()
    }
  }
  const renderOutsideTouchable = (onTouch) => {
    const view = <View style={{ flex: 1, width: '100%' }} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
        {view}
      </TouchableWithoutFeedback>
    );
  };

  const onShowEmail = () => {
    setShowEmail(true)
  };

  const onCloseEmail = () => {
    setShowEmail(false)
    dispatch({
      type: "email",
      payload: editEmail,
    })
  };

  const onShowName = () => {
    setShowName(true)
  };

  const onCloseName = () => {
    setShowName(false)
    dispatch({
      type: "name",
      payload: editName,
    })
  };

  const onShowCompanyName = () => {
    setShowCompanyName(true)
  };

  const onCloseCompanyName = () => {
    setShowCompanyName(false)
    dispatch({
      type: "company",
      payload: editCompanyName,
    })
  };

  const onShowGander = () => {
    setShowGander(true)
  };

  const onCloseGander = () => {
    setShowGander(false)
  };

  const onShowLogOut = () => {
    setShowLogOut(true)
  };

  const onCloseLogOut = () => {
    setShowLogOut(false)
  };

  const handleChange = (Value) => {
    dispatch({
      type: 'gander',
      payload: Value,
    })
    setShowGander(false)
  }

  return (
    <View style={style.box}>
      <View style={style.image}>
        <Image source={theme} />
      </View>
      <View style={style.top}>
        <View style={style.avatar}>
          <Ionicons name="ios-person-outline" size={70} color="white" />
          <View style={style.avatar2Box}>
            <Entypo name="camera" size={15} color="white" />
          </View>
        </View>
        <View style={style.text}>
          <Text style={style.text1}>{name}</Text>
          <Text style={style.text2}>Company: <Text style={style.text3}>{company}</Text></Text>
        </View>
      </View>

      <View style={style.center}>

        <SafeAreaView >
          <TouchableWithoutFeedback onPress={onShowName}>
            <View style={style.centerTop}>
              <Text style={style.centerText1}>Name:</Text>
              <View style={style.centerEmail}>
                <Text style={style.email}>{name}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#00000077" />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showName}
          onRequestClose={onCloseName}
        >
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', }}>
            {renderOutsideTouchable(onCloseName)}
            <View style={style.changeBig}>
              <View style={style.changeBoxEmail}>
                <Text style={style.emailTitle}>Name</Text>
                <TextInput style={style.emailModal} keyboardType='default' onChange={item => { setEditName(item.nativeEvent.text) }} placeholder='Enter your user name'></TextInput>
                <TouchableOpacity onPress={onCloseName}>
                  <Text style={style.save}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <SafeAreaView >
          <TouchableWithoutFeedback onPress={onShowCompanyName}>
            <View style={style.centerTop}>
              <Text style={style.centerText1}>Company Name:</Text>
              <View style={style.centerEmail}>
                <Text style={style.email}>{company}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#00000077" />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showCompanyName}
          onRequestClose={onCloseCompanyName}
        >
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', }}>
            {renderOutsideTouchable(onCloseCompanyName)}
            <View style={style.changeBig}>
              <View style={style.changeBoxEmail}>
                <Text style={style.emailTitle}>Company Name</Text>
                <TextInput style={style.emailModal} keyboardType='default' onChange={item => { setEditCompanyName(item.nativeEvent.text) }} placeholder='Enter your Company name'></TextInput>
                <TouchableOpacity onPress={onCloseCompanyName}>
                  <Text style={style.save}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <SafeAreaView >
          <TouchableWithoutFeedback onPress={onShowEmail}>
            <View style={style.centerTop}>
              <Text style={style.centerText1}>Email:</Text>
              <View style={style.centerEmail}>
                <Text style={style.email}>{email}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#00000077" />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showEmail}
          onRequestClose={onCloseEmail}
        >
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', }}>
            {renderOutsideTouchable(onCloseEmail)}
            <View style={style.changeBig}>
              <View style={style.changeBoxEmail}>
                <Text style={style.emailTitle}>Email</Text>
                <TextInput style={style.emailModal} keyboardType='email-address' onChange={item => { setEditEmail(item.nativeEvent.text) }} placeholder='Enter your email address'></TextInput>
                <TouchableOpacity onPress={onCloseEmail}>
                  <Text style={style.save}>SAVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <SafeAreaView >
          <Pressable onPress={toggleDispatch}>
            <View style={style.centerCenter}>
              <Text style={style.centerText1}>Date of birth:</Text>
              <View style={style.centerEmail}>
                <Text style={style.email}>{dateOfBirth}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#00000077" />
              </View>
            </View>
          </Pressable>
        </SafeAreaView>

        {showPicker && (
          <DateTimePicker mode="date" display='spinner' value={date} onChange={onChange} />
        )}

        <SafeAreaView >
          <TouchableWithoutFeedback onPress={onShowGander}>
            <View style={style.centerBottom}>
              <Text style={style.centerText1}>Gander:</Text>
              <View style={style.centerEmail}>
                <Text style={style.email}>{gander}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#00000077" />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showGander}
          onRequestClose={onCloseGander}
        >
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', }}>
            {renderOutsideTouchable(onCloseGander)}
            <View style={style.changeBig}>
              <View style={style.changeBoxGender}>
                <View style={style.ganderList}>
                  <TouchableWithoutFeedback onPress={() => handleChange('MALE')}>
                    <View style={style.gander}>
                      <Text style={style.ganderText}>MALE</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={() => handleChange('FAMALE')}>
                    <View style={style.gander}>
                      <Text style={style.ganderText}>FAMALE</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
        </Modal>


      </View>

      <View style={style.bottom}>
        <TouchableOpacity style={style.settings} onPress={GoToOutput}>
          <Text style={style.settingsText1}>Settings</Text>
          <AntDesign name="setting" size={24} color="black" />
        </TouchableOpacity>



        <SafeAreaView >
          <TouchableWithoutFeedback onPress={onShowLogOut}>
            <View style={style.logout}>
              <Text style={style.logoutText1}>Log Out</Text>
              <MaterialIcons name="logout" size={24} color="black" />
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showLogOut}
          onRequestClose={onCloseLogOut}
        >
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', }}>
            {renderOutsideTouchable(onCloseLogOut)}
            <View style={style.changeBig}>
              <View style={style.changeBox}>
                <Text style={style.logoutText} >Do you want to log out?</Text>
                <View style={style.buttonList}>
                  <TouchableWithoutFeedback onPress={onCloseLogOut}>
                    <View style={style.button}>
                      <Text style={style.buttonText}>CLOSE</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback >
                    <View style={style.button}>
                      <Text style={style.buttonText}>EXIT</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  )
}

export default Profil

const style = StyleSheet.create({
  box: {
    height: "100%",
    alignItems: "center",
    marginTop: 40,
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
  top: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  changeBig: {
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: deviceheight * 0.4
  },
  changeBox: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 270,
    paddingVertical: 50,
    gap: 70,
  },
  changeBoxGender: {
    flexDirection: 'row',
    width: '100%',
    height: 140,
    justifyContent: 'center',
    paddingVertical: 30,
    gap: 30,
  },
  changeBoxEmail: {
    flexDirection: 'column',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 30,
    gap: 50,
  },
  emailTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: "black",
  },
  emailModal: {
    width: "90%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    color: "black",
    fontSize: 18,
  },
  save: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: 300,
    backgroundColor: "#0E89CB",
    fontWeight: 700,
    fontSize: 18,
    textAlign: "center",
    color: "white",
    borderRadius: 15,
  },
  radio: {
    width: '100%',
    flexDirection: 'row',
    gap: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    position: "relative",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#0E89CB",
  },
  avatar2Box: {
    position: "absolute",
    bottom: -12,
    right: -7,
    width: 35,
    height: 35,
    backgroundColor: "#0E89CB",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  text: {
    marginTop: 20,
    alignItems: "center",
  },
  text1: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: 'white',
  },
  text2: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ccc",
  },
  text3: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
  },
  center: {
    width: "90%",
    backgroundColor: "#0E89CBEE",
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  centerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#00000077",
  },
  centerCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#00000077",
  },
  centerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
  },
  centerText1: {
    fontWeight: "600",
    fontSize: 16,
  },
  centerEmail: {
    flexDirection: "row",
    alignItems: "center",
  },
  email: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000000DD",
  },
  bottom: {
    width: "90%",
    backgroundColor: "#0E89CBEE",
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#00000077'
  },
  settingsText1: {
    fontSize: 17,
    fontWeight: 600,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoutText1: {
    fontSize: 17,
    fontWeight: 600,
  },
  buttonList: {
    flexDirection: 'row',
    gap: 30,
  },
  button: {
    width: 120,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#0E89CB',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  ganderList: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  gander: {
    width: 120,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#0E89CB',
    borderRadius: 10,
  },
  ganderText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  }
})
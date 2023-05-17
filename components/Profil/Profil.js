import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, SafeAreaView, TouchableWithoutFeedback, Dimensions, Switch } from 'react-native'
import { Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons';
import RadioForm from 'react-native-simple-radio-button';
import { EventRegister } from 'react-native-event-listeners';

const deviceheight = Dimensions.get('window').height;

const Profil = () => {

  const [showEmail, setShowEmail] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showGander, setShowGander] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [changeGander, setChangeGander] = useState('Male');

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
  };

  const onShowDate = () => {
    setShowDate(true)
  };

  const onCloseDate = () => {
    setShowDate(false)
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
    setChangeGander(Value)
    setShowGander(false)
  }

  const items = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' }
  ]

  const [mode, setMode] = useState(false)


  return (
    <View style={style.box}>

      <View style={style.top}>
        <View style={style.avatar}>
          <Ionicons name="ios-person-outline" size={70} color="white" />
          <View style={style.avatar2Box}>
            <Entypo name="camera" size={15} color="white" />
          </View>
        </View>
        <View style={style.text}>
          <Text style={style.text1}>Jaloliddin Zokirov</Text>
          <Text style={style.text2}>Company: <Text style={style.text3}>Micromania</Text></Text>
        </View>
      </View>

      <View style={style.center}>

        <View style={style.centerTop}>
          <Text style={style.centerText1}>Email:</Text>
          <SafeAreaView >
            <TouchableWithoutFeedback onPress={onShowEmail}>
              <View style={style.centerEmail}>
                <Text style={style.email}>username@gmail.com</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showEmail}
          onRequestClose={onCloseEmail}
        >
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', }}>
            {renderOutsideTouchable(onCloseEmail)}
            <View style={style.changeBig}>
              <View style={style.changeBox}>
                <Text>Email</Text>
              </View>
            </View>
          </View>
        </Modal>



        <View style={style.centerCenter}>
          <Text style={style.centerText1}>Date of birth:</Text>
          <SafeAreaView >
            <TouchableWithoutFeedback onPress={onShowDate}>
              <View style={style.centerEmail}>
                <Text style={style.email}>19.08.2003</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={showDate}
          onRequestClose={onCloseDate}
        >
          <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end', }}>
            {renderOutsideTouchable(onCloseDate)}
            <View style={style.changeBig}>
              <View style={style.changeBox}>
                <Text>Date</Text>
              </View>
            </View>
          </View>
        </Modal>


        <View style={style.centerBottom}>
          <Text style={style.centerText1}>Gander:</Text>
          <SafeAreaView >
            <TouchableWithoutFeedback onPress={onShowGander}>
              <View style={style.centerEmail}>
                <Text style={style.email}>{changeGander}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
              </View>
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </View>

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
                <RadioForm style={style.radio} radio_props={items} initial={changeGander} onPress={(value) => handleChange(value)} />
              </View>
            </View>
          </View>
        </Modal>


      </View>

      <View style={style.bottom}>
        <View style={style.settings}>
          <Text style={style.settingsText1}>Thema:</Text>
          <Switch value={mode} onValueChange={(value) => { setMode(value); EventRegister.emit('ChangeTheme', value) }} />
        </View>



        <View style={style.logout}>
          <Text style={style.logoutText1}>Log Out:</Text>
          <SafeAreaView >
            <TouchableWithoutFeedback onPress={onShowLogOut}>
              <MaterialIcons name="logout" size={24} color="black" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
        </View>

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
                <Text >LogOut</Text>
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
    backgroundColor: "#ccc",
    height: "100%",
    alignItems: "center",
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
    flexDirection: 'row',
    width: '100%',
    height: 270,
    paddingVertical: 30,
    gap: 30,
  },
  changeBoxGender: {
    flexDirection: 'row',
    width: '100%',
    height: 140,
    paddingVertical: 30,
    gap: 30,
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
    backgroundColor: "#EB7BC0",
  },
  avatar2Box: {
    position: "absolute",
    bottom: -12,
    right: -7,
    width: 35,
    height: 35,
    backgroundColor: "#EB7BC0",
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
  },
  text2: {
    fontSize: 14,
    fontWeight: "500",
    color: "#727272",
  },
  text3: {
    textAlign: "center",
    fontSize: 18,
    color: "#000",
  },
  center: {
    width: "90%",
    backgroundColor: "white",
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
  },
  centerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  centerCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
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
    color: "#999",
  },
  bottom: {
    width: "90%",
    backgroundColor: "white",
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
    borderColor: '#999'
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
  logoutText1: {
    fontSize: 17,
    fontWeight: 600,
  },
})
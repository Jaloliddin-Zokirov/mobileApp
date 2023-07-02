import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Switch } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import CardBg8 from '../../assets/card_bg8.jpg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StoreContext } from '../StoreWrapper/StoreWrapper';

const Settings = () => {
    const { dispatch, themeColor } = useContext(StoreContext)

    const [isEnabled, setIsEnabled] = useState(themeColor);

    useEffect(() => {
        dispatch({
            type: 'themeColor',
            payload: isEnabled,
          })
    }, [isEnabled])

    return (
        <View style={[styles.container, themeColor === true && styles.bgDark]}>
            <View style={styles.box}>
                <View style={styles.box2}>
                    <Image source={CardBg8} style={styles.image2} />
                    <View style={styles.imageBox}>
                        <View style={styles.image}>
                            <AntDesign name="plus" size={34} color="#0E89CB" />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.center}>

                <TouchableWithoutFeedback >
                    <View style={styles.centerItem}>
                        <Text style={[styles.centerText1, themeColor === true && styles.colorDark]}>PIN code:</Text>
                        <View style={styles.centerContent}>
                            <AntDesign name="arrowright" size={24} color="#999" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback >
                    <View style={styles.centerItem}>
                        <Text style={[styles.centerText1, themeColor === true && styles.colorDark]}>Block Card:</Text>
                        <View style={styles.centerContent}>
                            <AntDesign name="arrowright" size={24} color="#999" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback >
                    <View style={styles.centerItem}>
                        <Text style={[styles.centerText1, themeColor === true && styles.colorDark]}>Language:</Text>
                        <View style={styles.centerContent}>
                            <AntDesign name="arrowright" size={24} color="#999" />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.centerItem}>
                    <Text style={[styles.centerText1, themeColor === true && styles.colorDark]}>Theme:</Text>
                    <View style={styles.centerContent}>
                        <Text style={[styles.centerText1, themeColor === true && styles.colorDark]}>{isEnabled ? 'dark' : 'light'}</Text>
                        <TouchableWithoutFeedback onPress={() => setIsEnabled(isEnabled ? false : true)}>
                            <Switch
                                value={isEnabled}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        height: "100%",
        marginTop: 50,
        backgroundColor: 'white',
    },
    box: {
        height: "38%",
        alignItems: 'center',
    },
    imageBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#0E89CB',
        borderRadius: 10,
    },
    curtainBox: {
        width: '100%',
    },
    image1: {
        width: "100%",
        height: "100%",
    },
    box2: {
        width: '90%',
        height: 180,
        marginTop: 35,
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#0E89CB",
    },
    image2: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: 20,
    },
    center: {
        paddingHorizontal: 18,
    },
    centerItem: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
    },
    centerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    centerText1: {
        fontWeight: "600",
        fontSize: 16,
    },
    text: {
        fontWeight: "600",
        fontSize: 16,
        color: "#999",
    },
    bgDark: {
        backgroundColor: '#111',
    },
    colorDark: {
        color: 'white',
    }
})
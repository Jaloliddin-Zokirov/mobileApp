import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import CardBg8 from '../../assets/card_bg8.jpg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Settings = () => {

    return (
        <View style={styles.container}>
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

                <View style={styles.centerItem}>
                    <Text style={styles.centerText1}>PIN code:</Text>
                    <TouchableWithoutFeedback >
                        <View style={styles.centerContent}>
                            <AntDesign name="arrowright" size={24} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.centerItem}>
                    <Text style={styles.centerText1}>Block Card:</Text>
                    <TouchableWithoutFeedback >
                        <View style={styles.centerContent}>
                            <AntDesign name="arrowright" size={24} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.centerItem}>
                    <Text style={styles.centerText1}>Limit:</Text>
                    <TouchableWithoutFeedback >
                        <View style={styles.centerContent}>
                            <AntDesign name="arrowright" size={24} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.centerItem}>
                    <Text style={styles.centerText1}>Theme:</Text>
                    <TouchableWithoutFeedback >
                        <View style={styles.centerContent}>
                            <AntDesign name="arrowright" size={24} color="#999" />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        height: "100%",
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
})
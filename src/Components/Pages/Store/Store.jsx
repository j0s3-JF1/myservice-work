import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Profile from "../../Profile/Profile";

export default function Store() {

    const [changeScreen, setChangeScreen] = useState(true)

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    return (
        <View style={styles.container}>
            <Profile />
            <Text style={{ fontSize: 25, fontWeight: 'bold', top: '1%' }}>Gabi Freitas</Text>
            <Text style={{ fontSize: 15, fontWeight: '300', top: '1%' }}>Nail Designer</Text>
            <View style={{ width: '90%', height: 2, backgroundColor: '#9F9999', top: '5%' }}></View>
            <View style={{ top: '3%', flexDirection: 'row', alignItems: 'center' }}></View>
            <View style={{ top: '3%', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={styles.buttonGrafic} disabled={changeScreen} onPress={toogleScreen}>
                    <Text style={{ color: '#FFF', fontWeight: '500' }}>Trabalho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAvaliate} disabled={!changeScreen} onPress={toogleScreen}>
                    <Text style={{ color: '#3D68D9', fontWeight: '500' }}>Sobre</Text>
                </TouchableOpacity>
            </View>
            {
                changeScreen ?
                    <Text>Trabalho</Text>
                    :
                    <Text>Sobre</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    buttonGrafic: {
        backgroundColor: '#3D68D9',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        height: '25%'
    },

    buttonAvaliate: {
        backgroundColor: '#FFF',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        height: '25%'
    },
})
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, PixelRatio, ScrollView } from "react-native";

import Profile from "../../Profile/Profile";
import Trabalho from "./TrabalhoView/Trabalho";

export default function Store() {

    const [changeScreen, setChangeScreen] = useState(true)

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    //Pegar trabalhos
    const [trabalho, setTrabalho] = useState([]);

    useEffect(() => {
        fetch('')
    })

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: PixelRatio.getPixelSizeForLayoutSize(50)
            }}>
                <Profile />
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: '1%' }}>Gabi Freitas</Text>
                <Text style={{ fontSize: 15, fontWeight: '300', top: '1%' }}>Nail Designer</Text>
                <View style={{
                    width: PixelRatio.getPixelSizeForLayoutSize(130),
                    height: PixelRatio.getPixelSizeForLayoutSize(1),
                    backgroundColor: '#9F9999',
                    top: PixelRatio.getPixelSizeForLayoutSize(10),
                }}></View>
                <View style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(5),
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.buttonGrafic} disabled={changeScreen} onPress={toogleScreen}>
                        <Text style={{ color: '#FFF', fontWeight: '500' }}>Gráficos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAvaliate} disabled={!changeScreen} onPress={toogleScreen}>
                        <Text style={{ color: '#3D68D9', fontWeight: '500' }}>Avaliação</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{
                top: PixelRatio.getPixelSizeForLayoutSize(130),
                width: '100%'
            }}>
                <View style={{
                    width: '100%',
                    height: PixelRatio.getPixelSizeForLayoutSize(300)
                }}>
                    {
                        changeScreen ?
                            <Trabalho />
                            :
                            <Text>Sobre</Text>
                    }
                </View>
            </ScrollView>
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
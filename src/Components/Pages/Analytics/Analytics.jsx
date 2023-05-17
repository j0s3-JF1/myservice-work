import React, { useState } from "react";
import { View, Text, TouchableOpacity, PixelRatio, ScrollView } from "react-native";


//importação de estilo
import styles from './Style'

//Importação de componentes
import Profile from "../../Profile/Profile";
import Grafics from "../../Grafics/Grafics";
import Avaliate from "../../Avaliate/Avaliate";
import PizzaGrafic from "../../Grafics/PizzaGrafic";
import BarGrafic from "../../Grafics/BarGrafic";


export default function Analytics() {

    const [changeScreen, setChangeScreen] = useState(true)

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

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
                <View style={{ width: '90%', height: 2, backgroundColor: '#9F9999', top: '5%' }}></View>
                <View style={{ top: '3%', flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.buttonGrafic} disabled={changeScreen} onPress={toogleScreen}>
                        <Text style={{ color: '#FFF', fontWeight: '500' }}>Gráficos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAvaliate} disabled={!changeScreen} onPress={toogleScreen}>
                        <Text style={{ color: '#3D68D9', fontWeight: '500' }}>Avaliação</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ top: PixelRatio.getPixelSizeForLayoutSize(120), }}>
                <View style={{
                    width: '100%',
                    height: 1100
                }}>
                    {
                        changeScreen ?
                            <View>
                                <Grafics />
                                <PizzaGrafic />
                                <BarGrafic/>
                            </View>
                            :
                            <Avaliate />
                    }
                </View>
            </ScrollView>
        </View>
    );
}
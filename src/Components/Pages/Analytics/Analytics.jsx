import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";


//importação de estilo
import styles from './Style'

//Importação de componentes
import Profile from "../../Profile/Profile";
import Grafics from "../../Grafics/Grafics";
import Avaliate from "../../Avaliate/Avaliate";


export default function Analytics() {

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
            <View style={{top: '3%', flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttonGrafic} disabled={changeScreen} onPress={toogleScreen}>
                    <Text style={{color: '#FFF', fontWeight: '500'}}>Gráficos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonAvaliate} disabled={!changeScreen} onPress={toogleScreen}>
                    <Text style={{color: '#3D68D9', fontWeight: '500'}}>Avaliação</Text>
                </TouchableOpacity>
            </View>
                {
                    changeScreen ?
                        <Grafics/>
                        :
                        <Avaliate/>
                }
        </View>
    );
}
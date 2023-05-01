import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, Image } from "react-native";

//Estilização
import styles from "./Style";

export default function Account(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/MyService_Logo.png')}
                style={styles.Logo}
            />
            <Text style={styles.title}>ESCOLHA UM TIPO DE CONTA:</Text>
            <TouchableOpacity style={styles.buttonEnterprise} onPress={() => navigation.navigate('Empresa')}>
                <Text style={styles.textButton}>Empresa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWorker} onPress={() => navigation.navigate('Autonomo')}>
                <Text style={styles.textButton}>Autonômo</Text>
            </TouchableOpacity>
        </View>
    );
}
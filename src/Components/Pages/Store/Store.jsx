import React from "react";
import { View, Text } from "react-native";

//importação de estilos
import styles from './Style';

export default function Store(){
    return(
        <View style={styles.container}>
           <Text>Loja</Text> 
        </View>
    );
}
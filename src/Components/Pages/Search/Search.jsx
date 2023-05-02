import React from "react";
import { View, Text } from "react-native";

//importação de estilo
import styles from './Style';

export default function Search(){
    return(
        <View style={styles.container}>
            <Text>Pesquisa</Text>
        </View>
    );
}
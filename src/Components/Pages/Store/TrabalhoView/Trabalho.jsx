import React from "react";
import { View, Text, TouchableOpacity, PixelRatio, StyleSheet } from "react-native";

const Trabalho = () => {
    return(
        <TouchableOpacity style={styles.button}>
            <Text>Produto</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: PixelRatio.getPixelSizeForLayoutSize(100),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        elevation: 5,
        borderRadius: 10
    },
})

export default Trabalho;
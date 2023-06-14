import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ProductButton = ({produto}) => {
    return(
        <TouchableOpacity style={styles.buttonCategory}>
            <Text>{produto.categoria}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonCategory: {
        width: '80%',
        height: 50,
        margin: 5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
})

export default ProductButton;
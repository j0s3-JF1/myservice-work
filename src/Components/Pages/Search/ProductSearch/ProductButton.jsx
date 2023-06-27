import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, PixelRatio } from "react-native";

const ProductButton = ({ produto }) => {

    const navigation = useNavigation();

    const params = {
        categoria: produto.categoria,
        tipo: "produto"
    }
    return (
        <TouchableOpacity
            style={styles.buttonCategory}
            onPress={() => navigation.navigate('SearchResult', params)}
        >
            <Text
                style={{
                    textAlign: 'center',
                    width: '90%'
                }}
            >{produto.categoria}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonCategory: {
        width: '70%',
        height: PixelRatio.getPixelSizeForLayoutSize(20),
        margin: PixelRatio.getPixelSizeForLayoutSize(2),
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        borderRadius: 10,
        borderWidth: PixelRatio.getPixelSizeForLayoutSize(0.5)
    },
})

export default ProductButton;
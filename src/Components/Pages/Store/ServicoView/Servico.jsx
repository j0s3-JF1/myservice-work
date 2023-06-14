import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio } from "react-native";

const Servico = ({ service }) => {

    //Navegação de telas e de parametros
    const navigation = useNavigation();

    //Parametros
    const params = {
        nome: service.servico_Nome,
        categoria: service.servico_Categoria,
        descricao: service.servico_Descricao,
        preco: service.servico_Preco,
    }


    return(
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ServiceView', params)}
        >
            <Text>{service.servico_Nome}</Text>
            <Text>{service.servico_Categoria}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '65%',
        height: PixelRatio.getPixelSizeForLayoutSize(70),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        elevation: 5,
        borderRadius: 10,
        marginTop: PixelRatio.getPixelSizeForLayoutSize(5)
    }
});

export default Servico;
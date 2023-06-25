import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio, Image } from "react-native";

const Servico = ({ service }) => {

    //Navegação de telas e de parametros
    const navigation = useNavigation();

    //Parametros
    const params = {
        id: service.id,
        nome: service.servico_Nome,
        categoria: service.servico_Categoria,
        descricao: service.servico_Descricao,
        preco: service.servico_Preco,
        imagem: service.servico_Imagem,
    }


    return (
        <TouchableOpacity
            style={{
                width: '80%',
                height: PixelRatio.getPixelSizeForLayoutSize(70),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFF',
                elevation: 5,
                borderRadius: 10,
                marginTop: PixelRatio.getPixelSizeForLayoutSize(5)
            }}
            onPress={() => navigation.navigate('ServiceView', params)}
        >
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90%',
                    height: '60%',
                }}
            >
                <Image
                    source={{ uri: service?.servico_Imagem }}
                    style={{
                        width: PixelRatio.getPixelSizeForLayoutSize(35),
                        height: PixelRatio.getPixelSizeForLayoutSize(35)
                    }}
                />
            </View>
            <View
                style={{
                    width: '90%',
                    height: PixelRatio.getPixelSizeForLayoutSize(1),
                    backgroundColor: '#000',
                    margin: PixelRatio.getPixelSizeForLayoutSize(2)
                }}
            ></View>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(7)
                }}
            >
                {service.servico_Nome}
            </Text>
            <Text
                style={{
                    fontWeight: '600'
                }}
            >Categoria: {service.servico_Categoria}</Text>
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
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
    StyleSheet,
    Image
} from "react-native";

const Trabalho = ({ work }) => {

    //Constante para navegação de parametros
    const navigation = useNavigation();
    //Parametro
    const params = {
        id: work.id,
        nome: work.produto_Nome,
        categoria: work.produto_Categoria,
        descricao: work.produto_Descricao,
        preco: work.produto_Preco,
        instagram: work.empresa_Insta,
        imagem: work.produto_Imagem,
    }

    return (
        <TouchableOpacity
            style={{
                width: '80%',
                height: PixelRatio.getPixelSizeForLayoutSize(60),
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#FFF',
                elevation: 5,
                borderRadius: 10,
                marginTop: PixelRatio.getPixelSizeForLayoutSize(5),
                borderWidth: PixelRatio.getPixelSizeForLayoutSize(0.5)
            }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProductView', params)}
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
                    source={{ uri: work?.produto_Imagem }}
                    style={{
                        width: PixelRatio.getPixelSizeForLayoutSize(35),
                        height: PixelRatio.getPixelSizeForLayoutSize(35)
                    }}
                />
            </View>
            <View
                style={{
                    width: '90%',
                    height: PixelRatio.getPixelSizeForLayoutSize(0.5),
                    backgroundColor: '#000',
                    margin: PixelRatio.getPixelSizeForLayoutSize(2)
                }}
            ></View>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
                    textAlign: 'center',
                }}
            >
                {work?.produto_Nome}
            </Text>
            <Text
                style={{
                    fontWeight: '600',
                    textAlign: 'center'
                }}
            >R$ {work?.produto_Preco}</Text>
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
    },
})

export default Trabalho;
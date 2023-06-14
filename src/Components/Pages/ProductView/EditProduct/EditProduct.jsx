import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
    TextInput
} from "react-native";

import ImageProduct from "../../../ImageProduct/ImageProduct";
import { useNavigation, useRoute } from "@react-navigation/native";

const EditProduct = () => {

    //navegação
    const navigation = useNavigation();

    //parametro + rota
    const route = useRoute();

    const { nome, descricao, categoria, preco } = route.params;

    //Tamanho da input
    const [inputHeight, setHeight] = useState("");

    //Mudança de descriçao
    const [novonome, setNovoNome] = useState(nome);
    const [novadescricao, setNovaDescricao] = useState(descricao);
    const [novacategoria, setNovaCategoria] = useState(categoria);
    const [novopreco, setNovoPreco] = useState(preco);

    const DescricaoNova = (novoTexto) => {
        setNovaDescricao(novoTexto);
    };

    const NomeNovo = (novoTexto) => {
        setNovoNome(novoTexto);
    };

    const CategoriaNova = (novoTexto) => {
        setNovaCategoria(novoTexto);
    }

    const PrecoNovo = (novoTexto) => {
        setNovoPreco(novoTexto);
    }

    //Atualização de campos
    const id = 1;
    const body = {
        id,
        nome: novonome,
        descricao: novadescricao,
        categoria: novacategoria,
        preco: novopreco
    }

    function Atualizar() {
        fetch('https://my-service-server.azurewebsites.net/api/empresa', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                alert('Dados Atualizados!')
            })
            .then(() => {
                navigation.navigate('Store')
            })
            .catch((err) => {
                console.log(err);
                alert('Dados não atualizados, erro');
            })
    }


    return (
        <View style={styles.container}>
            <View
                style={{
                    position: 'absolute',
                    bottom: PixelRatio.getPixelSizeForLayoutSize(170),
                }}
            >
                <ImageProduct />
            </View>
            <Image
                source={require('../../../../../assets/elipse3.png')}
                style={{
                    position: 'absolute',
                    bottom: PixelRatio.getPixelSizeForLayoutSize(130),
                    width: PixelRatio.getPixelSizeForLayoutSize(145),
                    height: PixelRatio.getPixelSizeForLayoutSize(155)
                }}
            />
            <Image
                source={require('../../../../../assets/elipse4.png')}
                style={{
                    position: 'absolute',
                    bottom: PixelRatio.getPixelSizeForLayoutSize(110),
                    width: PixelRatio.getPixelSizeForLayoutSize(160),
                    height: PixelRatio.getPixelSizeForLayoutSize(175),
                }}
            />
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: PixelRatio.getPixelSizeForLayoutSize(30)
                }}
            >
                <TextInput
                    style={{
                        color: '#FFF',
                        fontWeight: '500',
                        textAlign: 'left',
                        width: '70%',
                        fontSize: 25,
                    }}
                    value={novonome}
                    onChangeText={NomeNovo}
                    multiline
                    onContentSizeChange={({
                        nativeEvent: {
                            contentSize: { inputHeight }
                        }
                    }) => {
                        setHeight(inputHeight)
                    }}
                />
                <TextInput
                    style={{
                        color: '#FFF',
                        fontWeight: '500',
                        textAlign: 'left',
                        width: '70%',
                        fontSize: 20,
                    }}
                    value={novacategoria}
                    onChangeText={CategoriaNova}
                    multiline
                    onContentSizeChange={({
                        nativeEvent: {
                            contentSize: { inputHeight }
                        }
                    }) => {
                        setHeight(inputHeight)
                    }}
                />
                <TextInput
                    style={{
                        color: '#FFF',
                        fontSize: 15,
                        fontWeight: '300',
                        textAlign: 'left',
                        width: '70%'
                    }}
                    value={novadescricao}
                    onChangeText={DescricaoNova}
                    multiline
                    onContentSizeChange={({
                        nativeEvent: {
                            contentSize: { inputHeight }
                        }
                    }) => {
                        setHeight(inputHeight)
                    }}
                />
                <TextInput
                    style={{
                        textAlign: 'left',
                        width: '70%',
                        color: '#FFF',
                        fontWeight: '800'
                    }}
                    value={novopreco}
                    onChangeText={PrecoNovo}
                    placeholder="R$"
                    placeholderTextColor="#FFF"
                    multiline
                    onContentSizeChange={({
                        nativeEvent: {
                            contentSize: { inputHeight }
                        }
                    }) => {
                        setHeight(inputHeight)
                    }}
                />
            </View>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: PixelRatio.getPixelSizeForLayoutSize(260),
                    left: PixelRatio.getPixelSizeForLayoutSize(120),
                }}
                onPress={Atualizar}
            >
                <AntDesign
                    name="checksquare"
                    size={30}
                    color={'#F8F8F8'}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A3DC2'
    },
});

export default EditProduct;
import { AntDesign, Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
    TextInput
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from "@react-navigation/native";

//Importação de Hook
import { AcessoHook } from "../../../Hook/Acesso/Acesso";

const EditProduct = () => {

    //navegação
    const navigation = useNavigation();

    //parametro + rota
    const route = useRoute();

    const { nome, descricao, categoria, preco } = route.params;

    const { acessos } = AcessoHook();

    //Tamanho da input
    const [inputHeight, setHeight] = useState("");

    //Mudança de descriçao
    const [novonome, setNovoNome] = useState(nome);
    const [novadescricao, setNovaDescricao] = useState(descricao);
    const [novacategoria, setNovaCategoria] = useState(categoria);
    const [novopreco, setNovoPreco] = useState(preco);
    const [image, setImage] = useState("");

    //Imagem
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

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

    function teste() {
        console.log(body);
    }

    //Id do usuario
    const id_user = 1;

    //Atualização de campos
    const id = 1;
    const body = {
        id,
        nome: novonome,
        descricao: novadescricao,
        categoria: novacategoria,
        preco: novopreco,
        imagem: image
    }



    function Atualizar() {
        if (acessos.acesso == 'Empresa') {
            fetch('https://my-service-server.azurewebsites.net/api/ProdutoE_', {
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
        } else {
            fetch('https://my-service-server.azurewebsites.net/api/ProdutoT_', {
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
    }

    async function Delete() {
        if (acessos.acesso == 'Empresa') {
            fetch('https://my-service-server.azurewebsites.net/api/ProdutoE_/' + id, {
                method: 'DELETE',
            })
                .then((response) => {
                    alert('Produto Apagado com sucesso')
                })
                .then(() => {
                    navigation.navigate('Store')
                })
                .catch((err) => {
                    console.log(err);
                    alert('Produto não atualizado, erro');
                })
        } else {
            fetch('https://my-service-server.azurewebsites.net/api/ProdutoT_/' + id, {
                method: 'DELETE',
            })
                .then((response) => {
                    alert('Produto Apagado com sucesso')
                })
                .then(() => {
                    navigation.navigate('Store')
                })
                .catch((err) => {
                    console.log(err);
                    alert('Produto não atualizado, erro');
                })
        }
    }


    return (
        <View style={styles.container}>
            <View
                style={{
                    position: 'absolute',
                    bottom: PixelRatio.getPixelSizeForLayoutSize(170),
                }}
            >
                <TouchableOpacity
                    style={{
                        bottom: PixelRatio.getPixelSizeForLayoutSize(30),
                        left: PixelRatio.getPixelSizeForLayoutSize(80)
                    }}
                    onPress={Delete}
                    activeOpacity={0.5}
                >
                    <Entypo
                        name="trash"
                        color={'#F8F8F8'}
                        size={25}
                    />
                </TouchableOpacity>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.profileButton} onPress={pickImage}>
                        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
                    </TouchableOpacity>
                </View>
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
                    onChangeText={(texto) => NomeNovo(texto)}
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
                    onChangeText={(texto) => CategoriaNova(texto)}
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
                    onChangeText={(texto) => DescricaoNova(texto)}
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

    profileButton: {
        width: PixelRatio.getPixelSizeForLayoutSize(55),
        height: PixelRatio.getPixelSizeForLayoutSize(55),
        elevation: 5,
        borderRadius: 110,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profile: {
        resizeMode: 'stretch',
        width: PixelRatio.getPixelSizeForLayoutSize(45),
        height: PixelRatio.getPixelSizeForLayoutSize(45),
        borderRadius: 50
    },
});

export default EditProduct;
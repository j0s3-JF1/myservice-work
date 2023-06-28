import { AntDesign, Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    PixelRatio,
    TouchableOpacity,
    TextInput,
    Alert
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from "@react-navigation/native";

//Importação de dados do usuario
import { DadosUsuario } from "../../Login/SalvarJwt/AuthContext";

const EditProduct = () => {

    //navegação
    const navigation = useNavigation();

    //parametro + rota
    const route = useRoute();

    const { ident, nome, descricao, categoria, preco } = route.params;

    //Tamanho da input
    const [inputHeight, setHeight] = useState("");

    //Dados usuario
    const [ usuario, setUsuario] = useState();

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
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        if (!result.canceled) {
            setImage('data:image/jpeg;base64,' + result.assets[0].base64);
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

    async function Dados(){
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        Dados();
    }, [])

    function teste() {
        console.log(image);
    }


    //Atualização de campos
    const body = {
        id: ident,
        nome: novonome,
        descricao: novadescricao,
        categoria: novacategoria,
        preco: novopreco,
        imagem: image
    }

    function Atualizar() {
        if (usuario?.Acesso == 'Empresa') {
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

    const AlertDelete = () =>
        Alert.alert('Deletar', 'tem certeza que deseja efetuar esta ação?', [
            {
                text: 'Deletar',
                onPress: () => Delete(),
            },
            {
                text: 'Cancelar',
                onPress: () => console.log('OK Pressed'),
                style: 'cancel'
            }
        ]);

    async function Delete() {
        if (usuario?.Acesso == 'Empresa') {
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
                    position: 'absolute',
                }}
            >
                <TouchableOpacity
                    style={{
                        bottom: PixelRatio.getPixelSizeForLayoutSize(115),
                        left: PixelRatio.getPixelSizeForLayoutSize(55)
                    }}
                    onPress={AlertDelete}
                    activeOpacity={0.5}
                >
                    <Entypo
                        name="trash"
                        color={'#0A3DC2'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.profileButton} onPress={pickImage}>
                {image
                    &&
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: PixelRatio.getPixelSizeForLayoutSize(50),
                            height: PixelRatio.getPixelSizeForLayoutSize(50),
                            borderRadius: 100
                        }}
                    />
                }
            </TouchableOpacity>
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: PixelRatio.getPixelSizeForLayoutSize(0)
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
        width: PixelRatio.getPixelSizeForLayoutSize(60),
        height: PixelRatio.getPixelSizeForLayoutSize(60),
        elevation: 5,
        borderRadius: 110,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        top: PixelRatio.getPixelSizeForLayoutSize(-20),
    },

    profile: {
        resizeMode: 'stretch',
        width: PixelRatio.getPixelSizeForLayoutSize(45),
        height: PixelRatio.getPixelSizeForLayoutSize(45),
        borderRadius: 50
    },
});

export default EditProduct;
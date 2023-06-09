import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio,
    StyleSheet,
    TextInput,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

//Importação de Hook
import { AcessoHook } from "../../Hook/Acesso/Acesso";
import { DadosUsuario } from '../Login/SalvarJwt/AuthContext';

export default function ServiceSpace() {

    //Navegação
    const navigation = useNavigation();

    //Tamanho de input descrição
    const [inputHeight, setHeight] = useState("");

    //Dados usuario
    const [ usuario, setUsuario ] = useState();

    //envio de dados
    const [nome, setNome] = useState("");
    const [desc, setDesc] = useState("");
    const [preco, setPreco] = useState("");
    const imagem = "";
    const id_work = usuario?.ID;

    //Listagem de categorias
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/categoriaS_', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((err) => {
                console.log(err);
                alert('Nenhuma categoria encontrada');
            })
    }, []);

    const handleValueChange = (itemValue) => {
        setSelectedItem(itemValue);
    };

    async function Dados(){
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        Dados();
    }, [])

    
    //Cadastro de Produto
    
    
    function Teste(){
        console.log(body)
    }

    const body = { nome, descricao: desc, categoria: selectedItem, preco, imagem, id_work }
    async function Cadastro() {
        
        if (usuario?.Acesso == 'Empresa') {

            fetch('https://my-service-server.azurewebsites.net/api/ServicoE_', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
                .then((response) => {
                    alert('Cadastro efetuado com sucesso!');
                    console.log(body);
                })
                .then(() => {
                    navigation.navigate('Analytics')
                })
                .catch((err) => {
                    console.error('Servico não cadastrado!', err);
                    alert('Servico não cadastrado');
                })
        } else {
            fetch('https://my-service-server.azurewebsites.net/api/ServicoT_', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
                .then((response) => {
                    alert('Cadastro efetuado com sucesso!')
                })
                .then(() => {
                    navigation.navigate('Analytics')
                })
                .catch((err) => {
                    console.error('Servico não cadastrado!', err);
                    alert('Servico não cadastrado');
                })
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/MyService_Logo.png')}
                style={{
                    resizeMode: 'stretch',
                    width: PixelRatio.getPixelSizeForLayoutSize(110),
                    height: PixelRatio.getPixelSizeForLayoutSize(22),
                    bottom: PixelRatio.getPixelSizeForLayoutSize(240),
                    position: 'absolute'
                }}
            />
            <Text
                style={{
                    color: '#0A3DC2',
                    fontFamily: 'Poppins_600SemiBold',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 25,
                    lineHeight: 33,
                    fontVariant: 'small-caps',
                    bottom: PixelRatio.getPixelSizeForLayoutSize(230),
                    position: 'absolute',
                }}
            >
                WORK
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    width: '60%',
                    textAlign: 'center',
                    fontWeight: '500',
                    color: 'blue',
                    top: PixelRatio.getPixelSizeForLayoutSize(10)
                }}
            >
                Escreva os dados do Servico abaixo:
            </Text>
            <View style={{ top: PixelRatio.getPixelSizeForLayoutSize(20) }}>
                <View style={styles.textInp}>
                    <View style={styles.texIcon}>
                        <SimpleLineIcons name="handbag" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Nome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setNome(texto)}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '80%',
                    backgroundColor: '#FFF',
                    elevation: 2,
                    borderRadius: 8,
                    height: 100,
                    alignItems: 'center',
                    bottom: '5%',
                    margin: 5,
                }}>
                    <View style={styles.texIcon}>
                        <SimpleLineIcons name="handbag" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={{
                            borderRadius: 8,
                            backgroundColor: '#FFF',
                            width: '85%',
                            height: 100,
                            fontSize: 18,
                            fontFamily: 'Poppins_600SemiBold',
                            fontStyle: 'normal',
                            fontWeight: '500',
                        }}
                        placeholder='Descrição'
                        placeholderTextColor='#131212'
                        multiline
                        onContentSizeChange={({
                            nativeEvent: {
                                contentSize: { inputHeight }
                            }
                        }) => {
                            setHeight(inputHeight)
                        }}
                        onChangeText={(texto) => setDesc(texto)}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    width: '85%',
                    backgroundColor: '#FFF',
                    elevation: 2,
                    borderRadius: 10,
                    height: 55,
                    alignItems: 'center',
                    bottom: '5%',
                    margin: 5,
                }}>
                    <View style={styles.texIcon}>
                        <SimpleLineIcons name="handbag" size={24} color="blue" />
                    </View>
                    <Picker
                        selectedValue={selectedItem}
                        onValueChange={handleValueChange}
                        style={{
                            borderRadius: 20,
                            backgroundColor: '#FFF',
                            width: '80%',
                            height: 50,
                            fontSize: 18,
                            fontFamily: 'Poppins_600SemiBold',
                            fontStyle: 'normal',
                            fontWeight: '500',
                        }}
                    >
                        {data.map((item) => (
                            <Picker.Item
                                key={item.id}
                                label={item.categoria}
                                value={item.categoria}
                            />
                        ))}
                    </Picker>
                </View>
                <View style={styles.textInp}>
                    <View style={styles.texIcon}>
                        <FontAwesome name="dollar" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Preço'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setPreco(texto)}
                    />
                </View>
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: PixelRatio.getPixelSizeForLayoutSize(100),
                    height: PixelRatio.getPixelSizeForLayoutSize(20),
                    backgroundColor: '#FFF',
                    elevation: 5,
                    borderRadius: 20,
                    top: PixelRatio.getPixelSizeForLayoutSize(20)
                }}
                onPress={Cadastro}
            >
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'blue'
                    }}
                >
                    Cadastrar Produto
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
    },

    textInp: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        bottom: '5%',
        margin: 5,
    },

    texIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Input: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        width: '85%',
        height: 50,
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        fontStyle: 'normal',
        fontWeight: '500',
    },
})

import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    ActivityIndicator,
    Image,
    RefreshControl
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DadosUsuario } from "../Login/SalvarJwt/AuthContext";

//Componentes
import Trabalho from "./TrabalhoView/Trabalho";
import Servico from "./ServicoView/Servico";

const StoreWorker = () => {

    //Navegação de tela
    const navigation = useNavigation();

    //Escolher tela
    const [changeScreen, setChangeScreen] = useState(true);

    //Listagem do usuario por id
    const [usuario, setUsuario] = useState("");

    //Pegar trabalhos do usuario
    const [trabalhos, setTrabalho] = useState([]);

    //Pegar Serviços do usuario
    const [servicos, setServicos] = useState([]);

    //Refresh de pagina
    const [refreshing, setRefreshing] = useState(false); // Estado para controlar o carregamento

    async function Dados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
        BuscaDados(jwt.ID);
    }

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    function BuscaDados(id) {

        fetch('https://my-service-server.azurewebsites.net/api/TrabalhadorProdutos/Trabalhador?id=' + id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setTrabalho(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não contem nenhum Produto')
            });

        fetch('https://my-service-server.azurewebsites.net/api/TrabalhadorServico/Trabalhador?id=' + id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setServicos(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não contem nenhum Produto')
            })
    }

    const onRefresh = () => {
        setRefreshing(true); // Iniciar a animação de carregamento
    
        const fetchDataPromise = new Promise((resolve, reject) => {
          BuscarDados(usuario.ID); // Buscar novamente os dados
    
          setTimeout(() => {
            reject(new Error('Timeout')); // Rejeitar a Promise após o tempo limite de 5 segundos
          }, 5000);
        });
    
        fetchDataPromise
          .then(() => {
            alert('Dados buscados com sucesso')
          })
          .catch((error) => {
            console.log(error);
            alert('Erro ao buscar novos dados');
          })
          .finally(() => {
            setRefreshing(false); // Parar a animação de carregamento
          });
      };

    useEffect(() => {
        Dados();
    }, []);

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: PixelRatio.getPixelSizeForLayoutSize(50)
            }}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFF',
                        width: PixelRatio.getPixelSizeForLayoutSize(15),
                        height: PixelRatio.getPixelSizeForLayoutSize(15),
                        borderRadius: 50,
                        borderColor: 'blue',
                        borderWidth: 1,
                        elevation: 5,
                        bottom: PixelRatio.getPixelSizeForLayoutSize(5)
                    }}
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('MenuEdit')}
                >
                    <FontAwesome5 name={'user-edit'} size={20} color={'blue'} />
                </TouchableOpacity>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 110,
                        height: 110,
                        elevation: 5,
                        borderRadius: 110,
                        backgroundColor: '#FFF',
                    }}
                >
                    <Image
                        source={{ uri: usuario.Imagem }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100
                        }}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        top: '1%'
                    }}
                >
                    {usuario.Nome}
                </Text>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '300',
                        top: '1%'
                    }}
                >
                    {usuario.Empresa}
                </Text>
                <View style={{
                    width: PixelRatio.getPixelSizeForLayoutSize(130),
                    height: PixelRatio.getPixelSizeForLayoutSize(1),
                    backgroundColor: '#9F9999',
                    top: PixelRatio.getPixelSizeForLayoutSize(10),
                }}></View>
                <View style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(5),
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                        style={styles.buttonGrafic}
                        disabled={changeScreen}
                        onPress={toogleScreen}
                        activeOpacity={0.6}
                    >
                        <Text style={{ color: '#FFF', fontWeight: '500' }}>Produtos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonAvaliate}
                        disabled={!changeScreen}
                        onPress={toogleScreen}
                        activeOpacity={0.6}
                    >
                        <Text style={{ color: '#3D68D9', fontWeight: '500' }}>Serviços</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(130),
                    width: '100%',
                }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={{
                    width: '100%',
                    height: 1000,
                    alignItems: 'center'
                }}>
                    {
                        changeScreen ?
                            <View style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                                {
                                    trabalhos.map((work, index) => (
                                        <Trabalho work={work} key={index} />
                                    ))
                                }
                            </View>
                            :
                            <View style={{
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                                {
                                    servicos.map((service, index) => (
                                        <Servico service={service} key={index} />
                                    ))
                                }
                            </View>
                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    buttonGrafic: {
        backgroundColor: '#3D68D9',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        height: '25%'
    },

    buttonAvaliate: {
        backgroundColor: '#FFF',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        height: '25%'
    },
})

export default StoreWorker;
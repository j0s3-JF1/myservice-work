import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    ActivityIndicator
} from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

//Componentes
import Profile from "../../Profile/Profile";
import Trabalho from "./TrabalhoView/Trabalho";
import Servico from "./ServicoView/Servico";
import Loading from "../../Loading/Loading";

export default function Store() {

    //Navegação de tela
    const navigation = useNavigation();

    //Mudança de tela ( Produto / Serviço )
    const [changeScreen, setChangeScreen] = useState(true)

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    //Tela de loading
    const [isLoading, setLoading] = useState(true);

    //ID do usuario ----------> Apenas como exemplo
    const id = 1;

    //Acesso do usuario
    const [acessos, setAcessos] = useState("");
    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/trabalhador/acesso?id='+id, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((json) => setAcessos(json))
        .catch((err) => {
            console.log(err);
            alert('Não conseguimos verificar seu acesso');
        })
    })

    //Pegar trabalhos do usuario
    const [trabalhos, setTrabalho] = useState([]);
    //Pegar Serviços do usuario
    const [servicos, setServicos] = useState([]);

    //Condição de listagem de produtos referente ao Acesso
    if (acessos.acesso == 'Trabalhador') {
        //Produtos
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/TrabalhadorProdutos/Trabalhador?id=' + id, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => setTrabalho(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não contem nenhum Produto')
            })
        }, []);

        //Serviços
        useEffect(() => {
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
        }, []);
        
    } else{

        //Produto
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/TrabalhadorProdutos/Empresa?id=' + id, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => setTrabalho(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não contem nenhum serviço');
            })
        }, []);

        //Serviços
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/TrabalhadorServico/Empresa?id=' + id, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => setServicos(json))
            .then(() => setLoading(false))
            .catch((err) => {
                console.log(err);
                alert('Usuario não contem nenhum Produto')
            })
        }, []);
    }

    if (isLoading)
        return (
            <Loading />
        );

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
                <Profile />
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: '1%' }}>Gabi Freitas</Text>
                <Text style={{ fontSize: 15, fontWeight: '300', top: '1%' }}>Nail Designer</Text>
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
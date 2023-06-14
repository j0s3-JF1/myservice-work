import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, PixelRatio, ScrollView } from "react-native";


//importação de estilo
import styles from './Style'

//Importação de componentes
import Profile from "../../Profile/Profile";
import Grafics from "../../Grafics/Grafics";
import Avaliate from "../../Avaliate/Avaliate";
import PizzaGrafic from "../../Grafics/PizzaGrafic";
import BarGrafic from "../../Grafics/BarGrafic";


export default function Analytics() {

    //Escolher tela de Gráfico - Comentario
    const [changeScreen, setChangeScreen] = useState(true)

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    //ID do usuario
    const id = 1;

    //verificar acesso do usuario
    const [acessos, setAcesso] = useState("");

    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/trabalhador/acesso?id='+ id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setAcesso(json))
            .catch((err) => {
                console.log(err);
                alert('Não foi possivel verificar seu acesso!');
            })
    }, []);



    //Listagem de Avaliações
    const [avaliacao, setAvaliacao] = useState([]);

    if (acessos.acesso == 'Trabalhador') {
        
        //Produtos
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/avaliacaoProdutoT?id='+ id, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => setAvaliacao(json))
            .catch((err) => {
                console.log(err);
                alert('Não foi possivel verificar o acesso!');
            })
        });

        //Serviços
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/avaliacaoServicoT?id='+ id, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => setAvaliacao(json))
            .catch((err) => {
                console.log(err);
                alert('Não foi possivel verificar o acesso!');
            })
        });
    } else{

        //Produtos
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/avaliacaoProdutoE?id='+ id, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => setAvaliacao(json))
            .catch((err) => {
                console.log(err);
                alert('Não foi possivel verificar o acesso!');
            })
        });

        //Serviços
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/avaliacaoServicoE?id='+ id, {
                method: 'GET',
            })
            .then((response) => response.json())
            .then((json) => setAvaliacao(json))
            .catch((err) => {
                console.log(err);
                alert('Não foi possivel verificar o acesso!');
            })
        });
    }

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
                    <TouchableOpacity style={styles.buttonGrafic} disabled={changeScreen} onPress={toogleScreen}>
                        <Text style={{ color: '#FFF', fontWeight: '500' }}>Gráficos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonAvaliate} disabled={!changeScreen} onPress={toogleScreen}>
                        <Text style={{ color: '#3D68D9', fontWeight: '500' }}>Avaliação</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ top: PixelRatio.getPixelSizeForLayoutSize(120), }}>
                <View style={{
                    width: '100%',
                    height: PixelRatio.getPixelSizeForLayoutSize(300)
                }}>
                    {
                        changeScreen ?
                            <View>
                                <Grafics />
                            </View>
                            :
                            <Avaliate />
                    }
                </View>
            </ScrollView>
        </View>
    );
}
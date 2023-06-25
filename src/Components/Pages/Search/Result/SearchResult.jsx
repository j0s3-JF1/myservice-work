import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, PixelRatio } from "react-native";

export default function SearchResult() {
    //Rota
    const route = useRoute();

    //Aquisição de rota
    const { categoria, tipo } = route.params;

    //Busca
    const [buscaTrabalhador, setBuscaTrabalhador] = useState([]);
    const [buscaEmpresa, setBuscaEmpresa] = useState([]);

    function BuscaServico() {

        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/CategoriaS_/Empresa?categoria=' + categoria, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => setBuscaEmpresa(json))
                .catch((err) => {
                    console.log(err);
                    alert('Não Houve Busca');
                })
        }, []);

        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/CategoriaS_/Trabalhador?categoria=' + categoria, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => setBuscaTrabalhador(json))
                .catch((err) => {
                    console.log(err);
                    alert('Não Houve Busca');
                })
        }, []);
    }

    function BuscaProduto() {
        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/CategoriaP_/Empresa?categoria=' + categoria, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => setBuscaEmpresa(json))
                .catch((err) => {
                    console.log(err);
                    alert('Não Houve Busca');
                })
        }, []);

        useEffect(() => {
            fetch('https://my-service-server.azurewebsites.net/api/CategoriaP_/Trabalhador?categoria=' + categoria, {
                method: 'GET',
            })
                .then((response) => response.json())
                .then((json) => setBuscaTrabalhador(json))
                .catch((err) => {
                    console.log(err);
                    alert('Não Houve Busca');
                })
        }, []);
    }

    async function DadosServico() {
        BuscaServico();
    }

    async function DadosProduto() {
        BuscaProduto();
    }

    if (tipo == 'servico') {
        useEffect(() => {
            DadosServico();
        }, []);
    } else {
        useEffect(() => {
            DadosProduto();
        }, []);
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F8F8F8',
            }}
        >
            <View
                style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}
            >
                {
                    buscaEmpresa.map((empresa, index) => (
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Text>{empresa?.nome}</Text>
                            <Text>{empresa?.categoria}</Text>
                        </View>
                    ))
                }
            </View>
        </View>
    );


}
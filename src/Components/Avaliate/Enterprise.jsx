import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";

const Enterprise = ({ id }) => {

    const [product, setAvaliateP] = useState([]);
    const [service, setAvaliateS] = useState([]);

    //Produto
    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/AvaliacaoProdutoE/lista?id='+id,{
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setAvaliateP(json))
            .catch((err) => {
                console.log(err);
                alert('Nenumha Avaliação Encontrada');
            })
    });

    //Serviço
    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/AvaliacaoServicoE/lista?id='+id,{
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setAvaliateS(json))
            .catch((err) => {
                console.log(err);
                alert('Nenumha Avaliação Encontrada');
            })
    });

    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {
                product.map(() => (
                    <Text>{product.Comentario}</Text>
                ))
            }
            {
                service.map(() => {
                    <Text>{service.Comentario}</Text>
                })
            }
        </View>
    );
}

export default Enterprise;
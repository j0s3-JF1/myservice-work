import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";

const Worker = ({ id }) => {

    const [product, setAvaliateP] = useState([]);
    const [service, setAvaliateS] = useState([]);

    //Produto
    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/AvaliacaoProdutoT/lista?id=' + id, {
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
        fetch('https://my-service-server.azurewebsites.net/api/AvaliacaoServicoT/lista?id=' + id, {
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
            {product ? (
                product.map(() => (
                    <Text>{product.Comentario}</Text>
                ))
            ) : (
                <Text>Carregando dados...</Text>
            )}
            {service ? (
                service.map(() => (
                    <Text>{service.Comentario}</Text>
                ))
            ) : (
                <Text>Carregando dados...</Text>
            )}
        </View>
    );
}

export default Worker;
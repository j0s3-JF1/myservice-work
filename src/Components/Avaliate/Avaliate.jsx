import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

//Importção de componentes
import Worker from "./Worker";
import Enterprise from "./Enterprise";

const Avaliate = ({ id }) => {

    const [acessos, setAcesso] = useState("");

    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/Trabalhador/acesso?id=' + id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setAcesso(json))
            .catch((err) => {
                console.log(err);
                alert('Erro ao encontrar acesso');
            })
    });

    if (acessos.acesso == 'Trabalhador')
        return (
            <Worker id={id} />
        );

    if (acessos.acesso == 'Empresa')
        return (
            <Enterprise />
        );

};

const styles = StyleSheet.create({

});

export default Avaliate;
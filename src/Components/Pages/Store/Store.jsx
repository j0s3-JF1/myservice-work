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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//importação de Hook
import { AcessoHook } from "../../Hook/Acesso/Acesso";

//Componentes
import Loading from "../../Loading/Loading";
import StoreEnterprise from "./StoreEnterprise";
import StoreWorker from "./StoreWorker";

export default function Store() {

    //Navegação de tela
    const navigation = useNavigation();
    //Tela de loading
    

    const id = 1;

    const { acessos, isLoading } = AcessoHook();

    if (isLoading)
        return (
            <Loading />
        );

    if (acessos.acesso == "Empresa") {
        return (
            <StoreEnterprise
                param={id}
            />
        );
    } else {
        return (
            <StoreWorker
                param={id}
            />
        )
    }
}
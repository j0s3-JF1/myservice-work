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
import { useFocusEffect, useNavigation } from "@react-navigation/native";

//importação de Hook
import { AcessoHook } from "../../Hook/Acesso/Acesso";

//Componentes
import Loading from "../../Loading/Loading";
import StoreEnterprise from "./StoreEnterprise";
import StoreWorker from "./StoreWorker";
import { DadosUsuario } from "../Login/SalvarJwt/AuthContext";

export default function Store() {

    //Navegação de tela
    const navigation = useNavigation();

    //Loading de dados
    const [isLoading, setLoading] = useState(true)

    //Verificação de acesso
    const [usuario, setUsuario] = useState();

    async function Dados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useFocusEffect(() => {
        Dados();
        setLoading(false)
    });

    return (
        <View>
            {isLoading && <Loading />}
            {usuario?.Acesso == "Empresa" && <StoreEnterprise />}
            {usuario?.Acesso == "Trabalhador" && <StoreWorker />}
        </View>
    );
}
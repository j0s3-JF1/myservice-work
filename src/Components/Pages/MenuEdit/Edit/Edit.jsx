import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

//importe de Hook
import { AcessoHook } from '../../../Hook/Acesso/Acesso';
import { DadosUsuario } from "../../Login/SalvarJwt/AuthContext";

//Importção de componentes
import Enterprise from "./Enterprise";
import Worker from "./Worker";
import { View } from "react-native";
import Loading from "../../../Loading/Loading";

//importe de estilização

export default function Edit() {

    //navegação
    const navigation = useNavigation();

    //Carregamento de Página
    const [isloading, setLoading] = useState(true);

    //Dados do usuario
    const [usuario, setUsuario] = useState();

    async function Dados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        Dados();
        setLoading(false)
    }, [])

    return (
        <View>
            {isloading && <Loading/>}
            {usuario?.Acesso == "Empresa" && <Enterprise />}
            {usuario?.Acesso == "Trabalhador" && < Worker />}
        </View>
    );
}
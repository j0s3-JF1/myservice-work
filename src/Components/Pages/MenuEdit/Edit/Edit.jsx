import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

//importe de Hook
import { AcessoHook } from '../../../Hook/Acesso/Acesso';

//Importção de componentes
import Enterprise from "./Enterprise";
import Worker from "./Worker";

//importe de estilização

export default function Edit() {

    //navegação
    const navigation = useNavigation();

    //campos de informações
    const id = 3 // valor virá apartir do token do usuario

    //Verificação de acesso
    const { acessos } = AcessoHook();

    if (acessos.acesso == 'Trabalhador') {
        return (
            <Worker/>
        );
    }

    if (acessos.acesso == 'Empresa') {
        return(
            <Enterprise param={id}/>
        )
    }
}
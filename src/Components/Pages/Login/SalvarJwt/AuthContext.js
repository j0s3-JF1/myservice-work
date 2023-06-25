import React from "react";
import jwt from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export async function SalvarJWT( jwtData ){
    
    //Constante para armazenar o jwt do usuario
    const userData = jwt(jwtData);

    //Parte de descriptografia do jwt
    await AsyncStorage.setItem("@jwt", jwtData);
    await AsyncStorage.setItem("@userData", JSON.stringify(userData));

}

export async function HeaderRequisicao(){

    //navegação
    const navigation = useNavigation();

    const usuarioLogado = await ChecarLoginUsuario();
    
    if( usuarioLogado == false ){
        navigation.navigate('Login');
    }

    const token = await AsyncStorage.getItem("@jwt");
    return new Headers({
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
    });
}

export async function ChecarLoginUsuario(){
    
    const token = await AsyncStorage.getItem("@jwt");

    if(!token){
        return false;
    }

    const userData = JSON.parse( await AsyncStorage.getItem("@userData") );
    const actualDate = Date.parse( new Date() ) / 1000;

    if(actualDate > userData.exp){
        //usuario expirado
        await AsyncStorage.removeItem("@jwt");
        return false;
    }

    return true;
}

export async function DadosUsuario(){

    return JSON.parse( await AsyncStorage.getItem("@userData") );
    
}
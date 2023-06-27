import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, PixelRatio, Image } from "react-native";
import { TextInput } from "react-native";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from "@react-navigation/native";

//importe de hook
import { UsuarioHook } from "../../../Hook/Usuario/Usuario";
import { DadosUsuario } from "../../Login/SalvarJwt/AuthContext";

const Enterprise = () => {

    const navigation = useNavigation();

    //Dados do usuario
    const [usuario, setUsuario] = useState();

    async function Dados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        Dados();
    }, []);

    useEffect(() => {
        if (usuario) {
            setNome(usuario?.Nome);
            setEmpresa(usuario?.Empresa);
            setTelefone(usuario?.Telefone);
            setInstagram(usuario?.Instagram);
            setEmail(usuario?.Email);
            setSenha(usuario?.Senha);
            setImage(usuario?.Imagem);
            setDoc(usuario?.Cpf_Cnpj);
        }
    }, [usuario]);


    //Dados
    const [image, setImage] = useState("");
    const [nome, setNome] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [telefone, setTelefone] = useState("");
    const [instagram, setInstagram] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf_cnpj, setDoc] = useState("");
    const acesso = "Empresa";

    //Envio de Foto do usuario
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        });

        if (result.canceled) {
            return;
        }

        setImage('data:image/jpeg;base64, ' + result.assets[0].base64);
    };

    //atualização de dados Empresa
    const body = { id: usuario?.ID, nome, empresa, cpf_cnpj, telefone, instagram, email, senha, acesso, imagem: image }

    function DataUpdateEnterprise(){
        fetch('https://my-service-server.azurewebsites.net/api/Trabalhador', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
               alert("Alterações realizadas com sucesso");
               console.log(body);
            })
            .then(() => {
                navigation.navigate('Store');
            })
            .catch((err) => {
                console.log(err);
                alert("Erro ao alterar as informações");
            });

    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', bottom: '10%' }}>Editar Perfil</Text>
            <View style={{
                width: '90%',
                height: 1,
                backgroundColor: 'brown',
                bottom: '10%'
            }}></View>
            <View style={{ bottom: '7%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.profileButton} onPress={pickImage}>
                        {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 100 }} />}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                width: '90%',
                height: 1,
                backgroundColor: 'brown',
                bottom: '3%'
            }}></View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="user" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder="Nome"
                    placeholderTextColor='#131212'
                    onChangeText={setNome}
                    value={nome}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <FontAwesome name="building-o" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Empresa'
                    placeholderTextColor='#131212'
                    onChangeText={setEmpresa}
                    value={empresa}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="mail" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Email'
                    placeholderTextColor='#131212'
                    onChangeText={setEmail}
                    value={email}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="phone" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Telefone'
                    placeholderTextColor='#131212'
                    maxLength={11}
                    onChangeText={setTelefone}
                    value={telefone}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="instagram" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Instagram (Usuario)'
                    placeholderTextColor='#131212'
                    onChangeText={setInstagram}
                    value={instagram}
                />
            </View>
            <View style={styles.InputArea}>
                <View style={styles.InputIcon}>
                    <AntDesign name="lock" size={24} color="#A9A9A9" />
                </View>
                <TextInput
                    style={styles.Input}
                    placeholder='Senha'
                    placeholderTextColor='#131212'
                    onChangeText={setSenha}
                    value={senha}
                />
            </View>
            <View style={{ width: '60%', height: '7%', top: "5%" }}>
                <TouchableOpacity style={styles.buttonUpdate} onPress={DataUpdateEnterprise}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}

export default Enterprise;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    InputArea: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: 35,
        borderColor: '#A9A9A9',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
    },

    InputIcon: {
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Input: {
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        width: '85%',
        height: '100%',
        fontSize: 18,
        fontFamily: 'tahoma',
        fontStyle: 'normal',
        fontWeight: '500',
    },

    buttonUpdate: {
        backgroundColor: '#0A3DC2',
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },

    profileButton: {
        width: 110,
        height: 110,
        elevation: 5,
        borderRadius: 110,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profile: {
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        borderRadius: 50
    },
})
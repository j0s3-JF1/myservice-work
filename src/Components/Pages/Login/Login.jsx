import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Image, Switch } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { ChecarLoginUsuario, SalvarJWT } from "./SalvarJwt/AuthContext";

//Importe de Hook
import { AcessoHook } from '../../Hook/Acesso/Acesso';

//Importação de Estilo
import styles from "./Style";

export default function Login() {

    //Constate de navegação
    const navigation = useNavigation();

    //Dados para login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Password hide
    const [hidePass, setHide] = useState(true)

    // Switch Button
    const [isEnable, setEnable] = useState(true);
    const [text, setText] = useState(null);


    //Verificar token do usuario
    useEffect(() => {
        VerificarLogin();
    }, []);

    //Função de Verificar login
    async function VerificarLogin() {
        // Constante para verificar token do usuario
        const usuariologado = await ChecarLoginUsuario();
        if (usuariologado) {
            navigation.navigate('Tab');
        }
    }

    //Função de Login
    function Login() {
        if (email == "" || password == "") {
            alert('Preencha todos os campos');
        } else {
            const formData = new URLSearchParams();
            formData.append('email', email);
            formData.append('senha', password);
            console.log(formData)
            axios.post('https://my-service-server.azurewebsites.net/api/Auth/LoginWorker', formData.toString(), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
                .then((response) => {
                    SalvarJWT(response.data.token);
                })
                .then(() => navigation.navigate("Tab"))
                .then(() => {
                    alert("Login Efetuado com sucesso!")
                })
                .catch((err) => {
                    console.log(err);
                    alert('Usuario e/ou senha invalidos!')
                })
        }
    }

    //Função de Lembrar Login
    const tootleSwitch = () => {
        if (isEnable) {
            setText('Inactivate')
        } else {
            setText('Activate')
        }

        setEnable(previousState => !previousState)
    }

    //Botão Tela de Cadastro
    const CadastroScreen = () => {
        navigation.navigate('Conta')
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/MyService_Logo.png')} style={styles.Logo} />
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.containerInput}>
                <View style={styles.emailArea}>
                    <View style={styles.emailIcon}>
                        <AntDesign name="mail" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Email'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setEmail(texto)}
                    />
                </View>
                <View style={styles.passwordArea}>
                    <View style={styles.lockIcon}>
                        <AntDesign name="lock1" size={25} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Senha'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setPassword(texto)}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => setHide(!hidePass)}>
                        {
                            hidePass ?
                                <Ionicons name="eye" color='lightgray' size={25} />
                                :
                                <Ionicons name="eye-off" color='lightgray' size={25} />
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ top: '10%', flexDirection: "row" }}>
                <Switch
                    trackColor={{ false: 'gray', true: '#0A3DC2' }}
                    thumbColor={isEnable ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor='gray'
                    onValueChange={tootleSwitch}
                    value={!isEnable}
                    style={{ right: '60%' }}
                />
                <Text style={{ top: '3%', right: '60%' }}>Lembre-me</Text>
                <TouchableOpacity
                    style={{
                        top: '3%',
                        left: '60%'
                    }}
                    onPress={() => navigation.navigate('Forgot')}
                >
                    <Text>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => Login()}>
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
            <View style={styles.info}>
                <Text style={{ fontSize: 18 }}>Ou</Text>
            </View>
            <View style={styles.SocialMedia}>
                <TouchableOpacity style={styles.buttonGoogle}>
                    <Image source={require('../../../../assets/google-icon.png')} style={styles.google} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonFacebook}>
                    <Image source={require('../../../../assets/facebook.png')} style={styles.facebook} />
                </TouchableOpacity>
            </View>
            <View style={styles.textCadastro}>
                <Text>Não tenho conta!</Text>
                <TouchableOpacity onPress={() => CadastroScreen()}>
                    <Text style={{ fontWeight: 'bold' }}> Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
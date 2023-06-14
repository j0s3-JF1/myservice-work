import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, TouchableOpacity, Image, Switch } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

//Importação de Estilo
import styles from "./Style";

export default function Login() {

    //Importação de fontes


    //Constate de navegação
    const navigation = useNavigation();

    //Password input
    const [password, setPassword] = useState('');
    const [hidePass, setHide] = useState(true)

    // Switch Button
    const [isEnable, setEnable] = useState(true);
    const [text, setText] = useState(null);

    const tootleSwitch = () => {
        if (isEnable) {
            setText('Inactivate')
        } else {
            setText('Activate')
        }

        setEnable(previousState => !previousState)
    }

    //Botão Cadastro
    const CadastroScreen = () => {
        navigation.navigate('Conta')
    }

    const [email, setEmail] = useState("");
    const HomeScreen = () => {

        //Sistema de validação de campo

        if (email == "" && password == "") {
            alert('Preencha os campos!');
        }
        else {
            navigation.navigate('Tab');
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/MyService_Logo.png')} style={styles.Logo} />
            <Text style={{
                color: '#0A3DC2',
                fontFamily: 'Poppins_600SemiBold',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 25,
                lineHeight: 33,
                fontVariant: 'small-caps',
                bottom: '12%'
            }}>
                WORK
            </Text>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.containerInput}>
                <View style={styles.emailArea}>
                    <View style={styles.emailIcon}>
                        <AntDesign name="mail" size={24} color="blue" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Email' placeholderTextColor='#131212' onChange={setEmail} />
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
            <TouchableOpacity style={styles.loginButton} onPress={() => HomeScreen()}>
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
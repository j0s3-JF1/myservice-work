import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

//Importação de estilo
import styles from './Style'

export default function CadastroWorker() {

    //Constante para troca de telas
    const navigation = useNavigation();
    const [hidePass, setHide] = useState(true)

    //Cadastro input
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirma, setConfirma] = useState("");

    function Cadastro() {
        if (nome == "" || sobrenome == "" || cpf == "" || email == "" || senha == "" || confirma == "") {
            alert('Preencha todos os campos!');
        } else {
            if (senha == confirma) {

                const body = { nome, sobrenome, cpf, email, senha }

                fetch('https://myserviceserver.azurewebsites.net/api/trabalhador', {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                })
                    .then(response => {
                        alert('Cadastro efetuado com sucesso!')
                    })
                    .then(() => {
                        navigation.navigate('Login')
                    })
                    .catch(err => {
                        console.error('Usuario não cadastrado!', err);
                        alert('Usuario não cadastrado');
                    })

            } else {
                alert("As senhas estão diferentes, Por favor corrija-os");
            }
        }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../../assets/MyService_Logo.png')} style={styles.Logo} />
            <Text style={{
                color: '#0A3DC2',
                fontFamily: 'tahoma, arial, verdana',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: 25,
                lineHeight: 33,
                fontVariant: 'small-caps',
                bottom: '11%'
            }}>
                AUTONÔMO
            </Text>
            <Text style={styles.title}>CADASTRAR-SE</Text>
            <View style={styles.containerInput}>
                <View style={styles.nameArea}>
                    <View style={styles.nameIcon}>
                        <AntDesign name="user" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Nome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setNome(texto)}
                    />
                </View>
                <View style={styles.secondNameArea}>
                    <View style={styles.secondIcon}>
                        <AntDesign name="user" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Sobrenome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setSobrenome(texto)}
                    />
                </View>
                <View style={styles.cpfArea}>
                    <View style={styles.secondIcon}>
                        <AntDesign name="user" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='CPF'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setCPF(texto)}
                    />
                </View>
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
                <View style={styles.passArea}>
                    <View style={styles.lockIcon}>
                        <AntDesign name="lock1" size={25} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Senha'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setSenha(texto)}
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
                <View style={styles.cofirmArea}>
                    <View style={styles.lockIcon}>
                        <AntDesign name="lock1" size={25} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Confirmar Senha'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setConfirma(texto)}
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
            <TouchableOpacity style={styles.CadastroButton} onPress={Cadastro}>
                <Text style={styles.textButton}>CADASTRAR-SE</Text>
            </TouchableOpacity>
            <View style={styles.textCadastro}>
                <Text>Ja possui uma conta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ fontWeight: 'bold' }}> Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, PixelRatio } from "react-native";
import { TextInput } from "react-native";
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Importção de componentes
import Profile from '../../../Profile/Profile';

//importe de estilização

export default function Edit() {

    //navegação
    const navigation = useNavigation();

    //campos de informações

    const id = 1 // valor virá apartir do token do usuario

    //Verificação de acesso
    const [acessos, setAcesso] = useState('');
    useEffect(() => {
        fetch('https://my-service-server.azurewebsites.net/api/Trabalhador/acesso?id=' + id, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((json) => setAcesso(json))
            .catch((err) => {
                console.log(err);
                alert('Erro ao verificar acesso');
            })
    })

    //Dados
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [telefone, setTelefone] = useState("")
    const [instagram, setInstagram] = useState("")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    //atualização de dados Trabalhador
    const DataUpdateWork = () => {
        const body = { id, nome, sobrenome, telefone, instagram, email, senha }

        fetch('https://my-service-server.azurewebsites.net/api/Trabalhador', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                alert("Alterações realizadas com sucesso");
            })
            .then(() => {
                navigation.navigate('Profile')
            })
            .catch((err) => {
                console.log(err);
                alert("Erro ao alterar as informações");
            });
    }

    //atualização de dados Empresa
    const DataUpdateEnterprise = () => {
        const body = { id, nome, empresa, telefone, instagram, email, senha }

        fetch('https://my-service-server.azurewebsites.net/api/Trabalhador', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        })
            .then((response) => {
                alert("Alterações realizadas com sucesso");
            })
            .then(() => {
                navigation.navigate('Profile')
            })
            .catch((err) => {
                console.log(err);
                alert("Erro ao alterar as informações");
            });
    }

    if (acessos.acesso == 'Trabalhador') {
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
                    <Profile />
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
                        placeholder='Nome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setNome(texto)}
                    />
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="user" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Sobrenome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setSobrenome(texto)}
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
                        onChangeText={(texto) => setEmail(texto)}
                    />
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="phone" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Celular'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setTelefone(texto)}
                    />
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="instagram" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Instagram'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setInstagram(texto)}
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
                        onChangeText={(texto) => setSenha(texto)}
                    />
                </View>
                <View style={{ width: '60%', height: '7%', top: "5%" }}>
                    <TouchableOpacity style={styles.buttonUpdate} onPress={DataUpdateWork}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>Atualizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (acessos.acesso == 'Empresa') {
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
                    <Profile />
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
                        placeholder='Nome'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setNome(texto)}
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
                        onChangeText={(texto) => setEmpresa(texto)}
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
                        onChangeText={(texto) => setEmail(texto)}
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
                        onChangeText={(texto) => setTelefone(texto)}
                    />
                </View>
                <View style={styles.InputArea}>
                    <View style={styles.InputIcon}>
                        <AntDesign name="instagram" size={24} color="#A9A9A9" />
                    </View>
                    <TextInput
                        style={styles.Input}
                        placeholder='Instagram'
                        placeholderTextColor='#131212'
                        onChangeText={(texto) => setInstagram(texto)}
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
                        onChangeText={(texto) => setSenha(texto)}
                    />
                </View>
                <View style={{ width: '60%', height: '7%', top: "5%" }}>
                    <TouchableOpacity style={styles.buttonUpdate} onPress={DataUpdateEnterprise}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold', fontSize: 20 }}>Atualizar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

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
})
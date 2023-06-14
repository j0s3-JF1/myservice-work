import React, {useState} from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ForgotPass() {

    //navegação
    const navigation = useNavigation();

    //Email para redefinir
    const [email, setEmail] = useState('')

    const RedefinePass = () => {
        if(email == ""){
            alert("Insira um email para redefinir sua senha!");
        }else {
            navigation.navigate('Login');
            alert("Email enviado, espere alguns minutos para receber sua nova senha")
        }
    }


    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/MyService_Logo.png')}
                style={styles.Logo}
            />
            <Text style={styles.title}>Esqueceu senha?</Text>
            <Text style={{bottom: '23%', right: '10%'}}>Escreva seu email e rebera um email{'\n'}para efetuar a troca</Text>
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
            <TouchableOpacity style={styles.redefineButton} onPress={RedefinePass}>
                <Text style={{fontSize: 20, fontWeight: '700', color: '#FFF'}}>Redefinir</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    Logo: {
        resizeMode: 'stretch',
        width: '50%',
        height: '5%',
        bottom: '30%'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 35,
        bottom: '25%'
    },

    EmailText: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        bottom: 20
    },

    Input: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        width: '85%',
        height: 50,
        fontSize: 18,
        fontFamily: 'tahoma',
        fontStyle: 'normal',
        fontWeight: '500',
    },

    emailArea: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        bottom: '40%'
    },

    emailIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    redefineButton:{
        width: '50%',
        height: '7%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 5,
        bottom: '15%'
    },
});
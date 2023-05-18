import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio,
    StyleSheet,
    TextInput,
} from "react-native";

export default function ProductSpace() {

    //envio de dados
    const [nome, setNome] = useState("");
    const [desc, setDesc] = useState("");
    const [preco, setPreco] = useState("");

    fetch('')

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/MyService_Logo.png')}
                style={{
                    resizeMode: 'stretch',
                    width: PixelRatio.getPixelSizeForLayoutSize(110),
                    height: PixelRatio.getPixelSizeForLayoutSize(22),
                    bottom: PixelRatio.getPixelSizeForLayoutSize(240),
                    position: 'absolute'
                }}
            />
            <Text
                style={{
                    color: '#0A3DC2',
                    fontFamily: 'Poppins_600SemiBold',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 25,
                    lineHeight: 33,
                    fontVariant: 'small-caps',
                    bottom: PixelRatio.getPixelSizeForLayoutSize(230),
                    position: 'absolute',
                }}
            >
                WORK
            </Text>
            <Text
                style={{
                    fontSize: 15,
                    width: '60%',
                    textAlign: 'center',
                    fontWeight: '500',
                    color: 'blue',
                    top: PixelRatio.getPixelSizeForLayoutSize(10)
                }}
            >
                Escreva os dados do Produto abaixo:
            </Text>
            <View style={{top: PixelRatio.getPixelSizeForLayoutSize(20)}}>
                <View style={styles.textInp}>
                    <View style={styles.texIcon}>
                        <SimpleLineIcons name="handbag" size={24} color="blue" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Nome' placeholderTextColor='#131212' />
                </View>
                <View style={styles.textInpdesc}>
                    <View style={styles.texIcon}>
                        <SimpleLineIcons name="handbag" size={24} color="blue" />
                    </View>
                    <TextInput
                        style={styles.Inputdesc}
                        placeholder='Descrição'
                        placeholderTextColor='#131212'
                        editable
                        multiline
                        numberOfLine={5}
                        maxLength={200}
                    />
                </View>
                <View style={styles.textInp}>
                    <View style={styles.texIcon}>
                        <FontAwesome name="dollar" size={24} color="blue" />
                    </View>
                    <TextInput style={styles.Input} placeholder='Preço' placeholderTextColor='#131212' />
                </View>
            </View>
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: PixelRatio.getPixelSizeForLayoutSize(100),
                    height: PixelRatio.getPixelSizeForLayoutSize(20),
                    backgroundColor: '#FFF',
                    elevation: 5,
                    borderRadius: 20,
                    top: PixelRatio.getPixelSizeForLayoutSize(20)
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: '500',
                        color: 'blue'
                    }}
                >
                    Cadastrar Produto
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
    },

    textInp: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        bottom: '5%',
        margin: 5,
    },

    texIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Input: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        width: '85%',
        height: 50,
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        fontStyle: 'normal',
        fontWeight: '500',
    },

    textInpdesc: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 250,
        bottom: '5%',
        margin: 5,
    },

    texIcondesc: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Inputdesc: {
        borderRadius: 8,
        backgroundColor: '#FFF',
        width: '85%',
        height: 250,
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        fontStyle: 'normal',
        fontWeight: '500',
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(72)
    },
})

import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
    },

    Logo: {
        resizeMode: 'stretch',
        width: 320,
        height: 60,
        bottom: '12%',
    },

    title: {
        color: '#0A3DC2',
        fontFamily: 'Tahoma Regular font',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 33,
        fontVariant: 'small-caps',
        top: '0%',
    },

    containerInput: {
        top: '3%',
    },

    emailArea: {
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        bottom: '5%'
    },

    emailIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    passwordArea: {
        flexDirection: 'row',
        width: '70%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center'
    },

    lockIcon: {
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
        fontFamily: 'Tahoma Regular font',
        fontStyle: 'normal',
        fontWeight: '500',
    },

    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    loginButton: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        top: '8%',
    },

    textButton: {
        fontFamily: 'Tahoma Regular font',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0,
        textTransform: 'uppercase'
    },

    info: {
        alignContent: 'center',
        justifyContent: 'center',
        top: '12%'
    },

    SocialMedia: {
        flexDirection: 'row',
        top: '30%'
    },

    buttonGoogle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#FFF',
        elevation: 2,
        right: '15%'
    },

    buttonFacebook: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#FFF',
        elevation: 2,
        left: '15%'
    },

    google: {
        resizeMode: 'stretch',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    facebook: {
        resizeMode: 'stretch',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    textCadastro: {
        top: '40%',
        flexDirection: 'row'
    },
})

export default styles;
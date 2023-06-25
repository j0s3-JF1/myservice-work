import React from "react";
import { PixelRatio, StyleSheet } from "react-native";
import {useFonts, Poppins_600SemiBold, Poppins_400Regular, Poppins_500Medium} from '@expo-google-fonts/poppins';

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
        width: PixelRatio.getPixelSizeForLayoutSize(95),
        height: PixelRatio.getPixelSizeForLayoutSize(18),
        bottom: PixelRatio.getPixelSizeForLayoutSize(40),
    },

    title: {
        color: '#0A3DC2',
        fontFamily: 'Poppins_600SemiBold',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 33,
        fontVariant: 'small-caps',
    },

    containerInput: {
        top: PixelRatio.getPixelSizeForLayoutSize(10),
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
        height: 60,
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
        fontFamily: 'Poppins_600SemiBold',
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
        top: PixelRatio.getPixelSizeForLayoutSize(25),
    },

    textButton: {
        fontFamily: 'Poppins_600SemiBold',
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
        top: PixelRatio.getPixelSizeForLayoutSize(35),
    },

    SocialMedia: {
        flexDirection: 'row',
        top: PixelRatio.getPixelSizeForLayoutSize(45),
    },

    buttonGoogle: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#FFF',
        elevation: 2,
        right: PixelRatio.getPixelSizeForLayoutSize(5),
    },

    buttonFacebook: {
        width: 80,
        height: 80,
        borderRadius: 50,
        backgroundColor: '#FFF',
        elevation: 2,
        left: PixelRatio.getPixelSizeForLayoutSize(5)
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
        top: PixelRatio.getPixelSizeForLayoutSize(60),
        flexDirection: 'row'
    },
})

export default styles;
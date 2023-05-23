import React from "react";
import { PixelRatio, StyleSheet } from "react-native";

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
        width: '80%',
        height: 60,
    },

    title: {
        color: '#0A3DC2',
        fontFamily: 'tahoma, arial, verdana',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 25,
        lineHeight: 33,
        fontVariant: 'small-caps',
        top: PixelRatio.getPixelSizeForLayoutSize(7)
    },

    containerInput: {
        top: PixelRatio.getPixelSizeForLayoutSize(15)
    },

    inputArea: {
        bottom: '5%',
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        margin: 5
    },

    inputIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    passArea: {
        flexDirection: 'row',
        width: '70%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        margin: 5
    },

    lockIcon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    cofirmArea: {
        flexDirection: 'row',
        width: '70%',
        backgroundColor: '#FFF',
        elevation: 2,
        borderRadius: 8,
        height: 50,
        alignItems: 'center',
        margin: 5
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

    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    CadastroButton: {
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: '50%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
        top: PixelRatio.getPixelSizeForLayoutSize(15)
    },

    textButton: {
        fontFamily: 'tahoma',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20,
        letterSpacing: 0,
        textTransform: 'uppercase'
    },

    textCadastro: {
        flexDirection: 'row',
        top: PixelRatio.getPixelSizeForLayoutSize(17)
    },
})

export default styles
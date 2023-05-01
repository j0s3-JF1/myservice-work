import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8'
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
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 33,
        fontVariant: 'small-caps',
        bottom: '10%',
    },

    buttonEnterprise: {
        width: '70%',
        height: '10%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 5
    },

    buttonWorker: {
        width: '70%',
        height: '10%',
        top: '5%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 5
    },

    textButton:{
        color: '#0A3DC2',
        fontSize: 25,
        fontWeight: '800',
        fontFamily: 'Tahoma'
    }
})

export default styles;
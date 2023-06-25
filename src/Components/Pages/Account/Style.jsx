import React from "react";
import { PixelRatio, StyleSheet } from "react-native";

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
        width: PixelRatio.getPixelSizeForLayoutSize(80),
        height: PixelRatio.getPixelSizeForLayoutSize(15),
        bottom: PixelRatio.getPixelSizeForLayoutSize(50),
    },

    title: {
        color: '#0A3DC2',
        fontFamily: 'Tahoma Regular font',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 33,
        fontVariant: 'small-caps',
        bottom: PixelRatio.getPixelSizeForLayoutSize(30),
    },

    buttonEnterprise: {
        width: PixelRatio.getPixelSizeForLayoutSize(100),
        height: PixelRatio.getPixelSizeForLayoutSize(30),
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        elevation: 5
    },

    buttonWorker: {
        width: PixelRatio.getPixelSizeForLayoutSize(100),
        height: PixelRatio.getPixelSizeForLayoutSize(30),
        top: PixelRatio.getPixelSizeForLayoutSize(10),
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
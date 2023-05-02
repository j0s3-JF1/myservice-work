import { Entypo } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native-web";

const NewButton = () => {
    return (
        <>
        <TouchableOpacity style={styles.container}>
            <Entypo name="plus" size={25} color={'#FFF'} />
        </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0A3DC2',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '50%'
    }
})

export default NewButton;
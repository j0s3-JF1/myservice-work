import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio, Image } from "react-native";

export default function AddProduct() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/grid.png')}
            />
            <Text style={{
                color: '#FFF',
                opacity: 0.6,
                width: '90%',
                textAlign: 'center'
            }}>
                Adicione uma imagem, uma descrição e um valor para seu serviço / produto
            </Text>
            <TouchableOpacity
                style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(100)
                }}
                onPress={() => navigation.navigate('MenuStore')}
            >
                <AntDesign name="pluscircle" size={25} color={'#FFF'} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0A3DC2',
    },
});
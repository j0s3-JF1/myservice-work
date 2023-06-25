import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    PixelRatio,
    StyleSheet
} from "react-native";



export default function MenuStore() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/MyService_Logo.png')}
                style={{
                    resizeMode: 'stretch',
                    width: PixelRatio.getPixelSizeForLayoutSize(90),
                    height: PixelRatio.getPixelSizeForLayoutSize(20),
                    bottom: PixelRatio.getPixelSizeForLayoutSize(240),
                    position: 'absolute'
                }}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#0A3DC2'
                }}
            >
                Escolha uma categoria abaixo
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ProductSpace')}
                >
                    <View
                        style={{
                            width: PixelRatio.getPixelSizeForLayoutSize(40),
                            height: PixelRatio.getPixelSizeForLayoutSize(40),
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 5,
                            backgroundColor: '#FFF'
                        }}
                    >
                        <SimpleLineIcons name="handbag" size={70} color={'#0A3DC2'} />
                    </View>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#0A3DC2'
                        }}
                    >
                        Produto
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ServiceSpace')}
                >
                    <View
                        style={{
                            width: PixelRatio.getPixelSizeForLayoutSize(40),
                            height: PixelRatio.getPixelSizeForLayoutSize(40),
                            justifyContent: 'center',
                            alignItems: 'center',
                            elevation: 5,
                            backgroundColor: '#FFF'
                        }}
                    >
                        <AntDesign name="tool" size={70} color={'#0A3DC2'} />
                    </View>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#0A3DC2'
                        }}
                    >
                        Serviço
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F8F8F8',
    },

    button: {
        width: PixelRatio.getPixelSizeForLayoutSize(50),
        height: PixelRatio.getPixelSizeForLayoutSize(65),
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        margin: PixelRatio.getPixelSizeForLayoutSize(5),
        paddingBottom: PixelRatio.getPixelSizeForLayoutSize(1),
        elevation: 2,
        borderRadius: 10,
    },
});
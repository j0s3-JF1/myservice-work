import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, PixelRatio, Linking, TouchableOpacity, Image } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const ServiceView = () => {

    //Rotas do parametro
    const route = useRoute();

    //Parametro
    const { nome, categoria, descricao, preco } = route.params;

    //rota para link de rede social
    const LinkInstagram = () => {
        Linking.openURL('https://www.instagram.com/my.service_/');
    }

    const LinkWhatsApp = () => {
        Linking.openURL('https://chat.whatsapp.com/Be0eLWjMPXG22s35ZozdqO');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleNome}>
                {nome}
            </Text>
            <Text style={styles.titleDesc}>
                {descricao}
            </Text>
            <Text style={styles.titlePrice}>
                R$ {preco}
            </Text>
            <Image
                source={require('../../../../assets/ellipse2.png')}
                style={{
                    position: 'absolute',
                    top: PixelRatio.getPixelSizeForLayoutSize(200),
                    width: PixelRatio.getPixelSizeForLayoutSize(170),
                    height: PixelRatio.getPixelSizeForLayoutSize(115),
                }}
            />
            <Image
                source={require('../../../../assets/elipse1.png')}
                style={{
                    position: 'absolute',
                    top: PixelRatio.getPixelSizeForLayoutSize(210),
                    width: PixelRatio.getPixelSizeForLayoutSize(150),
                    height: PixelRatio.getPixelSizeForLayoutSize(80),
                    opacity: 1
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    top: PixelRatio.getPixelSizeForLayoutSize(110),
                    width: '30%',
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: '#0A3DC2',
                        width: PixelRatio.getPixelSizeForLayoutSize(12),
                        height: PixelRatio.getPixelSizeForLayoutSize(12),
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={LinkWhatsApp}
                >
                    <FontAwesome
                        name="whatsapp"
                        size={25}
                        color={'#F8F8F8'}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#0A3DC2',
                        width: PixelRatio.getPixelSizeForLayoutSize(12),
                        height: PixelRatio.getPixelSizeForLayoutSize(12),
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    onPress={LinkInstagram}
                >
                    <AntDesign
                        name="instagram"
                        size={25}
                        color={'#F8F8F8'}
                    />
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
        backgroundColor: '#0A3DC2'
    },

    titleNome: {
        color: '#FFF',
        fontWeight: '500',
        textAlign: 'left',
        width: '70%',
        fontSize: 25,

    },

    titleDesc: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '300',
        textAlign: 'left',
        width: '70%'
    },

    titlePrice: {
        textAlign: 'left',
        width: '70%',
        color: '#FFF',
        fontWeight: '800'
    },
})

export default ServiceView;
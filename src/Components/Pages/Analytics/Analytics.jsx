import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    Image
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

//Importação de Hook
import { UsuarioHook } from "../../Hook/Usuario/Usuario";

//importação de estilo
import styles from './Style'

//Importação de componentes
import Grafics from "../../Grafics/Grafics";
import Loading from "../../Loading/Loading";


export default function Analytics() {

    //Escolher tela de Gráfico - Comentario
    const [changeScreen, setChangeScreen] = useState(true)

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    //Loading Page
    

    //Listagem do usuario por id
    const { usuario, isLoading } = UsuarioHook();

    //Listagem de Avaliações
    const [avaliacao, setAvaliacao] = useState([]);

    if (isLoading)
        return (
            <Loading />
        );

    return (
        <View style={styles.container}>
            <View style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: PixelRatio.getPixelSizeForLayoutSize(50)
            }}>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 110,
                        height: 110,
                        elevation: 5,
                        borderRadius: 110,
                        backgroundColor: '#FFF',
                    }}
                >
                    <Image
                        source={{ uri: usuario.imagem }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    />
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: '1%' }}>{usuario.nome}</Text>
                <Text style={{ fontSize: 15, fontWeight: '300', top: '1%' }}>{usuario.empresa}</Text>
                <View style={{
                    width: PixelRatio.getPixelSizeForLayoutSize(130),
                    height: PixelRatio.getPixelSizeForLayoutSize(1),
                    backgroundColor: '#9F9999',
                    top: PixelRatio.getPixelSizeForLayoutSize(10),
                }}></View>
                <View style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(5),
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={styles.buttonGrafic} disabled={changeScreen} onPress={toogleScreen}>
                        <Text style={{ color: '#FFF', fontWeight: '500' }}>Gráficos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ top: PixelRatio.getPixelSizeForLayoutSize(120), }}>
                <View style={{
                    width: '100%',
                    height: PixelRatio.getPixelSizeForLayoutSize(300)
                }}>
                    <View>
                        <Grafics />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
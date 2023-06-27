import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    PixelRatio,
    ScrollView,
    Image,
    RefreshControl
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

//Importação de Hook
import { DadosUsuario } from "../Login/SalvarJwt/AuthContext";

//importação de estilo
import styles from './Style'

//Importação de componentes
import Grafics from "../../Grafics/Grafics";
import Loading from "../../Loading/Loading";
import BarGrafic from "../../Grafics/BarGrafic";


export default function Analytics() {

    //Escolher tela de Gráfico - Comentario
    const [changeScreen, setChangeScreen] = useState(true)

    //Dados usuario
    const [usuario, setUsuario] = useState("");

    //Carregamento de Pagina

    //Carregamento de dados
    const [isLoading, setLoading] = useState(true);

    const toogleScreen = () => {
        setChangeScreen(!changeScreen);
    };

    async function Dados() {
        const jwt = await DadosUsuario();
        setUsuario(jwt);
    }

    useEffect(() => {
        Dados();
        setLoading(false)
    }, []);


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
                        source={{ uri: usuario.Imagem }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    />
                </View>
                <Text style={{ fontSize: 25, fontWeight: 'bold', top: '1%' }}>{usuario.Nome}</Text>
                <Text style={{ fontSize: 15, fontWeight: '300', top: '1%' }}>{usuario.Empresa}</Text>
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
            <ScrollView
                style={{
                    top: PixelRatio.getPixelSizeForLayoutSize(120),
                }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    width: '100%',
                    height: PixelRatio.getPixelSizeForLayoutSize(320)
                }}>
                    <View>
                        <Grafics />
                        <BarGrafic />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
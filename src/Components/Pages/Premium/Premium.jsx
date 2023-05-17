import React from "react";
import { View, Text, StyleSheet, Image, PixelRatio, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';



export default function Premium() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/starback.png')}
                style={{
                    position: 'absolute',
                    left: PixelRatio.getPixelSizeForLayoutSize(70)
                }}
            />
            <View style={{
                backgroundColor: '#0027FE',
                width: 100,
                height: 100,
                borderRadius: 100,
                position: 'absolute',
                bottom: PixelRatio.getPixelSizeForLayoutSize(170),
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#FFF',
                borderWidth: 1
            }}>
                <Image
                    source={require('../../../../assets/crown.png')}
                    style={{
                        resizeMode: 'stretch',
                        width: PixelRatio.getPixelSizeForLayoutSize(30),
                        height: PixelRatio.getPixelSizeForLayoutSize(25),
                        left: PixelRatio.getPixelSizeForLayoutSize(3.2),
                        top: PixelRatio.getPixelSizeForLayoutSize(2),
                    }}
                />
            </View>
            <Text style={{
                fontWeight: 'bold',
                color: '#FFF',
                fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
                textAlign: 'center',
                width: '60%',
                top: PixelRatio.getPixelSizeForLayoutSize(30)
            }}>
                Obtenha o pacote premium hoje
            </Text>
            <Text style={{
                color: '#FFF',
                textAlign: 'center',
                fontSize: PixelRatio.getPixelSizeForLayoutSize(5),
                width: '60%',
                opacity: 0.5,
                top: PixelRatio.getPixelSizeForLayoutSize(30),
            }}>
                Alavanque suas vendas com algum de nossos planos
            </Text>
            <View style={{
                top: PixelRatio.getPixelSizeForLayoutSize(30)
            }}>
                <TouchableOpacity style={styles.cooper}>
                    <View>
                        <Text style={{
                            color: '#FFF',
                            fontWeight: 'bold',
                            fontSize: PixelRatio.getPixelSizeForLayoutSize(10)
                        }}>
                            Bronze
                        </Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
                            opacity: 0.6
                        }}>
                            Pague 9,99/mês
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
                        fontWeight: 'bold',
                        color: '#FFF'
                    }}>
                        9,99
                    </Text>
                    <View style={{left: PixelRatio.getPixelSizeForLayoutSize(2)}}>
                        <Entypo name="circle" size={25} color={'#0A3DC2'} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cooper}>
                    <View>
                        <Text style={{
                            color: '#FFF',
                            fontWeight: 'bold',
                            fontSize: PixelRatio.getPixelSizeForLayoutSize(10)
                        }}>
                            Prata
                        </Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
                            opacity: 0.6
                        }}>
                            Pague 24,99/mês
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
                        fontWeight: 'bold',
                        color: '#FFF'
                    }}>
                        24,99
                    </Text>
                    <Entypo name="circle" size={25} color={'#0A3DC2'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cooper}>
                    <View>
                        <Text style={{
                            color: '#FFF',
                            fontWeight: 'bold',
                            fontSize: PixelRatio.getPixelSizeForLayoutSize(10)
                        }}>
                            Diamante
                        </Text>
                        <Text style={{
                            color: '#FFF',
                            fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
                            opacity: 0.6
                        }}>
                            Pague 79,99/mês
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
                        fontWeight: 'bold',
                        color: '#FFF'
                    }}>
                        79,99
                    </Text>
                    <Entypo name="circle" size={25} color={'#0A3DC2'} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#0A3DC2'
    },

    cooper: {
        backgroundColor: '#0027FE',
        width: PixelRatio.getPixelSizeForLayoutSize(120),
        height: PixelRatio.getPixelSizeForLayoutSize(30),
        borderRadius: 50,
        borderColor: '#FFF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        margin: PixelRatio.getPixelSizeForLayoutSize(3),
        elevation: 5
    },
})
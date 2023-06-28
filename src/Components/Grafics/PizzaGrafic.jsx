import React from "react";
import { View, Text, StyleSheet, Dimensions, PixelRatio } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart,
} from "react-native-chart-kit";
import Svg, { Circle } from 'react-native-svg';

const PizzaGrafic = () => {

    //Dimensionamento do gráfico

    //Dados do gráfico
    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };

    //Configuração ddo gráfico
    const chartConfig = {

        backgroundColor: 'rgba(0,0,139,1)',
        backgroundGradientFrom: 'rgba(0,0,139,1)',
        backgroundGradientTo: 'rgba(0,0,255,1)',
        decimalPlaces: 2, // número de casas decimais nos valores do eixo Y
        color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 20,
        },
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffffff',
        },

    };

    return (
        <View
            style={{
                width: PixelRatio.getPixelSizeForLayoutSize(135),
                height: PixelRatio.getPixelSizeForLayoutSize(100),
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
                backgroundColor: '#4169E1',
                elevation: 5,
                borderRadius: 10
            }}
        >
            <Text
                style={{
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
                    fontWeight: 'bold',
                    color: '#fff',
                    elevation: 5
                }}
            >Acessos Mensais</Text>
            <View
                style={{
                    width: PixelRatio.getPixelSizeForLayoutSize(125),
                    height: PixelRatio.getPixelSizeForLayoutSize(75),
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,255,1)',
                    borderRadius: 10,
                    marginTop: PixelRatio.getPixelSizeForLayoutSize(5)
                }}
            >
                <ProgressChart
                    data={data}
                    width={PixelRatio.getPixelSizeForLayoutSize(120)}
                    height={PixelRatio.getPixelSizeForLayoutSize(70)}
                    strokeWidth={16}
                    radius={32}
                    chartConfig={chartConfig}
                    hideLegend={false}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default PizzaGrafic;
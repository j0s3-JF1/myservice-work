import React from "react";
import { View, Text, StyleSheet, Dimensions, PixelRatio } from "react-native";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import Svg, { Circle } from 'react-native-svg';

const Grafics = () => {

    //Dimensionamento do gráfico

    //Dados do gráfico
    const data = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
            {
                data: [10, 60, 20, 80, 110, 50],
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                strokeWidth: 5
            }
        ],
        legend: ["Ganhos Mensais"]
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
            borderRadius: 10,
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
                backgroundColor: '#4169E1',
                elevation: 5,
                borderRadius: 10,
                marginTop: PixelRatio.getPixelSizeForLayoutSize(5)
            }}
        >
            <Text
                style={{
                    fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
                    fontWeight: 'bold',
                    color: '#fff',
                    elevation: 5
                }}
            >Ganhos Mensais</Text>
            <LineChart
                data={data}
                width={PixelRatio.getPixelSizeForLayoutSize(120)}
                height={PixelRatio.getPixelSizeForLayoutSize(70)}
                yAxisLabel="R$"
                chartConfig={chartConfig}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default Grafics;
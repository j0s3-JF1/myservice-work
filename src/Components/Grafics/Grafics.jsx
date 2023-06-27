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
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2
            }
        ],
        legend: ["Ganhos Mensais"]
    };

    //Configuração ddo gráfico
    const chartConfig = {

        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 2, // número de casas decimais nos valores do eixo Y
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 16,
        },
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
        },
        
    };

    return (
        <View
            style={{
                width: '80%'
            }}
        >
            <LineChart
                data={data}
                width={PixelRatio.getPixelSizeForLayoutSize(130)}
                height={PixelRatio.getPixelSizeForLayoutSize(80)}
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
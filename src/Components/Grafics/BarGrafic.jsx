import { AntDesign } from "@expo/vector-icons";
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

const BarGrafic = () => {

    //Dimensionamento do gráfico

    //Dados do gráfico
    const data = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
        datasets: [
            {
                data: [30, 45, 28, 80, 99]
            }
        ]
    };

    //Configuração ddo gráfico
    const chartConfig = {

        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 2, // número de casas decimais nos valores do eixo Y
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 25,
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
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <BarChart
                data={data}
                width={PixelRatio.getPixelSizeForLayoutSize(130)}
                height={PixelRatio.getPixelSizeForLayoutSize(85)}
                yAxisLabel=""
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default BarGrafic;
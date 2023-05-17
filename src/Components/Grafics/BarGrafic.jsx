import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
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
    const screenWidth = Dimensions.get("window").width;

    //Dados do gráfico
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
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
        <View>
            <BarChart
                style={{width: '100%'}}
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default BarGrafic;
import React, { Component } from "react";
import { View, Image, Animated, Easing } from "react-native";
import { ActivityIndicator } from "react-native";

class Loading extends Component {

    constructor(props) {
        super(props);
        this.opacityValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation() {
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.opacityValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(this.opacityValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }

    render() {
        const opacity = this.opacityValue.interpolate({
            inputRange: [0.4, 1],
            outputRange: [0.4, 1],
        });

        return (
            <View style={{
                widht: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F8F8F8'
            }}>
                <Animated.Image
                    source={require('../../../assets/MyService_Icon.png')}
                    style={{ opacity }}
                />
            </View>
        );
    }
}

export default Loading;
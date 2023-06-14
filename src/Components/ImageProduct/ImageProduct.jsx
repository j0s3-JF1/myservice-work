import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, PixelRatio } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const ImageProduct = () => {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.profileButton} onPress={pickImage}>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 100 }} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    profileButton: {
        width: PixelRatio.getPixelSizeForLayoutSize(55),
        height: PixelRatio.getPixelSizeForLayoutSize(55),
        elevation: 5,
        borderRadius: 110,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profile: {
        resizeMode: 'stretch',
        width: PixelRatio.getPixelSizeForLayoutSize(45),
        height: PixelRatio.getPixelSizeForLayoutSize(45),
        borderRadius: 50
    },
});

export default ImageProduct;
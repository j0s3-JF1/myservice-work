import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {

    const [image, setImage] = useState("");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (result.canceled) {
            return
        }

        setImage(result.assets[0].uri);
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.profileButton} onPress={pickImage}>
                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 100 }} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    profileButton: {
        width: 110,
        height: 110,
        elevation: 5,
        borderRadius: 110,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    profile: {
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        borderRadius: 50
    },
});

export default Profile;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        width: '100%',
        height: 1550,
        top: '2%'
    },

    Search:{
        flexDirection: 'row',
        width: '95%',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        elevation: 2,
        marginTop: '15%',
        position: 'relative',
        left: '1.5%',
    },

    iconSearch:{
        width: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputSearch: {
        width: '70%',
        height: '100%',
        fontSize: 20,
    },
})

export default styles;
import React from "react";
import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign, FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

//Importação de telas
import Analytics from "../Pages/Analytics/Analytics";
import Search from "../Pages/Search/Search";
import Store from "../Pages/Store/Store";
import Premium from "../Pages/Premium/Premium";

//Importe de componente
import NewButton from "./NewButton/NewButton";

export default function TabsWork() {

    const theme = useTheme();
    theme.colors.secondaryContainer = "transperent";

    const Tab = createMaterialBottomTabNavigator();

    return(
    <Tab.Navigator
        initialRouteName="Home"
        theme={{ colors: { secondaryContainer: "transparent" } }}
        barStyle={{ backgroundColor: "#FFF" }}
        labeled={true}
    >
        <Tab.Screen
            name="Analytics"
            component={Analytics}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicons name="analytics" color={"#0A3DC2"} size={25} />
                ),
            }}

        />
        <Tab.Screen
            name="Search"
            component={Search}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Ionicons name="search" color={"#0A3DC2"} size={25} />
                ),
            }}
        />
        <Tab.Screen
            name="Loja"
            component={Store}
            options={{
                headerShown: false,
                tabBarLabel: '',
                tabBarIcon: ({ size, color }) => (
                    <NewButton size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Store"
            component={Store}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <FontAwesome5 name="store" color={"#0A3DC2"} size={25} />
                ),
            }}
        />
        <Tab.Screen
            name="Premium"
            component={Premium}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <FontAwesome name="star-o" color={"#0A3DC2"} size={25} />
                ),
            }}
        />
    </Tab.Navigator>
    );
}
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Pages/Login/Login"
import Account from "../Pages/Account/Account";
import CadastroEnterprise from "../Pages/CadastroEnterprise/Cadastro";
import CadastroWorker from "../Pages/CadastroWorker/Cadastro";
import TabsWork from "../Tabs/TabWork";

export default function Routes(){

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Empresa"
                component={CadastroEnterprise}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Autonomo"
                component={CadastroWorker}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Conta"
                component={Account}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Tab"
                component={TabsWork}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
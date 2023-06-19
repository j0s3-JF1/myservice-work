import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


//Telas do app
import Login from "../Pages/Login/Login"
import Account from "../Pages/Account/Account";
import CadastroEnterprise from "../Pages/CadastroEnterprise/Cadastro";
import CadastroWorker from "../Pages/CadastroWorker/Cadastro";
import TabsWork from "../Tabs/TabWork";
import MenuStore from "../Pages/MenuStrore/MenuStore";
import ProductSpace from "../Pages/ProductSpace/ProductSpace";
import ServiceSpace from "../Pages/ServiceSpace/ServiceSpace";
import ForgotPass from "../Pages/ForgotPass/ForgotPass";
import MenuProfile from "../Pages/MenuEdit/MenuEdit";
import ProductView from "../Pages/ProductView/ProductView";
import ServiceView from "../Pages/ServiceView/ServiceView";
import EditProduct from "../Pages/ProductView/EditProduct/EditProduct";
import Edit from "../Pages/MenuEdit/Edit/Edit";
import Analytics from "../Pages/Analytics/Analytics";
import AddProduct from "../Pages/AddProduct/AddProduct";

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
            <Stack.Screen
                name="MenuStore"
                component={MenuStore}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ProductSpace"
                component={ProductSpace}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ServiceSpace"
                component={ServiceSpace}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Forgot"
                component={ForgotPass}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="MenuEdit"
                component={MenuProfile}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ProductView"
                component={ProductView}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="ServiceView"
                component={ServiceView}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="EditProduct"
                component={EditProduct}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Edit"
                component={Edit}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
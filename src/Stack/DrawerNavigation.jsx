import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Views/HomeScreen";
import LoginScreen from "../Views/LoginScreen";
import CompraScreen from "../Views/CompraScreen";
import { View, Image } from "react-native";
import CustomDrawer from "../Components/CustomDrawer.jsx/index.jsx";

const Drawer = createDrawerNavigator();

export default props =>{

    return(
        <Drawer.Navigator 
            screenOptions={{title: ''}}
        >
            <Drawer.Screen
                name="Home" component={HomeScreen} options={{title: 'Home'}}
            />
            <Drawer.Screen
                name="Compra" component={CompraScreen} options={{title: 'Compras'}}
            />
        </Drawer.Navigator>
    )
}
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OpenDrawer from "./DrawerNavigation";

import SplashScreen from "../Views/SplashScreen";
import LoginScreen from "../Views/LoginScreen";

export default props =>{
    const Stack = createNativeStackNavigator()
    return(
        <Stack.Navigator 
            screenOptions={{headerShown: false, title: ''}}>
            <Stack.Screen
                name="Splash" component={SplashScreen}
            />
            <Stack.Screen
                name="Login" component={LoginScreen}
            />



            <Stack.Screen
                name="Drawer" component={OpenDrawer} options={{headerShown: false, title: ''}}
            />
        </Stack.Navigator>
    )
}
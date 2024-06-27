import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import StackNavigation from "./Stack/StackNavigation";


export default props => {
    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <StackNavigation/>
            </NavigationContainer>
        </SafeAreaView>
    )
}
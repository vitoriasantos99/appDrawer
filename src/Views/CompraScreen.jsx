import React from "react";
import { View, Text, Button } from "react-native";

export default props =>{
    return(
        <View>
            <Text>Home</Text>
            <Button
                title="ir para tela de Home" onPress={() => props.navigation.navigate('Login')}
            />
        </View>
    )
}
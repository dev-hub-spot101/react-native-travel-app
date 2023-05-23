/* eslint-disable prettier/prettier */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Welcome from "./screens/Welcome";
import Home from "./screens/Home";
import Detail from "./screens/Detail";

const Stack = createNativeStackNavigator();

export default function App(){
    return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="detail" component={Detail} />
          </Stack.Navigator>
      </NavigationContainer>
    );
}
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardFront from "./CardFront";
import CardBack from "./CardFront";
import CardPortfolio from './CardPortfolio';
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front"
      screenOptions={{
        headerStyle: { backgroundColor: '#1e90ff'},
        headerTintColor: '#fff'
      }}>
        <Stack.Screen
        name="Front"
        component={CardFront}
        options={{title:'About Me'}}
        />
        <Stack.Screen
        name="Back"
        component={CardBack}
        options={{title:'Details'}}
        />
        <Stack.Screen
        name="Portfolio"
        component={CardPortfolio}
        options={{title:'Portfolio'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
 scrollContent: {
  padding: 15,
  paddingBottom: 32,
 },
});

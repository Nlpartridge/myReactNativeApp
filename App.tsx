import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardFront from "./CardFront";
import CardBack from "./CardFront";
import CardPortfolio from './CardPortfolio';

const Stack = createNativeStackNavigator(); //ADDED to fix errors

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front">
        <Stack.Screen
        name="Front"
        component={CardFront}
        options={{title:'Card Front'}}
        />
        <Stack.Screen
        name="Back"
        component={CardBack}
        options={{title:'Card Back'}}
        />
        <Stack.Screen
        name="Portfolio"
        component={CardPortfolio}
        options={{title:'Portfolio'}}
        />
        {/* FIXED line 31. Was originally StackActions.Navigator. */}
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

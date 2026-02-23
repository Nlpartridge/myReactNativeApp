import React from "react";
import { Animated } from 'react-native';
import {useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardFront from "./CardFront";
import CardBack from "./CardFront";
import CardPortfolio from './CardPortfolio';
import CardFetch from "./CardFetch";
import {ThemeProvider } from "./ThemeContext";

const Stack = createNativeStackNavigator(); //ADDED to fix errors

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ThemeProvider>
      <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Front">
            <Stack.Screen name="Front" component={CardFront} options={{ title: 'Card Front'}}/>
            <Stack.Screen name="Back" component={CardBack} options={{ title: 'Card Back'}} />
            <Stack.Screen name="Portfolio" component={CardPortfolio} options={{ title: 'Portfolio'}} />
            <Stack.Screen name="CardFetch" component={CardFetch} options={{ title: 'Weather'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </Animated.View>
    </ThemeProvider>
  );
}
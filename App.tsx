import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CardFront from "./CardFront";
import CardBack from "./CardFront";
import CardPortfolio from './CardPortfolio';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}><CardPortfolio /> <CardBack />
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <CardFront />
      </ScrollView>  
     </SafeAreaView>
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

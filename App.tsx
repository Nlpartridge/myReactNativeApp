import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CardFront from "./CardFront";
import CardBack from "./CardFront";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}> <CardBack />
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

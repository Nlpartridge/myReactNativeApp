import React from "react";
import { View, Button } from "react-native";

export default function CardFront({ navigation }) {
    return (
        <View style={styles.container}>
        <Image
        source={require("./profile.jpg")}
        style={styles.profileImage}/>

        <Text style={styles.name}>Natalia Partridge</Text>
        <Text style={styles.tagline}>Creative, Reliable, Future Developer</Text>
        <Text style={styles.info}>402-707-3332</Text>
        <Text style={styles.info}>partridgenatalia1@gmail.com</Text>
        <Image
        source={require("./disks.png")}
        style={styles.decorativeImage}/>
        <View style={{width:200}}>
        <Button
        title="Go to Card Back"
        onPress={() => navigation.navigate('Back')}
/>
        </View>
          <View style={{width:200}}>
        <Button
        title="Go to Card Back"
        onPress={() => navigation.navigate('Back')}/> 
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 16,
    },
    name: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 8,
    },
    tagline: {
        fontSize: 14,
        marginBottom: 16,
    },
    info: {
        fontSize: 16,
        marginBottom: 6,
    },
    decorativeImage: {
        width: 200,
        height: 100,
        resizeMode: "contain",
        marginTop: 20,
    },
});
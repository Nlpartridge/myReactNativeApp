import React, { useContext } from "react";
import { View, Button, Text, Image, StyleSheet } from "react-native";
import { ThemeContext} from './ThemeContext';

export default function CardFront({ navigation }) {

    const {darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, darkMode ? styles.containerDark : styles.containerLight]}>
            <Image
                source={require("./profile.jpg")}
                style={styles.profileImage}/>

            <Text style={[styles.name, darkMode ? styles.textDark : styles.textLight]}>Natalia Partridge</Text>
            <Text style={[styles.tagline, darkMode ? styles.textDark : styles.textLight]}>Creative, Reliable, Future Developer</Text>
            <Text style={[styles.info, darkMode ? styles.textDark : styles.textLight]}>402-707-3332</Text>
            <Text style={[styles.info, darkMode ? styles.textDark : styles.textLight]}>partridgenatalia1@gmail.com</Text>
            <Image source={require("./disks.png")} style={styles.decorativeImage}/>

            <View style={styles.buttonRow}>
                <Button title="Go to Card Back" onPress={() => navigation.navigate('Back')}/>
            </View>

            <View style={styles.buttonRow}>
                <Button title="Open Portfolio" onPress={() => navigation.navigate('Portfolio')}/> 
            </View>

            <View style={styles.buttonRow}>
                <Button title="Open Weather" onPress={() => navigation.navigate('CardFetch')}/>
            </View>

            <View style={styles.buttonRow}>
                <Button title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} onPress={toggleTheme}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    containerDark: {
        backgroundColor: '#000',
    },
    containerLight: {
        backgroundColor: '#fff',
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
    textDark: {
        color: '#fff',
    },
    textLight: {
        color: '#000',
    },
    buttonRow: {
        marginVertical: 8,
        width: '100%',
        paddingHorizontal: 16,
    },
});
import React, {useContext} from "react";
import {View, Button, Text, StyleSheet} from "react-native";
import CardList from "./CardList";
import { ThemeContext } from "./ThemeContext";

export default function CardBack({navigation}) {
    const {darkMode} = useContext(ThemeContext);

    return (
        <View style={[styles.container, darkMode ? styles.containerDark : styles.containerLight]}>
            <Text style={[styles.title, darkMode ? styles.textDark : styles.textLight]}>Natalia Partridge</Text>
            <Text style={[styles.link, darkMode ? styles.textDark : styles.textLight]}>@natalia.dev.com</Text>
        <View style={[styles.listWrapper, darkMode ? styles.borderDark : styles.borderLight]}>
            <CardList />
        </View>
        <View style={styles.buttonRow}>
            <Button title="View Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
</View>
</View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 16,
        padding: 16,
        borderRadius: 14,
        borderWidth: 1,
        flex: 1,
    },
    containerDark: {
        borderColor: '#fff',
    },
    containerLight: {
        borderColor: '#000',
    },
    textDark: {
        color: '#fff',
    },
    textLight: {
        color: '#000',
    },
    borderDark: {
        borderTopColor: '#fff',
    },
    borderLight: {
        borderTopColor: '#000',
    },
    title: {
        fontSize: 22,
        fontWeight: "700",
        marginBottom: 6,
    },
    link: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 14,
    },
    listWrapper: {
        paddingTop: 8,
        borderTopWidth: 1,
    },
    buttonRow: {
        marginTop: 12,
    },
});